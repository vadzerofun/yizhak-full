import React from 'react';
import style from './footer.module.css';
import FooterLogo from './footer_logo';
import FooterMenu from './footer_menu';
import FooterSocial from './footer_social';
import FooterBottom from './footer_bottom';

function Footer() {
  return (
    <>
      <div className={style.footerWrapper}>
         <div className={`footer__container ${style.footerBody}`}>
            <FooterLogo />
            <FooterMenu />
            <FooterSocial />
            <FooterBottom />
         </div>
      </div>
    </>
  );
}

export default Footer;