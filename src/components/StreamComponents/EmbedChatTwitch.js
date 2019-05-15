import React from 'react';

const EmbedChatTwitch = () => {
  return (
    <div className='embed-chat'>
      <iframe
        src='https://www.twitch.tv/embed/mockcoffee/chat'
        frameborder='0'
        scrolling='no'
        height='630'
        width='350'
      />
    </div>
  );
};

export default EmbedChatTwitch;
