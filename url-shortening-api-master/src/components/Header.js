import React, { useState } from 'react';
import Logo from '../images/logo.svg';
import { FaBars } from 'react-icons/fa';

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header>
      <nav className='nav'>
        <a href='/' className='nav__logo'>
          {' '}
          <img src={Logo} alt='Shortly' />{' '}
        </a>

        <div
          className='hide-for-desktop hamburger'
          onClick={() => setShowMenu(!showMenu)}
        >
          <FaBars />
        </div>

        <div className={showMenu ? 'nav__links' : 'hide-for-mobile flex nav__links--desktop'}>
          <ul
            className={
              showMenu
                ? 'nav__items flex flex-ai-c'
                : 'nav__items flex flex-ai-c hide-for-mobile'
            }
          >
            <li className='nav__item'>
              <a href='#'>Features</a>
            </li>
            <li className='nav__item'>
              <a href='#'>Pricing</a>
            </li>
            <li className='nav__item'>
              <a href='#'>Resources</a>
            </li>
          </ul>

          <div
            className={showMenu ? 'nav__btns ' : 'hide-for-mobile nav__btns'}
          >
            <a href='#' className='btn btn--white login'>
              Login
            </a>
            <a href='#' className='btn sign-up'>
              Sign up
            </a>
          </div>
        </div>


      </nav> 
    </header>
  );
}

// (showMenu ? setShowMenu(true) : setShowMenu(false))
