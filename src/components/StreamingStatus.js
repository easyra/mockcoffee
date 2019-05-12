import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const StreamingStatus = () => {
  const [isOnline, setOnline] = useState(true);
  return (
    <div className='streaming'>
      {isOnline && (
        <Link to='/stream' className='btn animate'>
          Live Now!
        </Link>
      )}
    </div>
  );
};

export default StreamingStatus;
