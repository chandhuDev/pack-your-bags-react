import React,{useRef} from 'react'
import { useParams,useLocation } from 'react-router-dom';
import { useQuery, gql,useMutation } from '@apollo/client';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import {BsChevronCompactLeft,BsChevronCompactRight} from 'react-icons/bs'
import { useState } from 'react';






const GET_PLACE=gql`
  query places($id:ID){
 place(id:$id){
  data{
    id
    attributes{
      seat
      cost
      startDate
      source
      destination
      endDate
      images{
        data{
          
          attributes{
            placeImage{
              data{
                attributes{
                  url
                }
              }
            }
            placeTitle
            Description
            
          }
        }
      }
    }
  }
}  

}
`

const image = [
  'https://via.placeholder.com/1200x800.png?text=Slide+1',
  'https://via.placeholder.com/1200x800.png?text=Slide+2',
  'https://via.placeholder.com/1200x800.png?text=Slide+3',
  'https://via.placeholder.com/1200x800.png?text=Slide+2',
  'https://via.placeholder.com/1200x800.png?text=Slide+1',
  'https://via.placeholder.com/1200x800.png?text=Slide+3',
  'https://via.placeholder.com/1200x800.png?text=Slide+2',
  'https://via.placeholder.com/1200x800.png?text=Slide+1',
  'https://via.placeholder.com/1200x800.png?text=Slide+3',
];

const ProductDetails = () => {
  const {id}=useParams()
  const [index,setIndex]=useState(0)

  const { loading, error, data } =useQuery(GET_PLACE, { variables: { id } });
  const sliderRef = useRef(null);

  


console.log(data)


const images=data?.place?.data?.attributes?.images?.data
const source=data?.place?.data?.attributes?.source
const destination=data?.place?.data?.attributes?.destination
const seat=data?.place?.data?.attributes?.seat
const startDate=data?.place?.data?.attributes?.startDate
const endDate=data?.place?.data?.attributes?.endDate
const cost=data?.place?.data?.attributes?.cost

console.log(index)

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;
  
 
  function getNumberOfDays(Day1,Day2){
    let date1 = new Date(Day1);
    let date2 = new Date(Day2);
    let diffInMilliseconds = Math.abs(date2 - date1);
    let diffInDays = diffInMilliseconds / (1000 * 3600 * 24)
    
    return (Math.floor(diffInDays))
   }
  
   
 function prevSlide(){
  const isFirstSlide=index===0
  const newIndex=isFirstSlide ? image.length-1 : index-1
  setIndex(newIndex)
 }

 function nextSlide(){
  const isLastSlide=index===image.length-1
  const newIndex=isLastSlide ? 0 : index + 1
  setIndex(newIndex)
}
  
  return (
    <>
      <div className='h-screen w-4/5 mx-auto  px-16 py-10 text-2xl'>
          <div className='flex flex-row px-2 py-2 justify-evenly mx-40 items-center bg-pink-300'>
             <h4 className=' font-serif text-center text-blue-900 py-6'>Source : {source}</h4>
             <h4 className=' font-serif text-center text-blue-900 py-6'>Destination : {destination}</h4>
          </div>
          <div className='my-5 p-5'>
            <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, ab. Numquam a deleniti velit, commodi deserunt rerum ex quidem. Corrupti minima quibusdam adipisci saepe qui. Ab qui maiores, error aliquid, rem esse molestias vero eum fugiat eos quisquam corrupti maxime.</h5>
          </div>
          <div className='flex flex-row  mx-52 mt-7  items-center'>
            <div className='flex-1'>
          <label className="block font-medium text-gray-700 mb-2 span" htmlFor="date">
          Start Date : 
         </label>
          <input
            type="date"
              id="date"
             name="date"
            className="bg-white focus:outline-none span focus:shadow-outline-blue border border-gray-300 rounded-md py-2 px-4 block w-full appearance-none leading-5"
           />
           </div>
           <div className='flex-1'>
          <label className="block font-medium text-gray-700 mb-2" htmlFor="date">
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
           <h4>Cost : {cost}</h4>
           <h5>hurry Up! {seat} seats left</h5>
           <button className='px-4 py-2 rounded-md border-2 bg-gray-100 hover:bg-blue-500'>Purchase</button>
          </div>
          <h2 className='w-full px-4 py-4 font-bold text-3xl text-center '>Places </h2>
          
          {/* <div className='w-full h-auto p-10 my-5  '>
             <AwesomeSlider className="w-full h-full overflow-hidden  rounded-md" ref={sliderRef} infinite={true} Play={3000}>
             {image.map((imageObject, index) => (
              
             <div key={index} className="w-full h-96  relative cursor-pointer hover:bg-red-700  " >
              <img src={imageObject} className="w-full h-96 object-cover rounded-md" alt="Slide" />
              <div className='px-4 py-2 my-5  font-bold text-2xl absolute translate-y-20 group-hover:translate-y-2'>
                   {imageObject.attributes.Description}
                   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci aspernatur optio illo ad! Temporibus repellendus voluptates ut fuga inventore! Obcaecati iste voluptatum doloremque placeat ducimus, perferendis provident sequi ipsam incidunt! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, fuga!
                
              </div>
             </div>
             
               ))}
              </AwesomeSlider>
          </div>
           */}


          <div className='w-full h-fit p-10 my-5 relative  cursor-pointer'>
            
                <div className='w-full h-fit rounded-xl bg-gray-100 group ' >
                   <div
                   style={{backgroundImage:`url(${image[index]})`}} 
                   className='w-5/6 h-96 rounded-2xl  bg-cover bg-center  relative duration-500'>

                   </div>
                   
                   <div className='px-4 py-2 my-5  overflow-hidden  group-hover:  absolute group-hover:-translate-y-56 group-hover:duration-500    font-bold text-2xl'>
                  
                   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci aspernatur optio illo ad! Temporibus repellendus voluptates ut fuga inventore! Obcaecati iste voluptatum doloremque placeat ducimus, perferendis provident sequi ipsam incidunt! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, fuga!
                
                   </div>
                </div>
                  {/* Left arrow */}
                  <div className='block absolute top-[50%] -translate-x-10 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                    <BsChevronCompactLeft size={30} onClick={prevSlide}/>
                   </div>
                   {/* Right arrow */}
                   <div className='block absolute top-[50%] translate-x-10 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                    <BsChevronCompactRight size={30} onClick={nextSlide}/>
                   </div>
                  
                  
                  <div>
                    
                </div>
             
           

            

          </div>
      </div>
    </>
  )
}

export default ProductDetails
