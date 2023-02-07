import React from 'react'



const InputFormat = ({ type = 'text', label = '', ...props }) => {

   
   

  return (
    <>
     <div className='w-full flex flex-col mt-5'>
      {label ? <label className='w-full text-xl'>{label}</label> : null}
      <input type={type} className='w-full h-10 border-2 p-1  rounded-md border-gray-300 bg-white' {...props}/>
    </div>
    </>
  )
}

export default InputFormat
