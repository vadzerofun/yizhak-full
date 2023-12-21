import React, { useEffect, useState } from 'react';

import Layout from '../../components/layout/layout';
import AdminSidebar from '../../components/main/sidebar/adminSidebar';
import style from './admin.module.css';
import { Link, useNavigate } from 'react-router-dom';

const AdminProductsCreate = () => {

  const navigate = useNavigate();

  const [categories, setCategories] = useState([]);

  useEffect(()=> {
    fetch('http://127.0.0.1:8000/api/categories')
    .then(response=>response.json())
    .then(json => setCategories(json));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    let form = document.querySelector('#submitForm');

    const newArticle = {
      name: form.querySelector('#inputName').value,
      description: form.querySelector('#inputDescription').value,
      price: form.querySelector('#inputPrice').value,
      img_url: form.querySelector('#inputImg').value,
      category_id: form.querySelector('#inputCategory').value,
      country: form.querySelector('#inputCountry').value,
    };

    fetch(`http://127.0.0.1:8000/api/articles`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newArticle),
    })
      .then(response => {
        if (response.ok) {
          navigate("/admin/articles");
        } else {
          // Handle error cases
          console.error('Failed to create article');
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
          <h3>Створити товар</h3>
          <form onSubmit={handleSubmit} id="submitForm">
            <div className="mb-3">
              <label htmlFor="inputName" className="form-label">Назва</label>
              <input type="text" className="form-control" id="inputName"/>
            </div>
            <div className="mb-3">
              <label htmlFor="inputDescription" className="form-label">Опис</label>
              <textarea className="form-control" id="inputDescription" style={{height: '200px'}}/>
            </div>
            <div className="mb-3">
              <label htmlFor="inputPrice" className="form-label">Ціна</label>
              <input type="text" className="form-control" id="inputPrice"/>
            </div>
            <div className="mb-3">
              <label htmlFor="inputImg" className="form-label">Зображення (URL)</label>
              <input type="text" className="form-control" id="inputImg"/>
            </div>
            <div className="mb-3">
              <label htmlFor="inputCategory" className="form-label">Категорія</label>
              <select className="form-select" aria-label="Default select example" id="inputCategory">
                { categories.map(c => <option value={c.id} key={c.id}>{c.name}</option>)}
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="inputCountry" className="form-label">Країна</label>
              <input type="text" className="form-control" id="inputCountry"/>
            </div>
            <div className="d-flex gap-3"> 
              <button type="submit" className="btn btn-success">Створити</button>
              <Link className="btn btn-secondary" to="/admin/articles">
                Назад <i className="bi bi-box-arrow-left"></i>
              </Link>
            </div>
          </form>          
        </div>
      </div>     
    </Layout>
  );
}

export default AdminProductsCreate;