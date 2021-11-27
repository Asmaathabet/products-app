import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import Header from './components/Header'
import Home from './components/Home'
import ContactUs from './components/ContactUs';
import ProductDetail from './components/ProductDetail'
import CustomizeProduct from './components/ProductDetail/CustomizeProduct'

function App() {
    return (
      <BrowserRouter>
      <div className='App'>
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/all-products" element={<Home />} />
            <Route exact path="/contact-us" element={<ContactUs />} />
            <Route exact path="/product/:productId" element={<ProductDetail />} />
            <Route exact path="/product/:productId/customize" element={<CustomizeProduct />} />
          </Routes>
      </div>
      </BrowserRouter>
    );


}
export default App;