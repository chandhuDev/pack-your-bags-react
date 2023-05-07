import React,{useEffect} from 'react'
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import { useParams,useLocation } from 'react-router-dom';
import  '../css/Success.css'
import { updatePlace } from '../lib';
import { Navigate } from '../Utils/Images';
const Success = () => {
  const {id}=useParams()
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search)
  const seats = queryParams.get('seats');
  const availableSeats=queryParams.get('available')
  const { ref: magicSectionRef, inView: magicSectionIsVisible } = useInView();
  const navigate=Navigate()
  // const successMessageProps = useSpring({
  //       from: { opacity: 0, transform: 'translateY(-50%)' },
  //       to: { opacity: 1, transform: 'translateY(0%)' },
  //       config: { duration: 500 },
  // });

  async function updateData(){

    const data={
      data:{
        seat:Number(seats)+Number(availableSeats)
      }
    }
    const formData=new FormData()
    formData.append("data",JSON.stringify(data))
    fetch(`http://localhost:1337/api/places/${id}`,{
      method:"PUT",
      body:formData
    }).then(res=>res.json()).then(res=>{
    console.log(res)
    })
   
    return 
  }

useEffect(()=>{
  updateData()
 setInterval(()=>{
  navigate("/product")
},[4000])

},[])


return (
    <>
     {/* <div className="flex flex-col items-center justify-center w-full h-screen">
     <h2 className="text-2xl font-bold mb-8 text-green-600" ref={magicSectionRef} >Payment Successful!</h2>
       <p>
        <span 
          className={`rocket ${magicSectionIsVisible ? 'animateRocket' : ''}`}>
              🚀
        </span>
       </p>
      
      <p className="text-xl mb-8 text-center" >Thank you for your payment! Your transaction has been completed and your payment has been received.</p>
      <p className="text-xl text-center" >We appreciate your business and hope you have a great day!</p>
     </div> */}
     <h2 ref={magicSectionRef} >
            Magic 
          </h2>

          <p>
            <span className={`rocket ${magicSectionIsVisible} ? animateRocket : ''}`}>
              🚀
            </span>
          </p>
   </>
  )
}

export default Success




