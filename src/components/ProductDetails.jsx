import React,{useState } from 'react'
import { useLocation } from 'react-router-dom';
import {BsChevronCompactLeft,BsChevronCompactRight} from 'react-icons/bs'
import {ModalCart} from './index';

const ProductDetails = () => {
  const [index,setIndex]=useState(0)
  const [openModal,SetOpenModal]=useState(false)
  const location = useLocation();
  const product = location.state.product;
  

function prevSlide(){
  const isFirstSlide=index===0
  const newIndex=isFirstSlide ? product.imageArray.length-1 : index-1
  setIndex(newIndex)
 }

 function nextSlide(){
  const isLastSlide=index===product.imageArray.length-1
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
    <div className='w-full h-full my-24 flex justify-center items-center '>
    {
      openModal && <ModalCart closeModal={SetOpenModal} productId={product.id} totalSeats={Number(product.seat)}/>
    }     
    
      <div className='h-full w-2/3 mx-auto  text-2xl bg-white '>
          <div className='flex flex-row p-2 justify-evenly mx-auto my-6 items-center bg-pink-100'>
             <h4 className=' font-serif text-center text-blue-900 py-6'>Source : {product.source}</h4>
             <h4 className=' font-serif text-center text-blue-900 py-6'>Destination : {product.Destination}</h4>
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
             value={product.startDate}
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
              value={product.endDate}
             name="date"
            className="bg-white cursor-pointer focus:outline-none focus:shadow-outline-blue border border-gray-300 rounded-md py-2 px-4 block w-full appearance-none leading-5"
           />
           </div>
           </div>
          <div className='w-full h-max mt-8 py-5 mx-auto flex gap-x-2 shadow-lg items-start justify-evenly text-2xl font-bold text-center border-r-2 rounded-lg  '>
           <h4>Cost : {product.cost}</h4>
           <h5>hurry Up! {40-Number(product.seat)} seats left</h5>
           <h4>{getNumberOfDays(product.startDate,product.endDate)} days trip</h4>
           </div>
          <div className='flex items-center justify-center'>
          <button className='px-4  py-2 mt-5 text-center rounded-md border-2 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 ' onClick={()=>SetOpenModal(!openModal)}>Purchase</button>
          </div>
          <div className='w-full h-max px-5 py-5  bg-white'>
            <h5 className='text-3xl text-center uppercase font-mono font-semibold'>Places</h5>
            <div className=' p-6 my-5  relative cursor-pointer '>
            <div className=' rounded-xl   group relative overflow-hidden duration-500' >
                   <div
                   style={{backgroundImage:`url(${product.imageArray[index].imageUrl})`}} 
                   className='w-full h-128 rounded-2xl  bg-cover bg-center '>
                   </div>
                   <div className='px-4 py-2 my-5    -bottom-56   absolute group-hover:-translate-y-56 group-hover:duration-500  text-gray-50  font-bold text-2xl'>
                   {product.imageArray[index].Description}
                   </div>
                </div>
                <div className='block absolute top-[50%] -translate-x-10 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                    <BsChevronCompactLeft size={30} onClick={prevSlide}/>
                </div>
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
