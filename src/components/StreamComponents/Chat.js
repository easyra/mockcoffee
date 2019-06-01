import React, { useState, useEffect, useContext } from 'react';
import { LoggedIn } from '../../App.js';
import ChatInput from './ChatInput';
import MessageBox from './MessageBox';
import { database, auth, firestore } from '../../firebase';
import AWS from '../../aws/AWSConfig.js';

const Chat = () => {
  const [emoteList, setEmoteList] = useState({});
  const [messages, setMessages] = useState([]);
  const [autoScroll, setAutoScroll] = useState(true);
  const [myUsername, setMyUsername] = useState(false);
  const [activeUsers, setActiveUsers] = useState({});
  const { isLoggedIn } = useContext(LoggedIn);

  useEffect(() => {
    let didCancel = false;
    const getChatInfo = () => {
      firestore
        .collection('chatinfo')
        .doc('emoteList')
        .get()
        .then(doc => {
          if (!didCancel) {
            setEmoteList(doc.data());
          }
        });
    };
    const getActiveUsers = () => {
      database.ref('activeUsername').on('value', snapshot => {
        setActiveUsers(snapshot.val());
      });
    };

    const removeActiveUser = () => {
      if (auth.currentUser && auth.currentUser.displayName) {
        database
          .ref(`activeUsername/${auth.currentUser.displayName}`)
          .set(null);
      }
    };

    const getChat = () => {
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
            if (!didCancel && isLoggedIn) {
              database
                .ref(`activeUsername/${auth.currentUser.displayName}`)
                .set(true);
              database
                .ref(`activeUsername/${auth.currentUser.displayName}`)
                .onDisconnect()
                .set(null);
            }
          }
        });
    };

    getChatInfo();
    getActiveUsers();
    getChat();

    return function cleanup() {
      database.ref('chatroom').off();
      database.ref('activeUsername').off();
      setMessages([]);
      removeActiveUser();
      didCancel = true;
    };
  }, []);

  useEffect(() => {
    if (isLoggedIn && auth.currentUser) {
      database.ref(`activeUsername/${auth.currentUser.displayName}`).set(true);
    }
  });

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
