import React,{useState,useRef,useEffect} from 'react'
import {motion} from 'framer-motion'
import images from '../Utils/Images'
const Places = () => {
      const [width,setWidth]=useState(0)
      const carouselWidth=useRef()
      useEffect(()=>{
         setWidth(carouselWidth.current.scrollWidth-carouselWidth.current.offsetWidth)
      },[])
return (
    <>
     <div className='flex flex-col  justify-center gap-y-2 mt-12 w-full'>
       <h2 className='text-center font-bold text-3xl mt-4'>Places</h2>
       <motion.div className='mx-24 overflow-hidden' ref={carouselWidth}>
       <motion.div  drag='x' dragConstraints={{right:0,left:-width}}  whileTap={{cursor:'grabbing'}} className='flex flex-row group items-center'>
               {
                images.map((image)=>{
                  return (
                  <motion.div className='min-w-fit min-h-fit p-6' key={image}>
                    <motion.div className='relative transition shadow-lg ease-in delay-50  hover:-translate-y-1 hover:scale-105  duration-300 cursor-pointer'>
                       <img src={image.url} alt={image.name} className='w-[240px] h-[240px] rounded-md  pointer-events-none  '/>
                       <motion.h2 className='absolute top-3/4 left-1/2  -translate-x-1/2   text-base font-semibold uppercase text-black/10 '>
                        {image.name}
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
