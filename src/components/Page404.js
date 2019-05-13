import React from 'react';
import { Link } from 'react-router-dom';

const Page404 = () => {
  return (
    <div className='page404'>
      <div className='text'>
        <h1>404: Page Not Found</h1>
        <Link to='/' className='btn animate'>
          <span>Go Back to </span>Home
        </Link>
      </div>
    </div>
  );
};

export default Page404;
