import React from 'react';
import Info from '../header/header_top/info';
import Menu from '../header/header_bottom/menu';
import HeaderMiddle from '../header/header_middle/header_middle';
import './layout.css';
import Footer from '../footer/footer';
import { useEffect } from 'react';

function Layout(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Info/>
      <div className='sticky-top'>
        <HeaderMiddle/>
        <Menu/> 
      </div>
      {props.children}
      <Footer/>
    </>
  );
}

export default Layout;