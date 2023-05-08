import React,{useEffect,useState} from 'react'
import { Route, Routes} from 'react-router-dom'
import {LandingPage,ProductPage,ModalCart,Modal,Success,SignUp,Login,Cancel} from './components/index'
import { AppContext } from './Utils/Images'
import PostMutate from './Utils/PostMutate'

function App() {
    const [product,setProduct]=useState()
    

    useEffect(()=>{
        let isAssigned=true
        async function getData(){
            const data=await PostMutate()
            if(isAssigned){
                setProduct(data)
            }
           return ()=>{
            isAssigned=false
          }
        }
        getData()
    },[])
   



    return (
        <AppContext.Provider value={{product}}>
            <div className="h-full w-full">
                <Routes>
                    <Route exact path="/" element={ <LandingPage /> } />
                    <Route path="/product" element={<ProductPage />} />
                    <Route path="/productDetails/:id" element={<Modal />} />
                    <Route path="/modalCart" element={<ModalCart />} />
                    <Route path="/successPage/:id" element={<Success />} />
                    <Route path="/sign-in" element={<Login />} />
                    <Route path="/sign-up" element={<SignUp />} />
                    <Route path="/cancel" element={<Cancel />} />
                </Routes>
            </div>
        </AppContext.Provider>
    )
}

export default App
