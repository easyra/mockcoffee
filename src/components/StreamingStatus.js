import React, { useState } from 'react';

const StreamingStatus = () => {
  const [isOnline, setOnline] = useState(true);
  return (
    <div className='streaming'>
      {isOnline && <h3 className='btn'>Live Now!</h3>}
    </div>
  );
};

export default StreamingStatus;
