import React from 'react';
import EmbedStream from './StreamComponents/EmbedStream';
import EmbedChatTwitch from './StreamComponents/EmbedChatTwitch';

const StreamContainer = () => {
  return (
    <div className='stream'>
      <div className='content'>
        <EmbedStream />
        {/* <EmbedChatTwitch /> */}
        <div className='chat'>
          <div className='message-box'>
            <div className='message'>
              <span className='username'>MockRabbit: </span>hello!
            </div>
            <div className='message'>
              <span className='username'>MockRabbit: </span> The href attribute
              requires a valid value to be accessible. Provide a valid,
              navigable address as the href value. If you cannot provide a valid
              href, but still need the element to resemble a link, use a button
              and change it with appropriate styles. Learn more:
              https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md!
            </div>
          </div>
          <div className='chat-input'>
            <textarea
              className='input-box'
              placeholder='TYPE SOMETHING YOU DUMB BITCH'
            />

            <div className='char-counter'>0/250</div>
            <div className='options'>
              <h6 className='option'>logs</h6>
              <h6 className='option'>ignore</h6>
              <h6 className='option'>ban</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StreamContainer;
