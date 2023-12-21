import React, { useEffect, useState } from 'react';

import Layout from '../../components/layout/layout';
import AdminSidebar from '../../components/main/sidebar/adminSidebar';
import style from './admin.module.css';
import { Link, useNavigate } from 'react-router-dom';

const AdminOrdersCreate = () => {

  const navigate = useNavigate();

  const [articles, setArticles] = useState([]);

  useEffect(()=> {
    fetch('http://127.0.0.1:8000/api/articles')
    .then(response=>response.json())
    .then(json => setArticles(json));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    const articleId = document.getElementById('inputArticle').value;

    fetch(`http://127.0.0.1:8000/api/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ article_id: articleId }),
    })
      .then(response => {
        if (response.ok) {
          navigate("/admin/orders");
        } else {
          // Handle error cases
          console.error('Failed to create order');
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
          <h3>Створити замовлення</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="inputArticle" className="form-label">Товар</label>
              <select className="form-select" aria-label="Default select example" id="inputArticle">
                { articles.map(a => <option value={a.id} key={a.id}>{a.name}</option>)}
              </select>
            </div>
            <div className="d-flex gap-3"> 
              <button type="submit" className="btn btn-success">Створити</button>
              <Link className="btn btn-secondary" to="/admin/orders">
                Назад <i className="bi bi-box-arrow-left"></i>
              </Link>
            </div>
          </form>          
        </div>
      </div>     
    </Layout>
  );
}

export default AdminOrdersCreate;