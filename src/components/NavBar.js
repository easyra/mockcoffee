import React from 'react';

const NavBar = () => {
  return (
    <header className='nav'>
      <nav className='content'>
        <ul className='items'>
          <li className='item'>YouTube</li>
          <li className='item'>Twitch</li>
          <li className='item'>Instagram</li>
          <li className='item'>Twitter</li>
          <li className='item'>Discord</li>
          <li className='item login-btn'>Login</li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
