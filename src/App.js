import React from 'react'
import {Route,Router,Routes,useLocation,useParams} from 'react-router-dom'
import LandingPage from './LandingPage/LandingPage'

import ProductPage from './ProductPage/ProductPage'
import ProductDetails from './ProductDetails/ProductDetails'
import Modal from './Modal/Modal'



function App() {


  const location=useLocation()
  
  const background=location.state && location.state.background
  
   
  console.log("app.js",location)
  
  return (
    <>
    <Routes location={location}>
       <Route exact path="/" element={<LandingPage/>} />
       <Route path="/product" element={<ProductPage/>} />
       <Route exact path="/productDetails/:id" element={<Modal/>} />
       
    </Routes>
    {/* {background&&<Route exact path="/productDetails/:id" element={<Modal/>} />} */}
    </>
  );
}

export default App;
