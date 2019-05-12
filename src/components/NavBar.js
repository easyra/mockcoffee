import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ match, history, location }) => {
  return (
    <header className='nav'>
      <nav className='content'>
        <ul className='items'>
          <h1 className='title'>
            <Link to='/'>
              Mock<span>Coffee</span>
            </Link>
          </h1>
          <li>
            <a className='item' href='https://www.youtube.com' target='_blank'>
              YouTube
            </a>
          </li>
          <li>
            <a className='item' href='https://www.youtube.com' target='_blank'>
              Twitch
            </a>
          </li>
          <li>
            <a className='item' href='https://www.youtube.com' target='_blank'>
              Instagram
            </a>
          </li>

          <li>
            <a className='item' href='https://www.youtube.com' target='_blank'>
              Twitter
            </a>
          </li>
          <li>
            <a className='item' href='https://www.youtube.com' target='_blank'>
              Discord
            </a>
          </li>
          <li>
            <a className='item' href='https://www.youtube.com' target='_blank'>
              Shop
            </a>
          </li>
          {!location.pathname.includes('/stream') && (
            <li>
              <Link className='item stream-link' to='/stream'>
                Stream
              </Link>
            </li>
          )}
          <li className='item login-btn'>Login</li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
