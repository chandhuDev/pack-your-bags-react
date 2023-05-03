import React, {useContext } from 'react'
import { Link} from 'react-router-dom';
import { AppContext } from '../Utils/Images'
import { ImageCorousel ,Spinner} from './index'


const ProductItem = () => {
  const {product}= useContext(AppContext)
  
  
   
return (
    <>
    <div className='w-full h-auto my-20 p-14'>
    
     { product ?
     product?.map((product)=>{
        return (
       <div className='w-full h-auto mx-auto p-10 relative' key={product} >
            <Link
            to={`/productDetails/${product.id}`}
            state={{product}}
            >
              <div className='w-full h-[220px] rounded-md  cursor-pointer '>
              <div  className='w-full h-[220px] rounded-md flex flex-row  border-2 cursor-pointer shadow-lg transition ease-linear delay-50    duration-300 hover:scale-110 hover:-translate-x-2'>
              <div className='w-2/3 h-full flex flex-col grow-0 '>
                <div className='w-full h-2/6 flex flex-row justify-evenly text-lg  items-center'>
                  <p className='font-semibold'>Journey Starts at:<span className='text-3xl uppercase ml-3 items-center font-mono font-normal'>{product.source}</span></p> 
                  <p className='font-semibold'>Ends at:<span className='text-3xl uppercase ml-3 font-mono font-normal'>{product.Destination}</span></p> 
                  
                </div>
                <div className='w-full h-4/6 flex flex-col items-center'>
                   <div className='w-full h-3/5 flex flex-row justify-evenly items-center' >
                   <p className='font-serif'>StartDate:<span className='text-2xl uppercase ml-3 items-center font-normal'>{product.startDate}</span></p> 
                  <p className='font-serif'>EndDate:<span className='text-2xl uppercase ml-3 font-normal'>{product.endDate}</span></p>
                   </div>
                   <div className='w-full h-2/5  flex flex-row justify-center items-center  text-lg'>
                      <p className='font-mono'>Cost : <span className='ml-2 text-xl font-semibold uppercase bg-fuchsia-500 bg-opacity-25 p-2 rounded-md border-2'>{product.cost}</span></p>
                   </div>
                </div>
              </div>
              <div className='h-full w-1/3 rounded-tr-md rounded-tb-md' >
                  <ImageCorousel images={product.imageArray}/>
              </div>
            </div>
          </div>
         </Link>
      </div>
    )}) :
    <Spinner message='We are loading the content for you just wait for couple of seconds' className='w-full h-full flex justify-center items-center'/>
    }
    
   
    </div>
  </>
)
}
export default ProductItem

