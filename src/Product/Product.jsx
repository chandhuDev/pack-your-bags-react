import React from 'react'
import travel5 from '../assests/travel5.png'


const Product = () => {
  return (
    <>
      <div className="bg-emerald-100 mt-32 flex flex-col items-center h-3/4">
        <h2 className="font-bold text-3xl mt-10">Our Products</h2>
        <div className="flex mt-10 ">
            <div className="flex-1 justify-center items-center flex m-3 flex-col py-3 rounded-md border-2 border-stone-50">
                <h2 className="font-semibold text-xl mb-10">Products</h2>
                   <img src={travel5} alt="feature" className="h-52 mb-8"/>
                   <p className="text-xl text-center mx-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet aperiam aliquid exercitationem deleniti, nemo nulla accusamus sed placeat impedit sapiente!</p>
            </div> 
            <div className="flex-1 justify-center items-center m-3 flex flex-col py-3 rounded-md border-2 border-stone-50">
                <h2 className="font-semibold text-xl mb-10 after:content-['Coming-Soon...'] after:ml-2 after:text-red-500 block after:text-md text-slate-700">Products</h2>
                   <img src={travel5} alt="feature" className="h-52 mb-8"/>
                   <p className="text-xl text-center mx-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet aperiam aliquid exercitationem deleniti, nemo nulla accusamus sed placeat impedit sapiente!</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Product
