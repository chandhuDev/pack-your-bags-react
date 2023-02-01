import React,{useEffect,useState} from 'react'
import {Route,Routes,useLocation,useParams} from 'react-router-dom'
import LandingPage from './LandingPage/LandingPage'

import ProductPage from './ProductPage/ProductPage'
import ModalCart from './ModalCart/ModalCart'
import Modal from './Modal/Modal'
import Success from './Success/Success'
import SignUp from '../src/SignUp/SignUp'
import Login from '../src/Login/Login'
import Strapi from './Strapi/Strapi'



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
       <Route path='/successPage' element={<Success />} />
       <Route path='/sign-in' element={<Login />} />
       <Route path='/sign-up' element={<SignUp />} />
       <Route path='/payment' element={<Strapi />} />
    </Routes>
    </>
  );
}

export default App;
