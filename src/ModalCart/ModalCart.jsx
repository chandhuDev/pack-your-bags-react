import React, { useState } from 'react'

const ModalCart = () => {
const [value, setValue] = useState('');



  return (
    <>
      <div className='w-full h-full overflow-y-auto absolute top-0 left-0 flex justify-center items-center bg-black/30 ' >
        
               <div className='h-auto w-3/6 flex flex-col rounded-lg border-2  items-center gap-y-5 text-2xl justify-center px-8 py-5 bg-slate-100'>
                  <h5 className='block text-center'>Buy Tickets</h5>
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
                  <button className='flex items-center px-5 py-3 rounded-lg border-2 hover:bg-cyan-200 bg-gray-100'>Buy now</button>
               </div>
        
      </div>
    </>
  )
}

export default ModalCart
