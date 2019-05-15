import React, { useState } from 'react';
import ChatInput from './ChatInput';
import MessageBox from './MessageBox';

const Chat = () => {
  const dummydata = [{ username: 'Mockrabbit', text: 'Hello mate' }];
  const [messages, setMessages] = useState(dummydata);
  const addNewMessage = newMessage => {
    const messagesClone = messages.slice(0);
    messagesClone.push(newMessage);
    setMessages(messagesClone);
  };
  return (
    <div className='chat'>
      <MessageBox messages={messages} />
      <ChatInput addNewMessage={addNewMessage} />
    </div>
  );
};

export default Chat;
