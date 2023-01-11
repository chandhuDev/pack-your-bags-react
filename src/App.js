import React from 'react'
import {Route,Router,Routes} from 'react-router-dom'
import LandingPage from './LandingPage/LandingPage'

import ProductPage from './ProductPage/ProductPage'
import ProductDetails from './ProductDetails/ProductDetails'



function App() {
  return (
    <Routes>
       <Route exact path="/" element={<LandingPage/>} />
       <Route path="/Product" element={<ProductPage/>} />
       <Route path="/ProductDetails/:id" element={<ProductDetails/>} />
    </Routes>
  );
}

export default App;
