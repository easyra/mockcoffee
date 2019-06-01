import React from 'react';

const MentionsContainer = ({ username, changeFocusedUser }) => {
  const handleClick = () => {
    changeFocusedUser(username);
  };
  return (
    <span onClick={handleClick} className='mentions'>
      {username}{' '}
    </span>
  );
};

export default MentionsContainer;
