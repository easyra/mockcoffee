import React from 'react';
import CTA from './CTA';
import NavBar from './NavBar';

const LandingPage = () => {
  return (
    <>
      <div className='landing'>
        <NavBar />
        <CTA />
      </div>
    </>
  );
};

export default LandingPage;
