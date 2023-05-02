import React from 'react'
const InputFormat = ({ type = 'text', label = '', ...props }) => {
   return (
    <>
     <div className='w-full flex flex-col mt-5'>
      {label ? <label className='w-full text-xl'>{label}</label> : null}
      <input type={type} className='mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  rounded-md sm:text-sm focus:ring-1' {...props}/>
    </div>
    </>
  )
}

export default InputFormat
