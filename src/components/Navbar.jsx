import React from 'react'
import logo from '../assests/logo.jpg'
import {Navigate} from '../Utils/Images'

const Navbar = () => {
const JWT=localStorage.getItem('JWT')
const navigate=Navigate()

function loginFunction(){
    navigate('/sign-in')
  }

  function logoutFunction(){
    localStorage.removeItem('JWT')
    navigate('/')
  }
  
  return (
    <>
    <header>
     <nav className="bg-white fixed flex justify-between w-full items-center py-2 grow-0 top-0 left-0 right-0 z-40">
         <div className="flex  items-center flex-auto gap-16">
            <img src={logo} alt="image" className="h-10 object-cover ml-10"/>
         </div>
         {JWT ? <button className="flex flex-start rounded-md md:rounded-lg border-slate-500 ring-1 ring-offset-1 md:ring-offset-2 md:px-8 px-3 py-1  md:mr-12 mr-5  text-[12] " onClick={logoutFunction}>Logout</button> :
         <button className="flex flex-start rounded-md md:rounded-lg border-slate-500 md:px-8 px-3 ring-1 ring-offset-1 md:ring-offset-2 mr-12  text-[12] transition shadow-lg ease-in delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300" onClick={loginFunction}>Login</button>
         }
     </nav>
   </header>
  </>
  )
}

export default Navbar
