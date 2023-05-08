import React,{useState,useContext,useMemo } from 'react'
import { useLocation,useParams } from 'react-router-dom';
import {BsChevronCompactLeft,BsChevronCompactRight} from 'react-icons/bs'
import {ModalCart} from './index';
import { AppContext } from '../Utils/Images'

const ProductDetails = () => {
  const [index,setIndex]=useState(0)
  const [openModal,SetOpenModal]=useState(false)
  const {id}=useParams()
  const {product}= useContext(AppContext)
  const productData=product?.find(dataOfProduct=> dataOfProduct?.id == Number(id))
  

function prevSlide(){
  const isFirstSlide=index===0
  const newIndex=isFirstSlide ? productData?.imageArray.length-1 : index-1
  setIndex(newIndex)
 }

 function nextSlide(){
  const isLastSlide=index===productData?.imageArray.length-1
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

return (
    <>
    <div className='w-full h-full md:my-24 my-10 flex justify-center items-center '>
    {
      openModal && <ModalCart closeModal={SetOpenModal} productId={productData?.id} totalSeats={Number(productData?.seat)}/>
    }     
    
      <div className='h-full md:w-2/3 md:mx-auto w-full mx-10  text-2xl bg-white '>
          <div className='flex flex-row p-2 justify-evenly md:mx-auto mx-6 md:my-6 my-3 items-center bg-pink-100'>
             <h4 className=' font-serif text-center text-blue-900 py-6'>Source : {productData?.source}</h4>
             <h4 className=' font-serif text-center text-blue-900 py-6'>Destination : {productData?.Destination}</h4>
          </div>
          <div className='flex flex-row  mx-4   items-center'>
            <div className='flex-1'>
          <label className="block font-medium text-gray-700 my-5 span" htmlFor="date">
          Start Date : 
         </label>
          <input
            type="date"
              id="date"
             name="date"
             value={productData?.startDate}
             
             readOnly
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
              value={productData?.endDate}
             name="date"
             readOnly
            className="bg-white cursor-pointer focus:outline-none focus:shadow-outline-blue border border-gray-300 rounded-md py-2 px-4 block w-full appearance-none leading-5"
           />
           </div>
           </div>
          <div className='w-full h-max mt-8 py-5 mx-auto flex md:gap-x-2 gap-x-1 shadow-lg items-start justify-evenly md:text-2xl text-base font-bold text-center border-r-2 rounded-lg  '>
           <h4>Cost : {productData?.cost}</h4>
           <h5>hurry Up! {40-Number(productData?.seat)} seats left</h5>
           <h4>{getNumberOfDays(productData?.startDate,productData?.endDate)} days trip</h4>
           </div>
          <div className='flex items-center justify-center'>
          <button className='px-4  py-2 mt-5 text-center rounded-md border-2 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 ' onClick={()=>SetOpenModal(!openModal)}>Purchase</button>
          </div>
          <div className='w-full h-max md:p-5 p-2  bg-white'>
            <h5 className='md:text-3xl text-xl text-center uppercase font-mono font-semibold'>Places</h5>
            <div className='md:p-6 my-5 p-4  relative cursor-pointer '>
            <div className=' rounded-xl group relative overflow-hidden duration-500' >
                   <div
                   style={{backgroundImage:`url(${productData?.imageArray[index].imageUrl})`}} 
                   className='w-full h-128 rounded-2xl  bg-cover bg-center '>
                   </div>
                   <div className='md:px-4 md:py-2 px-2 py-1 md:my-5 my-2  md:-bottom-56 bottom-0  absolute group-hover:-translate-y-56 group-hover:duration-500  text-gray-50  font-bold md:text-2xl text-lg'>
                   {productData?.imageArray[index].Description}
                   </div>
                </div>
                <div className='block absolute top-[50%] -translate-x-10 translate-y-[-50%] md:left-5 left-10 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                    <BsChevronCompactLeft size={30} onClick={prevSlide}/>
                </div>
                <div className='block absolute top-[50%] translate-x-10 translate-y-[-50%] md:right-5 right-10 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
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
