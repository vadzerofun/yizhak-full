import React from 'react';
import { Link } from 'react-router-dom';
import style from './footer.module.css';

function FooterMenu() {
  return (
    <>
      <div className={style.footerMenu}>
        <Link to="/">Головна</Link>
        <Link to="/categories">Категорії</Link>
        <Link to="/contact">Контакт</Link>
        <Link to="/deliveryPayment">Доставка & Оплата</Link> 
      </div>
    </>
  );
}

export default FooterMenu;