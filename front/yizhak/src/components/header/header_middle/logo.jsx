import React from 'react';
import logoUrl from '../../../images/logo.png';
import './logo.css';
import { Link } from 'react-router-dom';

function Logo() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Link to='/' onClick={scrollToTop}>
        <div className='header-logo'>
          <img src={logoUrl} alt='logo'/>
        </div>
      </Link>
    </>
  );
}

export default Logo;