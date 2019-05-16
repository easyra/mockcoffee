import React, { useState, useEffect } from 'react';
import ChatInput from './ChatInput';
import MessageBox from './MessageBox';
import { database } from '../../firebase';
import AWS from '../../aws/AWSConfig.js';

const Chat = () => {
  const getChatFB = () => {
    database.ref('chatroom').on('value', snapshot => {
      const messages = snapshot.exists() ? Object.values(snapshot.val()) : [];
      setMessages(messages);
    });
  };

  useEffect(() => {
    getChatFB();
  });

  const [messages, setMessages] = useState([]);
  const addNewMessage = (username, text) => {
    database.ref('chatroom').push({ username, text });
  };
  return (
    <div className='chat'>
      <MessageBox messages={messages} />
      <ChatInput addNewMessage={addNewMessage} />
    </div>
  );
};

export default Chat;
