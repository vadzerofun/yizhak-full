import React, { useEffect, useState } from 'react';

import Layout from '../../components/layout/layout';
import AdminSidebar from '../../components/main/sidebar/adminSidebar';
import style from './admin.module.css';
import { Link, useNavigate } from 'react-router-dom';

const AdminCategoriesCreate = () => {

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const categoryName = document.getElementById('inputName').value;


    fetch(`http://127.0.0.1:8000/api/categories`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: categoryName }),
    })
      .then(response => {
        if (response.ok) {
          navigate("/admin/categories");
        } else {
          // Handle error cases
          console.error('Failed to create category');
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  return (
    <Layout>
      <div className={style.admin__container}>
        <AdminSidebar />
        <div className="adminContent">
          <h3>Створити категорію</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="inputName" className="form-label">Назва</label>
              <input type="text" className="form-control" id="inputName"/>
            </div>
            <div className="d-flex gap-3"> 
              <button type="submit" className="btn btn-success">Створити</button>
              <Link className="btn btn-secondary" to="/admin/categories">
                Назад <i className="bi bi-box-arrow-left"></i>
              </Link>
            </div>
          </form>          
        </div>
      </div>     
    </Layout>
  );
}

export default AdminCategoriesCreate;