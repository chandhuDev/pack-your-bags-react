import React from 'react'
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

const ProductDetails = ({productValue={place}}) => {
  return (
    <>
      
    </>
  )
}

export default ProductDetails
