import React from 'react';
import CTAText from './CTAText';
import Schedule from './Schedule';
import StreamingStatus from './StreamingStatus';

const CTA = () => {
  return (
    <>
      <div className='cta'>
        <div className='content'>
          <CTAText />
          <div className='info'>
            <Schedule />
            <StreamingStatus />
          </div>
        </div>
      </div>
    </>
  );
};

export default CTA;
