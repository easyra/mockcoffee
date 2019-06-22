import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { auth, firestore, database } from '../firebase';
import { LoggedIn } from '../App';

const NavBar = ({
  match,
  history,
  location,
  toggleNavModel,
  navbarModel,
  setLoginModal
}) => {
  const { isLoggedIn } = useContext(LoggedIn);
  const handleLogButton = () => {
    if (isLoggedIn) {
      database.ref(`activeUsername/${auth.currentUser.displayName}`).set(null);
      auth
        .signOut()
        .then(() => {
          console.log('signed out');
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      setLoginModal(true);
    }
  };

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
          <li className='item dropdown'>
            <li>
              Socials
              <i class='fas fa-caret-down' />
            </li>
            <div className='socials'>
              <a className='link item'>YouTube</a>
              <a className='link item'>Discord</a>
              <a className='link item'>Instagram</a>
              <a className='link item'>Twitter</a>
            </div>
          </li>
          <li className='item dropdown'>
            <li>
              Shop
              <i class='fas fa-caret-down' />
            </li>
            <div className='socials'>
              <a className='link item'>T-Spring</a>
            </div>
          </li>
          <a className='item'>Donate</a>
          <a className='item'>Subscribe</a>
          {!(location.pathname === '/stream') && (
            <li>
              <Link className='item stream-link' to='/stream'>
                Stream
              </Link>
            </li>
          )}
          <li className='item login-btn' onClick={handleLogButton}>
            {isLoggedIn ? 'Sign out' : 'Sign in'}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
