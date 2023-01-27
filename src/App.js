import React,{useEffect,useState} from 'react'
import {Route,Routes,useLocation,useParams} from 'react-router-dom'
import LandingPage from './LandingPage/LandingPage'

import ProductPage from './ProductPage/ProductPage'
import ModalCart from './ModalCart/ModalCart'
import Modal from './Modal/Modal'



function App() {

  const [showModal,setShowModal]=useState(false)
  const location = useLocation();
  
 
 const backgroundState=location.state&&location.state.place
 


 
  
  return (
    <>
    <Routes location={location || backgroundState}>
       <Route exact path="/" element={<LandingPage/>} />
       <Route path="/product" element={<ProductPage/>} />
       {backgroundState && <Route exact path="/productDetails/:id" element={<Modal/>} /> }
       <Route path='/modalCart' element={<ModalCart />} />
    </Routes>
    </>
  );
}

export default App;
