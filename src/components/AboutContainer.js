import React from 'react';
import TwitchCopy from './AboutCopies/TwitchCopy.js';
import YouTubeCopy from './AboutCopies/YouTubeCopy.js';
import InstagramCopy from './AboutCopies/InstagramCopy.js';
import DiscordCopy from './AboutCopies/DiscordCopy.js';

const AboutContainer = () => {
  return (
    <div className='about' id='about'>
      <h2>Who is MockCoffee?</h2>
      <TwitchCopy />
      <YouTubeCopy />
      <InstagramCopy />
      <DiscordCopy />
    </div>
  );
};

export default AboutContainer;
