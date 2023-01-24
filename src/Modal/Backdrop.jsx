import React from 'react'



const Backdrop = ({children}) => {
  return (
    <>
      <div className=" h-screen w-full flex items-center  justify-center">
            {children}
      </div>
    </>
  )
}

export default Backdrop

