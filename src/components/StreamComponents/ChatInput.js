import React, { useState } from 'react';

const ChatInput = ({ addNewMessage }) => {
  const [input, SetInput] = useState({ text: '' });
  const handlePress = e => {
    if (input.text.replace(/\s/g, '').length > 0) {
      if (e.key === 'Enter') {
        const message = { username: 'MockRabbit', text: input.text };
        addNewMessage(message);
        SetInput({ text: '' });
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
        placeholder='TYPE SOMETHING YOU DUMB BITCH'
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
