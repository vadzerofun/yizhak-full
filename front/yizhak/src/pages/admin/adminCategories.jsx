import React, { useEffect, useState } from 'react';

import Layout from '../../components/layout/layout';
import AdminSidebar from '../../components/main/sidebar/adminSidebar';
import style from './admin.module.css';

import 'bootstrap/dist/js/bootstrap.bundle';
import { Modal } from 'bootstrap/dist/js/bootstrap.bundle';
import { Link } from 'react-router-dom';

const AdminCategories = () => {

  const [categories, setCategories] = useState([]);

  useEffect(()=> {
    fetch('http://127.0.0.1:8000/api/categories')
    .then(response=>response.json())
    .then(json => setCategories(json));
  }, []);

  const handleShowClick = (event) => {
    let exampleModal = document.getElementById('exampleModal');
    let button = event.currentTarget;
    let categoryId = button.getAttribute('data-bs-id');
    let modalTitle = exampleModal.querySelector('.modal-title');
    let modalCategoryId = exampleModal.querySelector('#showModalId');
    let modalCategoryName = exampleModal.querySelector('#showModalName');

    let category = categories.find(c => c.id == categoryId);

    modalTitle.textContent = 'Інформація';
    modalCategoryId.textContent = category.id;
    modalCategoryName.textContent = category.name;
  }
  const handleDeleteClick = (event) => {
    let deleteModal = document.getElementById('deleteModal');
    let button = event.currentTarget;
    let categoryId = button.getAttribute('data-bs-id');
    let categoryName = button.getAttribute('data-bs-name');
    let modalBodyText = deleteModal.querySelector('#deleteModalCategoryName');
    let modalButtonYes = deleteModal.querySelector('.btn-success');

    modalBodyText.textContent = categoryName;
    modalButtonYes.setAttribute('data-bs-id', categoryId);
  }
  const handleDeleteCategory = (event) => {
          
    let button = event.currentTarget;
    let categoryId = button.getAttribute('data-bs-id');

    fetch(`http://127.0.0.1:8000/api/categories/${categoryId}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (response.ok) {
          window.location.reload(false);
        } else {
          // Handle error cases
          console.error('Failed to delete category');
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
          <h3>Категорії</h3>
          <div className={`${style.buttonCreate}`}>
            <Link className="btn btn-success" to="/admin/categories/create">
              Додати <i className="bi bi-plus-square"></i>
            </Link>
          </div>
          <table className="table table-bordered border-success">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Назва</th>
                <th scope="col">Дії</th>
              </tr>
            </thead>
            <tbody>
              { categories.map(value=>
                <tr key={value.id}>
                  <th scope="row">{value.id}</th>
                  <td>{value.name}</td>
                  <td>
                    <label className=""></label>
                    <button 
                      className="btn border border-success me-2" 
                      data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-id={value.id}
                      onClick={handleShowClick}
                    >
                      <i className="bi bi-eye"></i>
                    </button>
                    <Link 
                      to={`/admin/categories/edit/${value.id}`} 
                      className="btn border border-success me-2"
                    >
                      <i className="bi bi-pencil"></i>
                    </Link>
                    <button 
                      className="btn border border-success" data-bs-id={value.id}
                      data-bs-toggle="modal" data-bs-target="#deleteModal" data-bs-name={value.name}
                      onClick={handleDeleteClick}
                    >
                      <i className="bi bi-trash"></i>
                    </button>
                  </td>
                </tr>
              ) }
            </tbody>
          </table>
          {/* Modal (Show) */}
          <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">New message</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  <form>
                    <div className="mb-3">
                      <label htmlFor="recipient-name" className="col-form-label">Id:</label>
                      <span id="showModalId" className="ms-2 fw-bold"></span>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="message-text" className="col-form-label">Назва:</label>
                      <span id="showModalName" className="ms-2 fw-bold"></span>
                    </div>
                  </form>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Закрити</button>
                </div>
              </div>
            </div>
          </div>
          {/* Modal (Delete) */}
          <div className="modal fade" id="deleteModal" tabIndex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="deleteModalLabel">Попередження</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  <h4>
                    Чи ви впевнені що хочете видалити категорію "<span id="deleteModalCategoryName"></span>"?
                  </h4>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Ні</button>
                  <button 
                    onClick={handleDeleteCategory}
                    type="button" className="btn btn-success" data-bs-id="-1" data-bs-dismiss="modal">
                    Так
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>     
    </Layout>
  );
}

export default AdminCategories;