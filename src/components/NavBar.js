import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ match, history, location, toggleNavModel, navbarModel }) => {
  return (
    <header className='nav'>
      <nav className='content'>
        <ul className='items'>
          <h1 className='title'>
            <Link to='/'>
              Mock<span>Coffee</span>
            </Link>
          </h1>
          <h1 className='title-mobile'>
            <Link to='/'>
              M<span>C</span>
            </Link>
          </h1>
          <i
            class={`fas fa-${navbarModel ? 'times' : 'bars'} menu  fa-2x`}
            onClick={toggleNavModel}
          />
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

          <li className='hide-tablet'>
            <a className='item' href='https://www.youtube.com' target='_blank'>
              Twitter
            </a>
          </li>
          <li className='hide-tablet'>
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
