import React,{useRef} from 'react'
import  './success.css'
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';






const Success = () => {


    const { ref: magicSectionRef, inView: magicSectionIsVisible } = useInView();
    const successMessageProps = useSpring({
        from: { opacity: 0, transform: 'translateY(-50%)' },
        to: { opacity: 1, transform: 'translateY(0%)' },
        config: { duration: 500 },
      });
 
     
     


 return (
    <>
        
    <div className="flex flex-col items-center justify-center w-full h-screen">
       <p>
        <span ref={magicSectionRef}
          className={`rocket ${magicSectionIsVisible ? 'animateRocket' : ''}`}>
              🚀
        </span>
       </p>
      <animated.h1 className="text-2xl font-bold mb-8 text-green-600" style={successMessageProps}>Payment Successful!</animated.h1>
      <animated.p className="text-lg mb-8 text-center" style={successMessageProps}>Thank you for your payment! Your transaction has been completed and your payment has been received.</animated.p>
      <animated.p className="text-lg mb-8 text-center" style={successMessageProps}>Your order will be processed and shipped soon. You will receive a confirmation email with the details of your purchase.</animated.p>
      <animated.p className="text-lg text-center" style={successMessageProps}>We appreciate your business and hope you have a great day!</animated.p>
    </div>
  
    </>
  )
}

export default Success
