import React, { Component, useEffect, useRef } from 'react';
import Message from './Message.js';
import Emote from './Emote.js';

const MessageBox = React.memo(
  ({ messages, emoteList, autoScroll, setAutoScroll }) => {
    const ref = useRef(null);

    const scrollToBottom = () => {
      const messageBox = document.querySelector('.message-box');
      messageBox.scrollTo(0, messageBox.scrollHeight);
      setAutoScroll(true);
    };

    useEffect(() => {
      if (autoScroll) {
        scrollToBottom();
      }
    });
    return (
      <>
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
        </div>
        <div
          className={'bottom-text ' + (autoScroll ? '' : 'active')}
          onClick={scrollToBottom}
        >
          new messages!
        </div>
      </>
    );
  }
);

export default MessageBox;
