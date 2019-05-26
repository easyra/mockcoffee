import React from 'react';

const StreamingCard = ({ isLive }) => {
  return (
    <div className='streaming-card'>
      <h2>{isLive ? 'Live!' : 'Live Soon'}</h2>
      <div className='video-list'>
        <div className='video-card'>
          <img
            src={
              isLive
                ? 'https://static-cdn.jtvnw.net/jtv_user_pictures/0a0f9c49-ebc2-4f1e-90e6-0b57c8455a32-profile_image-300x300.jpg'
                : 'https://i.imgur.com/bXB30sb.jpg'
            }
          />
          <div className='img-bg' />
          <div>{isLive ? isLive.title : 'Title of the Video'}</div>
        </div>
      </div>
      <h3 className={`btn animate ${isLive ? 'twitch' : 'youtube'}`}>
        <i class={`fab fa-${isLive ? 'twitch' : 'youtube'} fa-1x`} />
        Watch Now
      </h3>
    </div>
  );
};

export default StreamingCard;
