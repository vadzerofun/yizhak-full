import React from 'react';
import style from './adminTable.module.css';
import { useLocation } from 'react-router-dom';

const AdminTable = () => {
  const location = useLocation();
  
  return (
    <div className={style.adminTable}>
      { location.pathname === '/admin' && 
      <h1 style={{paddingTop: '50px', textAlign: 'center'}}>
        Будь ласка оберіть таблицю для редагування!
      </h1> }
    </div>
  );
}

export default AdminTable;