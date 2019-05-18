import React, { useState, useEffect, useContext } from 'react';
import { auth } from '../../firebase';
import { LoggedIn } from '../../App';
const ChatInput = ({ addNewMessage }) => {
  const [input, SetInput] = useState({ text: '' });
  const { isLoggedIn, setLoginModal } = useContext(LoggedIn);
  const handlePress = e => {
    if (input.text.replace(/\s/g, '').length > 0) {
      if (e.key === 'Enter') {
        if (isLoggedIn) {
          addNewMessage(input.text);
          SetInput({ text: '' });
        } else {
          setLoginModal(true);
        }
      }
    }
  };
  const handleChange = e => {
    if (
      input.text.length === 0 &&
      e.target.value.replace(/\s/g, '').length === 0
    ) {
      return;
    } else {
      SetInput({ [e.target.name]: e.target.value });
    }
  };

  return (
    <div className='chat-input'>
      <textarea
        onKeyUp={handlePress}
        value={input.text}
        onChange={handleChange}
        name='text'
        className='input-box'
        placeholder={
          isLoggedIn && auth.currentUser
            ? `Hi ${auth.currentUser.displayName}! Say something friendo.`
            : 'You have to be logged in to say something.'
        }
      />

      <div className='char-counter'>{input.text.length}/250</div>
      <div className='options'>
        <h6 className='option'>logs</h6>
        <h6 className='option'>ignore</h6>
        <h6 className='option'>ban</h6>
      </div>
    </div>
  );
};

export default ChatInput;
