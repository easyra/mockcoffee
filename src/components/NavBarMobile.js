import React from 'react';

const NavBarMobile = ({ navbarModel }) => {
  return (
    <div className={`navbar-mobile ${navbarModel ? 'active' : ''}`}>
      <ul className='items'>
        <li>
          <a href='' target='_blank' className='item'>
            YouTube
          </a>
        </li>
        <li>
          <a href='' target='_blank' className='item'>
            Twitch
          </a>
        </li>
        <li>
          <a href='' target='_blank' className='item'>
            Instagram
          </a>
        </li>
        <li>
          <a href='' target='_blank' className='item'>
            Twitter
          </a>
        </li>
        <li>
          <a href='' target='_blank' className='item'>
            Discord
          </a>
        </li>
        <li>
          <a href='' target='_blank' className='item'>
            Shop
          </a>
        </li>
        <li>
          <a href='' target='_blank' className='item'>
            Stream
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavBarMobile;
