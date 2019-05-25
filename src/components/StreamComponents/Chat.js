import React, { useState, useEffect } from 'react';
import ChatInput from './ChatInput';
import MessageBox from './MessageBox';
import { database, auth, firestore } from '../../firebase';
import AWS from '../../aws/AWSConfig.js';

const Chat = () => {
  const [emoteList, setEmoteList] = useState({});
  const [messages, setMessages] = useState([]);
  const [autoScroll, setAutoScroll] = useState(true);

  useEffect(() => {
    let didCancel = false;
    firestore
      .collection('chatinfo')
      .doc('emoteList')
      .get()
      .then(doc => {
        if (!didCancel) {
          setEmoteList(doc.data());
          database
            .ref('chatroom')
            .limitToLast(50)
            .on('value', snapshot => {
              if (!didCancel) {
                setMessages([]);
                const messages = snapshot.exists()
                  ? Object.values(snapshot.val())
                  : [];
                setMessages(messages);
              }
            });
        }
      })
      .catch(err => console.log('err'));

    return function cleanup() {
      database.ref('chatroom').off();
      setMessages([]);
      didCancel = true;
    };
  }, []);

  const addNewMessage = async text => {
    if (auth.currentUser) {
      const username = auth.currentUser.displayName;
      const uid = auth.currentUser.uid;
      const msgId = await database.ref('chatroom').push().key;
      database
        .ref(`chatroom/${msgId}`)
        .set({ username, text, uid, timestamp: Date.now(), msgId });
    }
  };
  return (
    <div className='chat'>
      <MessageBox
        messages={messages}
        emoteList={emoteList}
        autoScroll={autoScroll}
        setAutoScroll={setAutoScroll}
      />
      <ChatInput addNewMessage={addNewMessage} />
    </div>
  );
};

export default Chat;

// {
//   PepeLaugh:
//     'https://firebasestorage.googleapis.com/v0/b/mockcoffee-1557995671684.appspot.com/o/PepeLaugh.png?alt=media&token=88bf7a73-adc8-4120-8463-55fc8a601f74',
//   monkaS: 'https://cdn.frankerfacez.com/emoticon/130762/1',
//   Pog: 'https://cdn.frankerfacez.com/emoticon/210748/1',
//   FeelsWeirdMan: 'https://cdn.frankerfacez.com/emoticon/131597/1',
//   monkaEyes: 'https://cdn.frankerfacez.com/emoticon/268204/1'
// }
