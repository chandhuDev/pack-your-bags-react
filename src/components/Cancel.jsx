import React,{useEffect} from 'react'
import { Navigate } from '../Utils/Images'
const Cancel = () => {

const navigate=Navigate()

useEffect(()=>{
  setInterval(()=>{
  navigate("/product")
  },4000)
},[])

  return (
    <div className='w-full h-full flex justify-center items-center'>
      <h1 className='text-2xl font-bold'>There might be some issue with the payment ! Try again once</h1>
    </div>
  )
}

export default Cancel
