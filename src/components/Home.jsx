import React from 'react'
import travel from '../assests/travel.png'
import travel6 from '../assests/travel6.png'
import travel3 from '../assests/travel3.png'
import travel5 from '../assests/travel5.png'
import travel4 from '../assests/travel4.png'

const Home = () => {
  return (
    <>
    <div className="relative mt-52 flex flex-row justify-evenly">
     <div className="flex  ml-6  text-center justify-center ">
        <h2 className="text-4xl  font-bold">Pack your bags</h2>
        
     </div>
     <div className="flex relative">
        {/* <div className="absolute top-1 left-60">
            <img src={travel} alt="travel" className="img-btn hover:-translate-y-36 w-3/4  cursor-pointer duration-200 scroll-smooth"/>
        </div>
        <div className="absolute top-10 left-48">
            <img src={travel6} alt="travel1" className="img-btn hover:-translate-y-36 cursor-pointer duration-200 scroll-smooth"/>
        </div>
        <div className="absolute top-20 left-36">  
            <img src={travel3} alt="travel2" className="img-btn hover:-translate-y-36 cursor-pointer duration-200 scroll-smooth"/>
        </div>
        <div className="absolute top-28 left-24">
            <img src={travel5} alt="travel3" className="img-btn hover:-translate-y-36 cursor-pointer duration-200 scroll-smooth"/>
        </div>
        <div className="absolute top-36 left-12">
            <img src={travel4} alt="travel4" className="img-btn drop-shadow-2xl hover:-translate-y-36 cursor-pointer duration-200 scroll-smooth"/>
        </div> */}
     </div>
   </div>
    </>
  )
}

export default Home
