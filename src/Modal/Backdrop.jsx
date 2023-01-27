import React from 'react'



const Backdrop = ({children}) => {
  return (
    <>
      <div className=" h-full w-full absolute left-0 top-0 overflow-auto bg-black/10 flex items-center  justify-center">
            {children}
      </div>
    </>
  )
}

export default Backdrop

