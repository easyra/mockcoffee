import React from 'react';
import EmbedStream from './StreamComponents/EmbedStream';
import EmbedChatTwitch from './StreamComponents/EmbedChatTwitch';
import Chat from './StreamComponents/Chat';

const StreamContainer = () => {
  return (
    <div className='stream'>
      <div className='content'>
        <EmbedStream />
        {/* <EmbedChatTwitch /> */}
        <Chat />
      </div>
    </div>
  );
};

export default StreamContainer;
