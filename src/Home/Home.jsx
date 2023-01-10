import React from 'react'
import travel from '../assests/travel.png'
import travel6 from '../assests/travel6.png'
import travel3 from '../assests/travel3.png'
import travel5 from '../assests/travel5.png'
import travel4 from '../assests/travel4.png'




const Home = () => {
  return (
    <>
    <div className="relative mt-44 flex ">
    <div className="flex  ml-6 flex-1 text-center justify-center flex-col">
        <h2 className="text-4xl  font-bold">Pack your bags</h2>
        <p className="text-2xl leading-loose mt-8 font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quis sint architecto maxime eveniet atque. Cum explicabo natus suscipit dolorem fuga accusantium repudiandae! Sint reiciendis ratione similique corporis nostrum, amet ullam dolorem cum repellendus consequuntur culpa consequatur. Hic nobis commodi deserunt quo molestias pariatur eos error itaque. Consequuntur, dignissimos quos!
        </p>
    </div>
    <div className="flex flex-1 relative">
        <div className="absolute top-1 left-60">
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
        </div>
    </div>
   </div>
    </>
  )
}

export default Home
