import React, { useEffect, useState } from 'react';
import {NavLink} from 'react-router-dom';
import style from './adminSidebar.module.css';

function AdminSidebar(props) {

  return (
    <>
      <ul className={style.adminSidebar}>        
        <li>
          <NavLink to="/admin/articles" className={(navData) => navData.isActive ? style.adminTableSelected : style.adminTable}>
            Товари
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin/categories" className={(navData) => navData.isActive ? style.adminTableSelected : style.adminTable}>
            Категорії
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin/orders" className={(navData) => navData.isActive ? style.adminTableSelected : style.adminTable}>
            Замовлення
          </NavLink>
        </li>
      </ul>
    </>
  );
}

export default AdminSidebar;