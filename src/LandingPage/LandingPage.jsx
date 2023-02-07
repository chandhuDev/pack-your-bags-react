import React from 'react'
import {Navbar} from '../Navbar'
import {Home} from '../Home'
import {Product} from '../Product'
import {Places} from '../Places'

import {Footer} from '../Footer'




const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Product />
      <Places />
      <Footer />
    </>
  )
}

export default LandingPage
