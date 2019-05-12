import React from 'react';
import CTA from './CTA';
import AboutContainer from './AboutContainer';

const LandingPage = () => {
  return (
    <>
      <div className='landing'>
        <CTA />
        <AboutContainer />
        <div className='footer'>
          <h4>Contact me at MockCoffee@gmail.com</h4>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
