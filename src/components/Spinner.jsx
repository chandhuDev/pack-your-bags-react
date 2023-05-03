import React from 'react'
import {MagnifyingGlass} from 'react-loader-spinner'


const Spinner = ({message}) => {
 return (
  <div className='flex flex-col items-center'>
  <MagnifyingGlass
  visible={true}
  height="120"
  width="120"
  ariaLabel="MagnifyingGlass-loading"
  wrapperStyle={{}}
  wrapperClass="MagnifyingGlass-wrapper"
  glassColor = '#c0efff'
  color = '#e15b64'
/>
    <p className='text-2xl font-semibold'>{message}</p>
  </div>
  )
}

export default Spinner
