import React,{useRef} from 'react'
import { useParams,useNavigate } from 'react-router-dom';
import { useQuery, gql,useMutation } from '@apollo/client';

import {BsChevronCompactLeft,BsChevronCompactRight} from 'react-icons/bs'
import { useState } from 'react';
import ModalCart from '../ModalCart/ModalCart';






const GET_PLACE=gql`
  query places($id:ID){
   place(id:$id){
    data{
    id
    attributes{
      seat
      cost
      startDate
      source
      Destination
      endDate
      images{
        data{
          attributes{
            placeImage{
              data{
                attributes{
                  url
                }
              }
            }
            placeTitle
            Description
          }
        }
      }
    }
  }
}  

}
`



const ProductDetails = () => {
  const {id}=useParams()
  const [index,setIndex]=useState(0)
  const [openModal,SetOpenModal]=useState(false)
  
 

  const { loading, error, data } =useQuery(GET_PLACE, { variables: { id } });
  const sliderRef = useRef(null);

const images=data?.place?.data?.attributes?.images?.data
const source=data?.place?.data?.attributes?.source
const destination=data?.place?.data?.attributes?.Destination
const seat=data?.place?.data?.attributes?.seat
const startDate=data?.place?.data?.attributes?.startDate
const endDate=data?.place?.data?.attributes?.endDate
const cost=data?.place?.data?.attributes?.cost



const ImageArray=images?.map((imageData)=>{
  return (
    {
      description: imageData.attributes.Description,
      url: `http://localhost:1337${imageData.attributes.placeImage.data.attributes.url}`
    }
  )
})




function prevSlide(){
  const isFirstSlide=index===0
  const newIndex=isFirstSlide ? ImageArray.length-1 : index-1
  setIndex(newIndex)
 }

 function nextSlide(){
  const isLastSlide=index===ImageArray.length-1
  const newIndex=isLastSlide ? 0 : index + 1
  setIndex(newIndex)
}

function getNumberOfDays(Day1,Day2){
  let date1 = new Date(Day1);
  let date2 = new Date(Day2);
  let diffInMilliseconds = Math.abs(date2 - date1);
  let diffInDays = diffInMilliseconds / (1000 * 3600 * 24)
  
  return (Math.floor(diffInDays))
 }






    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;
  
 
 
  
   
 
  
  return (
    <>
    <div className='w-full h-full my-24 flex justify-center items-center '>
    {
            openModal && <ModalCart closeModal={SetOpenModal} productId={id}/>
    }     
    
      <div className='h-screen w-4/5 mx-auto  px-16 py-10 text-2xl bg-white '>
          <div className='flex flex-row px-2 py-2 justify-evenly mx-40 my-10 items-center bg-pink-100'>
             <h4 className=' font-serif text-center text-blue-900 py-6'>Source : {source}</h4>
             <h4 className=' font-serif text-center text-blue-900 py-6'>Destination : {destination}</h4>
          </div>
          
          <div className='flex flex-row  mx-52 mt-10  items-center'>
            <div className='flex-1'>
          <label className="block font-medium text-gray-700 my-5 span" htmlFor="date">
          Start Date : 
         </label>
          <input
            type="date"
              id="date"
             name="date"
             value={startDate}
            className="bg-white cursor-pointer focus:outline-none span focus:shadow-outline-blue border border-gray-300 rounded-md py-2 px-4 block w-full appearance-none leading-5"
           />
           </div>
           <div className='flex-1'>
          <label className="block font-medium text-gray-700 my-5" htmlFor="date">
          End Date:
         </label>
          <input
            type="date"
              id="date"
              value={endDate}
             name="date"
            className="bg-white cursor-pointer focus:outline-none focus:shadow-outline-blue border border-gray-300 rounded-md py-2 px-4 block w-full appearance-none leading-5"
           />
           </div>
           
          </div>
          <div className='w-full h-max my-20 py-5 mx-auto flex gap-x-4 shadow-lg items-start justify-evenly text-2xl font-bold text-center border-r-2 rounded-lg  '>
           <h4>Cost : {cost}</h4>
           <h5>hurry Up! {seat} seats left</h5>
           <h4>{getNumberOfDays(startDate,endDate)} days trip</h4>
           
          </div>
          <div className='flex items-center justify-center'>
          <button className='px-4  py-2 mb-5 text-center rounded-md border-2 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 ' onClick={()=>SetOpenModal(!openModal)}>Purchase</button>
          </div>
          
          <div className='w-full h-max px-5 py-5 bg-white'>
            <h5 className='font-bold text-5xl text-center'>Places</h5>
            <div className=' p-10 my-5  relative cursor-pointer '>
            
                <div className=' rounded-xl   group relative overflow-hidden duration-500' >
                   <div
                   style={{backgroundImage:`url(${ImageArray[index].url})`}} 
                   className='w-full h-128 rounded-2xl  bg-cover bg-center '>

                   </div>
                   
                   <div className='px-4 py-2 my-5    -bottom-56   absolute group-hover:-translate-y-56 group-hover:duration-500  text-gray-50  font-bold text-2xl'>
                  
                   
                   {ImageArray[index].description}
                   </div>
                </div>
                  {/* Left arrow */}
                  <div className='block absolute top-[50%] -translate-x-10 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                    <BsChevronCompactLeft size={30} onClick={prevSlide}/>
                   </div>
                   {/* Right arrow */}
                   <div className='block absolute top-[50%] translate-x-10 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                    <BsChevronCompactRight size={30} onClick={nextSlide}/>
                   </div>
                  
                  
                  <div>
                    
                </div>
             
           

            

          </div>
          </div>
          
      </div>
      </div>
    </>
  )
}

export default ProductDetails
