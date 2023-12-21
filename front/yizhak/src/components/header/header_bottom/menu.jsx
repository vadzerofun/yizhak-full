import React from 'react';
import {Link} from 'react-router-dom';
import {NavLink} from 'react-router-dom';
import style from './menu.module.css';

function Menu() {
  return (
    <>
      <div className={style.menu__container}>
        {/* <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/categories">Categories</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/productCard">Product Card</Link>
        <Link to="/deliveryPayment">Delivery Payment</Link>  */}
        <NavLink to="/" className={(navData) => navData.isActive ? style.activeLink : style.link}>Головна</NavLink>
        <NavLink to="/categories" className={(navData) => navData.isActive ? style.activeLink : style.link}>Категорії</NavLink>
        <NavLink to="/contact" className={(navData) => navData.isActive ? style.activeLink : style.link}>Контакт</NavLink>
        <NavLink to="/deliveryPayment" className={(navData) => navData.isActive ? style.activeLink : style.link}>Доставка & Оплата</NavLink> 
        {/* <NavLink to={`/cart`} className={(navData) => navData.isActive ? style.activeLink : style.link}>Cart</NavLink> */}
        {/* <NavLink to="/productCard" className={(navData) => navData.isActive ? style.activeLink : style.link}>Product Card</NavLink> */}
      </div>   
    </>
  );
}

export default Menu;