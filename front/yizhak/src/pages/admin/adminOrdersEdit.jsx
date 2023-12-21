import React, { useEffect, useState } from 'react';

import Layout from '../../components/layout/layout';
import AdminSidebar from '../../components/main/sidebar/adminSidebar';
import style from './admin.module.css';
import { Link, useNavigate, useParams } from 'react-router-dom';

const AdminOrdersEdit = () => {

  const navigate = useNavigate();
  const { id:orderId } = useParams();

  const [articles, setArticles] = useState([]);
  const [order, setOrder] = useState({ article_id: 20});  

  useEffect(()=> {
    fetch('http://127.0.0.1:8000/api/articles')
    .then(response=>response.json())
    .then(json => setArticles(json));

    fetch(`http://127.0.0.1:8000/api/orders/${orderId}`)
      .then(response =>response.json())
      .then(order => setOrder(order));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(`http://127.0.0.1:8000/api/orders/${orderId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(order),
    })
      .then(response => {
        if (response.ok) {
          navigate("/admin/orders");
        } else {
          // Handle error cases
          console.error('Failed to edit order');
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
          <h3>Редагувати замовлення</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="inputArticle" className="form-label">Товар</label>
              <select 
                className="form-select" 
                aria-label="Default select example" 
                id="inputArticle"
                value={order.article_id}
                onChange={e=>setOrder({...order, article_id: e.target.value})}
              >
                { articles.map(a => <option value={a.id} key={a.id}>{a.name}</option>)}
              </select>
            </div>
            <div className="d-flex gap-3"> 
              <button type="submit" className="btn btn-success">Редагувати</button>
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

export default AdminOrdersEdit;