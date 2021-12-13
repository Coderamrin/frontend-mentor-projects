import React from 'react';
import logo from '../images/logo-white.svg';
import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaInstagram,
} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer>
      <div className='footer container'>
        <div>
          <img src={logo} alt='' className='footer-logo' />
        </div>
        <div className='footer__nav'>
          <ul>
            <p className='footer__title'>Features</p>
            <li>
              <a href='#'>Link Shortening</a>
            </li>
            <li>
              <a href='#'> Branded Links</a>{' '}
            </li>
            <li>
              <a href='#'> Analytics</a>
            </li>
          </ul>
          <ul>
            <p className='footer__title'>Resources</p>
            <li>
              <a href='#'>Blog</a>
            </li>
            <li>
              <a href='#'>Developers</a>{' '}
            </li>
            <li>
              <a href='#'>Support</a>
            </li>
          </ul>
          <ul>
            <p className='footer__title'>Company </p>
            <li>
              <a href='#'>About</a>
            </li>
            <li>
              <a href='#'> Our Team</a>{' '}
            </li>
            <li>
              <a href='#'> Careers</a>
            </li>
            <li>
              <a href='#'> Contact</a>
            </li>
          </ul>
        </div>
        <div className='footer__social'>
          <a href='#'>
            {' '}
            <FaFacebookF />{' '}
          </a>
          <a href='#'>
            {' '}
            <FaTwitter />{' '}
          </a>
          <a href='#'>
            {' '}
            <FaPinterestP />{' '}
          </a>
          <a href='#'>
            {' '}
            <FaInstagram />{' '}
          </a>
        </div>
      </div>
    </footer>
  );
}
