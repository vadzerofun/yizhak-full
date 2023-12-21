import React from 'react'

import Layout from '../../components/layout/layout';
import AdminSidebar from '../../components/main/sidebar/adminSidebar';
import AdminTable from '../../components/main/content/adminTable';
import style from './admin.module.css';

const Admin = () => {
  return (
    <Layout>
      <div className={style.admin__container}>
        <AdminSidebar />
        <AdminTable />
      </div>     
    </Layout>
  );
}

export default Admin;