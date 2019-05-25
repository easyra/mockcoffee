import React from 'react';

const Emote = ({ emoteName, src }) => {
  return (
    <div className={`emote ${emoteName}`}>
      {' '}
      <img src={src} alt={emoteName} title={emoteName} />{' '}
    </div>
  );
};
export default Emote;
