import React,{useState,useRef,useEffect} from 'react'
import {motion} from 'framer-motion'
 import images from '../Images'
import imageData from '../assests/Bir.jpg'




const Places = () => {
      const [width,setWidth]=useState(0)
      const carouselWidth=useRef()
 

      useEffect(()=>{
         
         setWidth(carouselWidth.current.scrollWidth-carouselWidth.current.offsetWidth)
      },[])


  


  return (
    <>
     <div className='flex flex-col  justify-center gap-y-2 mt-60 w-full'>
       <h2 className='text-center font-bold text-3xl mt-4'>Places</h2>
       <motion.div className='   mx-32 my-10 overflow-hidden' ref={carouselWidth}>
       <motion.div  drag='x' dragConstraints={{right:0,left:-width}}  whileTap={{cursor:'grabbing'}} className='flex flex-row group items-center'>
               {
                images.map((image)=>{
                  console.log(image.url)
                  
                  return (
                  <motion.div className='min-w-fit min-h-fit px-10 py-6' key={image}>
                    <motion.div className='relative transition shadow-lg ease-in delay-50  hover:-translate-y-1 hover:scale-110  duration-300 cursor-pointer'>
                       <img src={image.url} alt={image.name} className='w-[450px] h-[450px] rounded-lg  pointer-events-none  '/>
                       <motion.h2 className='absolute top-3/4 left-1/2  -translate-x-1/2   text-xl font-semibold text-black '>
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
