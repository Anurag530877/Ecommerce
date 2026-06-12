import React from 'react';
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import HomePage from './Pages/Home';
import WatchSection from './components/Watch';
import ProductCards from './components/ProductCard';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ClothSection from './components/Cloth';
import Footer from './components/Footer';
import LoginPage from './Pages/Login';
import RegisterPage from './Pages/Register';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/watch' element={<WatchSection/>}/>
     <Route path='/girlcloth' element={<ProductCards/>}/>
     <Route path='/cloth' element={<ClothSection/>}/>
     <Route path='/login' element={<LoginPage/>}/>
     <Route path='/register' element={<RegisterPage/>}/>
     <Route path='/footer' element={<Footer/>}/>
  </Routes>
  </BrowserRouter>

);
