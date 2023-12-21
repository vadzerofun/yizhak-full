import React, { useEffect, useState } from 'react';

import Layout from '../../components/layout/layout';
import AdminSidebar from '../../components/main/sidebar/adminSidebar';
import style from './admin.module.css';
import { Link, useNavigate, useParams } from 'react-router-dom';

const AdminProductsEdit = () => {

  const {id:articleId} = useParams();
  const navigate = useNavigate();

  const [categories, setCategories] = useState([]);
  const [article, setArticle] = useState({
    name: '',
    description: '',
    price: '',
    img_url: '',
    category_id: 1,
    country: '',
  });   

  useEffect(()=> {
    fetch('http://127.0.0.1:8000/api/categories')
    .then(response=>response.json())
    .then(json => setCategories(json));

    fetch(`http://127.0.0.1:8000/api/articles/${articleId}`)
      .then(response =>response.json())
      .then(article => setArticle(article));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    let form = document.querySelector('#submitForm');

    fetch(`http://127.0.0.1:8000/api/articles/${articleId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(article),
    })
      .then(response => {
        if (response.ok) {
          navigate("/admin/articles");
        } else {
          // Handle error cases
          console.error('Failed to edit article');
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
          <h3>Редагувати товар</h3>
          <form onSubmit={handleSubmit} id="submitForm">
            <div className="mb-3">
              <label htmlFor="inputName" className="form-label">Назва</label>
              <input 
                type="text" 
                className="form-control" 
                id="inputName"
                value={article.name}
                onChange={e=>setArticle({...article, name:e.target.value})}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="inputDescription" className="form-label">Опис</label>
              <textarea 
                className="form-control" 
                id="inputDescription" 
                style={{height: '200px'}}
                value={article.description}
                onChange={e=>setArticle({...article, description:e.target.value})}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="inputPrice" className="form-label">Ціна</label>
              <input 
                type="text" 
                className="form-control" 
                id="inputPrice"
                value={article.price}
                onChange={e=>setArticle({...article, price:e.target.value})}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="inputImg" className="form-label">Зображення (URL)</label>
              <input 
                type="text" 
                className="form-control" 
                id="inputImg"
                value={article.img_url}
                onChange={e=>setArticle({...article, img_url:e.target.value})}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="inputCategory" className="form-label">Категорія</label>
              <select 
                className="form-select" 
                aria-label="Default select example" 
                id="inputCategory"
                value={article.category_id}
                onChange={e=>setArticle({...article, category_id:e.target.value})}
              >
                { categories.map(c => 
                  <option value={c.id} key={c.id}>{c.name}</option>
                )}
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="inputCountry" className="form-label">Країна</label>
              <input 
                type="text" 
                className="form-control" 
                id="inputCountry"
                value={article.country}
                onChange={e=>setArticle({...article, country:e.target.value})}
              />
            </div>
            <div className="d-flex gap-3"> 
              <button type="submit" className="btn btn-success">Редагувати</button>
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

export default AdminProductsEdit;