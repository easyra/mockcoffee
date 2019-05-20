import React, { Component, useEffect, useRef } from 'react';
import Message from './Message.js';
import Emote from './Emote.js';

const MessageBox = React.memo(({ messages, emoteList }) => {
  const ref = useRef(null);
  useEffect(() => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  });
  return (
    <div className='message-box'>
      {messages.map(message => {
        let { text } = message;
        const { username } = message;
        let wordArr = text.split(' ');
        for (let i = wordArr.length - 1; i >= 0; i--) {
          if (emoteList[wordArr[i]]) {
            wordArr[i] = (
              <Emote src={emoteList[wordArr[i]]} emoteName={wordArr[i]} />
            );
          } else {
            wordArr[i] = wordArr[i] + ' ';
          }
        }
        return <Message username={username} text={wordArr} />;
      })}
      <div className='bottom-text' ref={ref} />
    </div>
  );
});

export default MessageBox;
