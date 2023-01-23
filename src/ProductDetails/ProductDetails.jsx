import React from 'react'
import { useParams,useLocation } from 'react-router-dom';
import { useQuery, gql,useMutation } from '@apollo/client';
import Input from '../Input/Input';






const UPDATE_PLACE=gql`
   mutation updatePlace($id:ID!,$data:PlaceInput!){
    updatePlace(id:$id,data:$data){
    data{
      id,
      attributes{
        seat
      }
    }
    }
    
  }
`

const ProductDetails = () => {
  const location=useLocation()
  
  const background=location.state && location.state.background
  
   
  console.log("PageDetails.js",location,background)
  
  return (
    <>
      <div className='h-screen w-full px-16 py-10 border-r-4 border-red-400 rounded-md'>
          <div className='flex flex-row px-2 py-2 justify-evenly mx-40 items-center bg-pink-300'>
             <h4 className='text-lg font-serif text-center text-blue-900 py-6'>Enter your source</h4>
             <h4 className='text-lg font-serif text-center text-blue-900 py-6'>Enter your destination</h4>
          </div>
          <div className='w-full h-max my-3 p-4 border-r-2 rounded-lg border-blue-800 bg-slate-700'>
           <h4 className='font-serif text-right font-medium'>hello</h4>
          </div>
          
      </div>
    </>
  )
}

export default ProductDetails
