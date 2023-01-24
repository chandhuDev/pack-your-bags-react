import React,{useEffect,useState} from 'react'
import {Route,Routes,useLocation,useParams} from 'react-router-dom'
import LandingPage from './LandingPage/LandingPage'

import ProductPage from './ProductPage/ProductPage'
import ProductDetails from './ProductDetails/ProductDetails'
import Modal from './Modal/Modal'



function App() {

  const [showModal,setShowModal]=useState(false)
  const location = useLocation();
  
 
 const backgroundState=location.state&&location.state.place
 console.log(backgroundState)


 
  
  return (
    <>
    <Routes location={location || backgroundState}>
       <Route exact path="/" element={<LandingPage/>} />
       <Route path="/product" element={<ProductPage/>} />
       {backgroundState && <Route exact path="/productDetails/:id" element={<Modal/>} /> }
    </Routes>
    </>
  );
}

export default App;
