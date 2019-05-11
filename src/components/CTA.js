import React from 'react';
import NavBar from './NavBar';
import CTAText from './CTAText';
import Schedule from './Schedule';

const CTA = () => {
  return (
    <>
      <NavBar />
      <div className='cta'>
        <div className='content'>
          <CTAText />
          <div className='info'>
            <Schedule />
          </div>
        </div>
      </div>
    </>
  );
};

export default CTA;
