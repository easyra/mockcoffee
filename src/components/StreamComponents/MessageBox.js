import React, { Component, useEffect, useState, useRef } from 'react';
import Message from './Message.js';
import Emote from './Emote.js';
import MentionsContainer from './MentionsContainer.js';

const MessageBox = React.memo(
  ({
    messages,
    emoteList,
    autoScroll,
    setAutoScroll,
    setFocusedUser,
    focusedUser,
    activeUsers,
    allUsers,
    AddToAllUsers
  }) => {
    const [maxScrollTop, setMaxScrollTop] = useState(null);
    const [activeName, setActiveName] = useState(null);

    const unfocused = { opacity: '0.3' };

    const changeFocusedUser = username => {
      console.log(focusedUser);
      console.log(username);
      if (!focusedUser) {
        setFocusedUser(username);
      } else if (focusedUser && focusedUser !== username) {
        setFocusedUser(username);
      } else if (focusedUser) {
        setFocusedUser(null);
      }
    };

    const handleScroll = e => {
      const { scrollTop, scrollHeight } = e.target;

      if (scrollTop >= maxScrollTop - 20) {
        setAutoScroll(true);
      } else {
        setAutoScroll(false);
      }
    };

    const scrollToBottom = () => {
      const messageBox = document.querySelector('.message-box');
      messageBox.scrollTop = messageBox.scrollHeight;
      setAutoScroll(true);
      setMaxScrollTop(messageBox.scrollTop);
    };

    useEffect(() => {
      let didCancel = false;
      if (autoScroll && !didCancel) {
        scrollToBottom();
      }
      return () => {
        didCancel = true;
      };
    });
    return (
      <>
        <div className='message-box' onScroll={handleScroll}>
          {messages.map(({ text, username, timestamp, msgId }) => {
            let wordArr = text.split(' ');
            const mentions = { [username]: true };
            if (!allUsers[username]) {
              AddToAllUsers(username);
            }
            for (let i = wordArr.length - 1; i >= 0; i--) {
              if (emoteList[wordArr[i]]) {
                wordArr[i] = (
                  <Emote src={emoteList[wordArr[i]]} emoteName={wordArr[i]} />
                );
              } else if (activeUsers && activeUsers[wordArr[i]]) {
                mentions[wordArr[i]] = wordArr[i];
                wordArr[i] = (
                  <MentionsContainer
                    username={ wordArr[i]}
                    changeFocusedUser={changeFocusedUser}
                  />
                );
              } else if (allUsers && allUsers[wordArr[i]]) {
                mentions[wordArr[i]] = wordArr[i];
                wordArr[i] = (
                  <MentionsContainer
                    username={ wordArr[i]}
                    changeFocusedUser={changeFocusedUser}
                  />
                );
              } else {
                wordArr[i] = wordArr[i] + ' ';
              }
            }
            return (
              <Message
                username={username}
                text={wordArr}
                key={msgId}
                mentions={mentions}
                focusedUser={focusedUser}
                changeFocusedUser={changeFocusedUser}
              />
            );
          })}
        </div>
        <div
          className={'bottom-text ' + (autoScroll ? '' : 'active')}
          onClick={scrollToBottom}
        >
          more messages below
        </div>
      </>
    );
  }
);

export default MessageBox;
