import React from 'react';
import Message from './Message';

const MessageBox = ({ messages }) => {
  return (
    <div className='message-box'>
      {messages.map(message => (
        <Message username={message.username} text={message.text} />
      ))}
    </div>
  );
};

export default MessageBox;
