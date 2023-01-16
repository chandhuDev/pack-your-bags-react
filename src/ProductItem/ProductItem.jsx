import React from 'react'
import { useQuery, gql,useMutation } from '@apollo/client';

const GET_PLACES = gql`

  query GetPlaces{
  places{
    data{
      attributes{
       source,
      destination,
      cost,
      seat,
      startDate,
      endDate,
       
    }
}
  }
}
`;


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


const ProductItem = () => {

    const { loading, error, data } = useQuery(GET_PLACES);
    const [addTodo]=useMutation(UPDATE_PLACE)
    


    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;
    
  // console.log(data)


   function updateSeat(){
    
   }


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
            
            <div className='mx-24 pt-8 mt-4  relative'>
            <div className='w-full h-48 rounded-lg flex flex-col hover:bg-gradient-to-r border-2 border-slate-700 hover:from-slate-100 cursor-pointer hover:via-purple-100 hover:to-red-200'>
           <div className='w-full h-2/5 flex border-b-2 border-slate-700'>
                    <div className='flex-1 flex justify-center items-center border-r-2 border-slate-700'>
                        <h2 className='text-3xl'>{place.attributes.source}</h2>
                    </div>
                    <div className='flex-1 flex justify-center items-center '>
                    <h2 className='text-3xl'>{place.attributes.destination}</h2>
                    </div>
           </div>
           <div className='w-full h-1/3 border-b-2 flex flex-row items-center border-slate-700 '>
               
               <h4 className='relative  left-20  text-lg' onClick={updateSeat}><span className='text-xl font-bold mr-2'>{place.attributes.seat}</span>Seats left</h4>
               <h4 className='relative  left-80 text-xl'><span className='text-xl font-bold mr-3'>{place.attributes.cost}</span>Only to visit the glory Places</h4>
           </div>
           <div className='w-full justify-evenly   p-1  flex  items-center grow'>
                <div><p className='text-lg font-bold'>JOURNEY : </p></div>
                <div className='flex  justify-evenly'>
                 <p> Start Date <span>{place.attributes.startDate} </span></p>
                 <p>End Date <span>{place.attributes.endDate} </span></p>
                </div>
               
           </div>  
         
         </div>
         <div className='absolute w-20 h-20 bg-teal-200 top-1 flex justify-center items-center rounded-lg -left-14'>
           <p className='text-3xl font-bold'>{getNumberOfDays(place.attributes.startDate,place.attributes.endDate)}</p>
         </div>
            </div>
            
            
        )
    })}
    
    </>
   )


}

export default ProductItem
