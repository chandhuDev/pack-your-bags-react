import React from 'react'
import { useParams } from 'react-router-dom';
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
  const {id}=useParams()
  console.log(id)
  return (
    <>
      <div className='h-screen w-full '>
           hello worlds
      </div>
    </>
  )
}

export default ProductDetails
