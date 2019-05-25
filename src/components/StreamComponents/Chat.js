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
    const getChatFB = () => {
      database
        .ref('chatroom')
        .limitToLast(50)
        .on('value', snapshot => {
          if (!didCancel) {
            const messages = snapshot.exists()
              ? Object.values(snapshot.val())
              : [];
            setMessages(messages);
          }
        });
    };
    const getChatInfo = () => {
      firestore
        .collection('chatinfo')
        .doc('emoteList')
        .get()
        .then(doc => {
          if (!didCancel) {
            setEmoteList(doc.data());
          }
        })
        .catch(err => console.log('err'));
    };
    getChatInfo();
    getChatFB();
    return function cleanup() {
      database.ref('chatroom').off();
      didCancel = true;
    };
  }, []);

  const addNewMessage = text => {
    if (auth.currentUser) {
      const username = auth.currentUser.displayName;
      const uid = auth.currentUser.uid;
      database.ref('chatroom').push({ username, text, uid });
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
