import React from 'react';

const StreamContainer = () => {
  return (
    <div className='stream'>
      <div className='content'>
        <div className='video'>
          <iframe
            src='https://player.twitch.tv/?channel=mockcoffee'
            frameborder='0'
            allowfullscreen='true'
            scrolling='no'
          />
        </div>

        <div className='chat'>
          <iframe
            src='https://www.twitch.tv/embed/mockcoffee/chat'
            frameborder='0'
            scrolling='no'
            height='630'
            width='350'
          />
        </div>
      </div>
    </div>
  );
};

export default StreamContainer;
