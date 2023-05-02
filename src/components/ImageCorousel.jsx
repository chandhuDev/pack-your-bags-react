import React, { useState, useEffect, useRef } from "react";

const ImageCorousel = ({images}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const intervalId = useRef(null);
  
useEffect(() => {
      intervalId.current = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
      }, 2000)
  
      return () => {
        clearInterval(intervalId.current);
      }
}, [images]);
  
return (
        <img src={images[currentImageIndex].imageUrl} alt='image' className='w-full h-full object-cover' />
)}

export default ImageCorousel
