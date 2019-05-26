import React from 'react';

const CTAText = () => {
  return (
    <div className='cta-text'>
      <h1>
        <a href='#about'>MockCoffee</a>
      </h1>
      <h2>Streaming Everyday 6AM-10PM</h2>
      <h3 className='btn animate'>Support The Stream</h3>
      <div className='links'>
        <a className='link' href='https://www.youtube.com' target='_blank'>
          <i class='fab fa-youtube fa-3x link' />
        </a>
        <a className='link' href='https://www.youtube.com' target='_blank'>
          <i class='fab fa-twitch fa-3x link' />
        </a>
        <a className='link' href='https://www.youtube.com' target='_blank'>
          <i class='fab fa-instagram fa-3x link' />
        </a>
        <a className='link' href='https://www.youtube.com' target='_blank'>
          <i class='fab fa-twitter fa-3x link' />
        </a>
      </div>
    </div>
  );
};

export default CTAText;
