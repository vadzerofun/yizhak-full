import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/home';
import Cart from './pages/cart';
import Categories from './pages/categories';
import Contact from './pages/contact';
import ProductCard from './pages/productCard';
import DeliveryPayment from './pages/deliveryPayment';
import Admin from './pages/admin/admin';
import AdminCategories from './pages/admin/adminCategories';
import AdminCategoriesCreate from './pages/admin/adminCategoriesCreate';
import AdminCategoriesEdit from './pages/admin/adminCategoriesEdit';
import AdminProducts from './pages/admin/adminProducts';
import AdminProductsCreate from './pages/admin/adminProductsCreate';
import AdminProductsEdit from './pages/admin/adminProductsEdit';
import AdminOrders from './pages/admin/adminOrders';
import AdminOrdersCreate from './pages/admin/adminOrdersCreate';
import AdminOrdersEdit from './pages/admin/adminOrdersEdit';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Shop */}
        <Route path="/" element={<Home/>}/>
        <Route path="/cart/:id" element={<Cart/>}/>
        <Route path="/categories" element={<Categories/>}/>
        <Route path="/categories/:id" element={<Categories/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/productCard" element={<ProductCard/>}/>
        <Route path="/deliveryPayment" element={<DeliveryPayment/>}/>
        {/* Admin */}
        <Route path="/admin" element={<Admin/>}/>
        {/* AdminCategories */}
        <Route path="/admin/categories" element={<AdminCategories/>}/>
        <Route path="/admin/categories/create" element={<AdminCategoriesCreate/>}/>
        <Route path="/admin/categories/edit/:id" element={<AdminCategoriesEdit/>}/>
        {/* AdminProducts */}
        <Route path="/admin/articles" element={<AdminProducts/>}/>
        <Route path="/admin/articles/create" element={<AdminProductsCreate/>}/>
        <Route path="/admin/articles/edit/:id" element={<AdminProductsEdit/>}/>
        {/* AdminOrders */}
        <Route path="/admin/orders" element={<AdminOrders/>}/>
        <Route path="/admin/orders/create" element={<AdminOrdersCreate/>}/>
        <Route path="/admin/orders/edit/:id" element={<AdminOrdersEdit/>}/>
      </Routes>        
    </BrowserRouter>
  );
}

export default App;
