import React from 'react'
import {useNavigate} from 'react-router-dom'
import '../css/imageAnime.css'
import images from '../Utils/Images'
import backgroundImage from '../assests/background-text.jpg'


const Home = () => {
   const navigate=useNavigate()


   function moveToProduct(){
    navigate("/product")
   }

return (
    <>
    <div className="flex flex-row justify-evenly w-full h-128 mt-20 ">
     <div className="flex items-start pt-24 relative flex-col w-128  h-full overflow-hidden">
        <p className='home-text block mx-auto mb-8'>More You see it</p>
        <div className='w-full h-40 flex justify-center items-center bg-white'>
           <p className='home-text px-1 py-2 special-class text-center uppercase' style={{backgroundImage:`url(${backgroundImage})`}}>Explore the beautiful world around <span className=' span-class'>you!</span></p>
        </div>
        
        <div className='absolute bottom-12 w-auto h-auto bg-black  rounded-md cursor-pointer ml-32 font-mono text-2xl font-semibold' >
        <button className='py-3 px-4 bg-indigo-800 text-center rounded-md  hover:duration-300 transition ease-in-out hover:-translate-y-2 hover:-translate-x-2 hover:delay-150 hover:text-teal-100' onClick={moveToProduct}>View Products <span>{'->'}</span></button>
        </div>
     </div>
     <div className="grow h-full relative ">
      <div className='absolute top-1/4 left-80 z-10 h-3/5 w-2/6 bg-purple-400 rounded-full bg-cover border-2 border-indigo-500/75 transition anime' style={{backgroundImage:`url(${images[0]?.url})`}}>
      </div>
      <div className='absolute top-12 left-20 h-64 w-64 bg-yellow-400/40 rounded-full bg-cover border-2 border-indigo-500/75 anime' style={{backgroundImage:`url(${images[8]?.url})`}}>
      </div>
      <div className='absolute top-4 right-1  h-60 w-60 bg-green-400/70 rounded-full bg-cover border-2 border-indigo-500/75 anime' style={{backgroundImage:`url(${images[9]?.url})`}}>
      </div>
      <div className='absolute bottom-4 right-16  h-48 w-48 bg-gray-500/70 rounded-full bg-cover border-2 border-lime-300/75 anime' style={{backgroundImage:`url(${images[4]?.url})`}}>
      </div>
     </div>
   </div>
    </>
  )
}

export default Home


