import React, { Component, useEffect, useRef } from 'react';
import Message from './Message';

const MessageBox = React.memo(({ messages }) => {
  const ref = useRef(null);
  useEffect(() => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  });
  return (
    <div className='message-box'>
      {messages.map(message => (
        <Message username={message.username} text={message.text} />
      ))}
      <div className='bottom-text' ref={ref} />
    </div>
  );
});

export default MessageBox;
