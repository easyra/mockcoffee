import React, { useState, useEffect } from 'react';
import ChatInput from './ChatInput';
import MessageBox from './MessageBox';
import { database, auth, firestore } from '../../firebase';
import AWS from '../../aws/AWSConfig.js';

const Chat = () => {
  const [emoteList, setEmoteList] = useState({
    PepeLaugh: 'https://cdn.frankerfacez.com/emoticon/346274/1',
    monkaS: 'https://cdn.frankerfacez.com/emoticon/130762/1',
    Pog: 'https://cdn.frankerfacez.com/emoticon/210748/1',
    FeelsWeirdMan: 'https://cdn.frankerfacez.com/emoticon/131597/1',
    monkaEyes: 'https://cdn.frankerfacez.com/emoticon/268204/1'
  });
  const [messages, setMessages] = useState([]);
  const getChatFB = () => {
    database.ref('chatroom').on('value', snapshot => {
      const messages = snapshot.exists() ? Object.values(snapshot.val()) : [];
      setMessages(messages);
    });
  };

  useEffect(() => {
    getChatFB();
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
      <MessageBox messages={messages} emoteList={emoteList} />
      <ChatInput addNewMessage={addNewMessage} />
    </div>
  );
};

export default Chat;
