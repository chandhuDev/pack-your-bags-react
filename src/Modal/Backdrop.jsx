import React from 'react'



const Backdrop = ({children}) => {
  return (
    <>
      <div className=" h-screen w-full absolute left-0 top-0 bg-black bg-opacity-20 z-10 flex items-center  justify-center">
            {children}
      </div>
    </>
  )
}

export default Backdrop

