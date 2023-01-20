import React from 'react'
import { motion } from 'framer-motion'


const Backdrop = ({children}) => {
  return (
    <>
      <div className="bg-black  bg-opacity-5 h-screen w-full flex items-center  justify-center">
            {children}
      </div>
    </>
  )
}

export default Backdrop

