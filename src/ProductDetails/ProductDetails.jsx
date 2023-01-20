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
      <div className='bg-yellow-500 w-full h-72 text-lg font-medium flex flex-col justify-center items-center mx-auto my-auto px-4 py-3'>
            <p>
            Lorem ipsum dolor kkjkmsak ajsack sfoaks kasojcfofas jcz osjd ojzcs joockzock jodscs kjdszcds jzcsc jkcmksxc jckkxzcm, 
            </p>
            
      </div>
    </>
  )
}

export default ProductDetails
