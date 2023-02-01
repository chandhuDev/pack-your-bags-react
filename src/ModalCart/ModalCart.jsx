import React, { useState } from 'react'
import {ImCancelCircle} from 'react-icons/im'
import Strapi from '../Strapi/Strapi';
import { useNavigate } from 'react-router-dom';



const ModalCart = ({closeModal,productId}) => {
const [value, setValue] = useState('');
const [trigger,setTrigger]=useState(false)
const navigate=useNavigate()

function handlePayment(){
 navigate('/payment',{
  state:{
    id:productId,
    seats:value
  }
 })
}
  



  return (
    <>
      <div className='w-full h-screen z-20 overflow-y-auto absolute top-0 left-0 flex justify-center items-center bg-black/50 ' >
        
               <div className='h-auto w-3/6 flex flex-col rounded-lg border-2 relative items-center gap-y-5 text-2xl justify-center px-8 py-5 bg-slate-100'>
                  <h5 className='block text-center text-4xl font-semibold'>Buy Tickets</h5>
                 <div className='my-8'> 
                    <label className="block text-gray-700 font-medium" htmlFor="inputText">
                   Enter Number of Tickets
                  </label>
                  <input
                    className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
                    type="text"
                    placeholder="Enter how many seats"
                    value={value}
                    
                    onChange={e => setValue(e.target.value)}
                    id="inputText"
                  />
                  </div>
                  <button className='flex items-center p-4 rounded-lg border-2 transition shadow-lg ease-in delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300' onClick={()=>handlePayment}>Buy now</button>
                  {/* {trigger&&<Strapi id={productId} seats={value}/>} */}
                  <div className='absolute top-5 right-5 cursor-pointer hover:scale-150 duration-200 transition ease-linear' onClick={()=>{closeModal(false)}}>
                         <ImCancelCircle className='w-8 h-8 '/>
                  </div>
               </div>
        
      </div>
    </>
  )
}

export default ModalCart
