import React from 'react';

const Message = ({ username, text }) => {
  return (
    <div className='message'>
      <span className='username'>{username}: </span>
      {text}
    </div>
  );
};

export default Message;
