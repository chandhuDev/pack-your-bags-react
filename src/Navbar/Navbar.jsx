import React from 'react'
import logo from '../assests/logo.jpg'
import {Link,  useNavigate} from 'react-router-dom'


const Navbar = () => {
  const navigate = useNavigate()
  const JWT=localStorage.getItem('JWT')

  function loginFunction(){
    navigate('/sign-in')
  }

  function logoutFunction(){
    localStorage.removeItem('JWT')
    navigate('/')
  }
  
  return (
    <>
      <header className="bg-white">
     <nav className="bg-white fixed flex justify-between w-full items-center py-2 grow-0 top-0 left-0 right-0 z-10">
         <div className="flex  items-center flex-auto gap-16">
            <img src={logo} alt="image" className="h-10 object-cover ml-10"/>
            <input type="text" placeholder="Search" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  rounded-md sm:text-sm focus:ring-1"/>
           <ul className="flex gap-12 px-2 font-serif text-[6] cursor-pointer text-neutral-600  hover:text-current">
            
            
            <li><a>Products</a></li>
            <li><a>Places</a></li>
            <li><a>Blog</a></li>
            
           </ul>
         </div>
         {JWT ? <button className="flex flex-start rounded-lg border-slate-500 ring-1 ring-offset-2 px-8 py-1  mr-12  text-[12] " onClick={logoutFunction}>Logout</button> :
         <button className="flex flex-start rounded-lg border-slate-500  px-8 py-1  mr-12  text-[12] transition shadow-lg ease-in delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300" onClick={loginFunction}>Login</button>
         }
         
        </nav>
   </header>
    </>
  )
}

export default Navbar
