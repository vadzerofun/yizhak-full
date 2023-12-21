import React, { useEffect, useState } from 'react';

import Layout from '../../components/layout/layout';
import AdminSidebar from '../../components/main/sidebar/adminSidebar';
import style from './admin.module.css';
import { Link, useNavigate, useParams } from 'react-router-dom';

const AdminCategoriesEdit = () => {

  const [categoryName, setCategoryName] = useState('');

  const {id:categoryId} = useParams();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const categoryName = document.getElementById('inputName').value;

    fetch(`http://127.0.0.1:8000/api/categories/${categoryId}`, {
      method: 'PUT',
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
          console.error('Failed to edit category');
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  const handleNameChange = (event) => {
    setCategoryName(event.target.value);
  }

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/categories/${categoryId}`)
      .then(response =>response.json())
      .then(category => {
        setCategoryName(category.name);
      });
  }, []);

  return (
    <Layout>
      <div className={style.admin__container}>
        <AdminSidebar />
        <div className="adminContent">
          <h3>Редагувати категорію</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="inputName" className="form-label">Назва</label>
              <input 
                type="text" 
                className="form-control" 
                id="inputName" 
                value={categoryName} 
                onChange={handleNameChange}
              />
            </div>
            <div className="d-flex gap-3"> 
              <button type="submit" className="btn btn-success">Редагувати</button>
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

export default AdminCategoriesEdit;