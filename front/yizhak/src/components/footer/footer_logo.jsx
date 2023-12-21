import React from 'react';
import style from './footer.module.css';
import imgUrl from '../../images/footer/logo-footer.png';
import { Link } from 'react-router-dom';

function FooterLogo() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      <div className={style.footerLogo}>
        <Link to='/' onClick={scrollToTop}>
          <div className={style.footerLogoImg}><img src={imgUrl} alt="footer-logo" /></div>
        </Link>
        <div className={style.footerLogoText}>
          Магазин «Їжак»: ваш надійний партнер для смачних і здорових покупок. Широкий асортимент свіжих продуктів та товарів для всієї родини, регулярні акції та зручна доставка - все для вашого комфорту та задоволення.
        </div>
      </div>
    </>
  );
}

export default FooterLogo;