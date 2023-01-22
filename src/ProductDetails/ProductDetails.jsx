import React from 'react'
import { useParams,useLocation } from 'react-router-dom';
import { useQuery, gql,useMutation } from '@apollo/client';







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
          <div className='flex flex-row px-2 py-2 justify-center items-center'>
             <Input />
             <Input />
          </div>
          <div className='w-full h-max my-3 p-4 border-r-2 rounded-lg border-blue-800'>
           <h4 className='font-serif text-right font-medium'></h4>
          </div>
          
      </div>
    </>
  )
}

export default ProductDetails
