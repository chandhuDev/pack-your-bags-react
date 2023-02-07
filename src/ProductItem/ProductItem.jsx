import React, { useState } from 'react'
import { useQuery, gql,useMutation } from '@apollo/client';
import { useNavigate ,Link, useLocation} from 'react-router-dom';


const GET_PLACES = gql`
  query GetPlaces{
  places{
    data{
      id,
      attributes{
      source
      Destination
      cost
      seat
      startDate
      endDate
    }}}
}
`;


const ProductItem = () => {
   const { loading, error, data } = useQuery(GET_PLACES);
   const location=useLocation()
    
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;
   
    function getNumberOfDays(Day1,Day2){
        let date1 = new Date(Day1);
        let date2 = new Date(Day2);
        let diffInMilliseconds = Math.abs(date2 - date1);
        let diffInDays = diffInMilliseconds / (1000 * 3600 * 24)
        return (Math.floor(diffInDays))
    }

    
    
return (
    <>
    {data.places.data.map((place)=>{
        return (
          <div className='mr-6 pt-8 mt-4 ml-12  relative ' key={place.id}>
            <Link
            to={`/productDetails/${place.id}`}
            state={{place}}
            >
            <div  className='w-3/5 h-20 rounded-md flex flex-col hover:bg-gradient-to-r border-2 border-slate-700  cursor-pointer shadow-lg transition ease-linear delay-50  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300'>
             <div className='w-full h-2/4 flex  border-slate-700'>
                    <div className=' flex-1 flex justify-start items-center ml-5  border-slate-700'>
                        <h2 className='text-xl'>Start : <span className='text-2xl font-serif'>{place.attributes.source}</span></h2>
                    </div>
                    <div className='flex-1 flex justify-start items-center border-slate-700'>
                    <h2 className='text-xl'>Destination : <span className='text-2xl font-serif'>{place.attributes.Destination}</span></h2>
                    </div>
           </div>
           <div className='w-full h-2/4  flex flex-row items-center ml-5 border-slate-700 '>
               <h4 className='relative  left-10 text-xl '><span className='text-2xl font-normal mr-2'>{place.attributes.seat}</span>Seats left</h4>
               <h4 className='relative  left-72 text-xl'>Rs - <span className='text-2xl font-normal mr-3'>{place.attributes.cost}/</span>Only</h4>
           </div>
          </div>
         <div className='absolute w-10 h-10 bg-teal-200 top-3 flex justify-center items-center rounded-lg -left-8'>
           <p className='text-xl font-bold'>{getNumberOfDays(place.attributes.startDate,place.attributes.endDate)}</p>
         </div>
         </Link>
        </div>
        )
    })}
  </>
)
}
export default ProductItem
