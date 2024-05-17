import React from 'react'
import {BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import Home from '../../Screen/Home';
import Product from '../../Screen/Product';
import Nav from '../../Component/Nav';
import Singelproduct from '../../Screen/Singelproduct';


const RouterConfig = () => {
  return (
   <>
   <BrowserRouter>
   <Nav/>
   <Routes>
    <Route path='/'  element={<Home/>} />
    <Route path='Product'  element={<Product/>} />
    <Route path='singelProduct/:id'  element={<Singelproduct/>} />
  


   </Routes>
   
   </BrowserRouter>
   
   </>
  )
}

export default RouterConfig