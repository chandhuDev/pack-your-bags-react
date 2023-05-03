import React,{useEffect,useState} from 'react'
import { Route, Routes, useLocation, } from 'react-router-dom'
import {LandingPage,ProductPage,ModalCart,Modal,Success,SignUp,Login,Strapi} from './components/index'
import { AppContext } from './Utils/Images'
import PostMutate from './Utils/PostMutate'

function App() {
    const [product,setProduct]=useState()
    const userExists=localStorage.getItem('JWT')

    useEffect(()=>{
        async function getData(){
            const data=await PostMutate()
            setProduct(data)
        }
        getData()
    },[])

 console.log("products",product)   



    return (
        <AppContext.Provider value={{product}}>
            <div className="h-full w-full">
                <Routes>
                    <Route exact path="/" element={ <LandingPage /> } />
                    <Route path="/product" element={<ProductPage />} />
                    <Route path="/productDetails/:id" element={<Modal />} />
                    <Route path="/modalCart" element={<ModalCart />} />
                    <Route path="/successPage" element={<Success />} />
                    <Route path="/sign-in" element={<Login />} />
                    <Route path="/sign-up" element={<SignUp />} />
                    <Route path="/payment" element={<Strapi />} />
                </Routes>
            </div>
        </AppContext.Provider>
    )
}

export default App
