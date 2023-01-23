import React from 'react'
import { useParams,useLocation } from 'react-router-dom';
import { useQuery, gql,useMutation } from '@apollo/client';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';






const UPDATE_PLACE=gql`
   mutation updatePlace($id:ID!,$data:PlaceInput!){
    updatePlace(id:$id,data:$data){
    data{
      id,
      attributes{
        seat
      }
    }
    }
    
  }
`
const images = [
  'https://via.placeholder.com/1200x800.png?text=Slide+1',
  'https://via.placeholder.com/1200x800.png?text=Slide+2',
  'https://via.placeholder.com/1200x800.png?text=Slide+3',
  'https://via.placeholder.com/1200x800.png?text=Slide+3',
  'https://via.placeholder.com/1200x800.png?text=Slide+3',
  'https://via.placeholder.com/1200x800.png?text=Slide+3',
  'https://via.placeholder.com/1200x800.png?text=Slide+3',
  'https://via.placeholder.com/1200x800.png?text=Slide+3',
  'https://via.placeholder.com/1200x800.png?text=Slide+3',
];

const ProductDetails = () => {
  const location=useLocation()
  
  const background=location.state && location.state.background
  
   
  console.log("PageDetails.js",location,background)
  
  return (
    <>
      <div className='h-screen w-full px-16 py-10 border-r-4  rounded-md text-2xl'>
          <div className='flex flex-row px-2 py-2 justify-evenly mx-40 items-center bg-pink-300'>
             <h4 className=' font-serif text-center text-blue-900 py-6'>Enter your source</h4>
             <h4 className=' font-serif text-center text-blue-900 py-6'>Enter your destination</h4>
          </div>
          <div className='my-5 p-5'>
            <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, ab. Numquam a deleniti velit, commodi deserunt rerum ex quidem. Corrupti minima quibusdam adipisci saepe qui. Ab qui maiores, error aliquid, rem esse molestias vero eum fugiat eos quisquam corrupti maxime.</h5>
          </div>
          <div className='flex flex-row  mx-52 mt-7  items-center'>
            <div className='flex-1'>
          <label className="block font-medium text-gray-700 mb-2 span" for="date">
          Start Date:
         </label>
          <input
            type="date"
              id="date"
             name="date"
            className="bg-white focus:outline-none span focus:shadow-outline-blue border border-gray-300 rounded-md py-2 px-4 block w-full appearance-none leading-5"
           />
           </div>
           <div className='flex-1'>
          <label className="block font-medium text-gray-700 mb-2" for="date">
          End Date:
         </label>
          <input
            type="date"
              id="date"
             name="date"
            className="bg-white focus:outline-none focus:shadow-outline-blue border border-gray-300 rounded-md py-2 px-4 block w-full appearance-none leading-5"
           />
           </div>
           
          </div>
          <div className='w-full h-max my-8 py-5 mx-auto flex gap-x-4 items-start justify-evenly text-2xl font-bold text-center border-r-2 rounded-lg border-blue-800 bg-slate-700'>
           <h4>cost of one ticket</h4>
           <h5>seats left</h5>
           <button className=''>Buy One</button>
          </div>
          <h2 className='w-full px-4 py-4 font-bold text-3xl text-center '>Places </h2>
          
          <div className='w-full h-96 p-10 my-5 bg-red-100 '>
             <AwesomeSlider className="w-full h-full overflow-hidden rounded-md"  infinite={true}>
             {images.map((image, index) => (
             <div key={index} className="w-full h-64">
              <img src={image} className="w-full h-64 object-cover rounded-md" alt="Slide" />
             </div>
               ))}
              </AwesomeSlider>
          </div>
          
      </div>
    </>
  )
}

export default ProductDetails
