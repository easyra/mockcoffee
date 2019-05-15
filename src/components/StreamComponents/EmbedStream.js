import React from 'react';

const EmbedStream = () => {
  return (
    <div className='video'>
      <iframe
        src='https://player.twitch.tv/?channel=mockcoffee'
        frameborder='0'
        allowfullscreen='true'
        scrolling='no'
      />
    </div>
  );
};

export default EmbedStream;
