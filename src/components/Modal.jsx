import React from 'react'
import {ProductDetails,Backdrop} from './index'
const Modal = () => {
  return (
    <>
      <Backdrop >
        <ProductDetails />
      </Backdrop>
    </>
  )
}

export default Modal
