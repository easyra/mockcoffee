import React from 'react';

const Message = ({
  username,
  text,
  focusedUser,
  mentions,
  changeFocusedUser
}) => {
  const unfocused = { opacity: '0.5' };
  const handleClick = () => {
    changeFocusedUser(username);
  };
  return (
    <div
      className='message'
      style={focusedUser && !mentions[focusedUser] ? unfocused : null}
    >
      <span className='username' onClick={handleClick}>
        {username}:{' '}
      </span>
      {text}
    </div>
  );
};

export default Message;
