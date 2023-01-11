import React,{useState,useRef,useEffect} from 'react'
import {motion} from 'framer-motion'
import images from '../Images.js'



const Places = () => {
      const [width,setWidth]=useState(0)
      const carouselWidth=useRef()
 

      useEffect(()=>{
         
         setWidth(carouselWidth.current.scrollWidth-carouselWidth.current.offsetWidth)
      },[])


  


  return (
    <>
     <div className='flex flex-col  justify-center gap-y-2  w-full'>
       <h2 className='text-center font-bold text-3xl mt-4'>Places</h2>
       <motion.div className='   mx-32 my-10 overflow-hidden' ref={carouselWidth}>
       <motion.div  drag='x' dragConstraints={{right:0,left:-width}}  whileTap={{cursor:'grabbing'}} className='flex flex-row  items-center'>
               {
                images.map(image=>{
                  return (
                  <motion.div className='min-w-fit min-h-fit px-10 py-6' key={image}>
                    <motion.div className='relative'>
                       <img src={image} alt='image' className='w-96 h-96 rounded-lg  pointer-events-none cursor-pointer '/>
                       <motion.h2 className='absolute top-3/4 left-1/2 -translate-x-1/2 text-xl font-semibold text-white hover:text-blue-100 cursor-pointer'>
                        Hyderabad
                      </motion.h2>
                      </motion.div>
                      
                  </motion.div>
                  )
                })
               }
        </motion.div>
       </motion.div>
        
     </div>
    </>
  )
}

export default Places
