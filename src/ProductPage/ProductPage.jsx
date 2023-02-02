import React from 'react'
import { Navbar } from '../Navbar'
import ProductItem from '../ProductItem/ProductItem'
import Sidepage from '../Sidepage/Sidepage'

const ProductPage = () => {

 return (
    <>
    <Navbar />
      <div className='mx-12 relative rounded-sm border-slate-900  h-full mt-24 '>
         <ProductItem />
         
      </div>
      <div className='fixed top-32 transition ease-in delay-100 cursor-pointer hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 right-16 bg-pink-900 w-3/12 h-4/6 rounded-md '>
        <Sidepage />
      </div>
    </>
  )
}

export default ProductPage
