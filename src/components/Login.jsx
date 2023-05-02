import React,{useState} from 'react'
import InputFormat from '../Utils/InputFormat'
import logo from '../assests/logo.jpg'
import {Link,useNavigate} from 'react-router-dom'
import { signInUser } from '../lib'
import axios from 'axios';

const Login = () => {
   const [email,setEmail]=useState('')
   const [password,setPassword]=useState()
   const navigate=useNavigate()
   async function handleSubmit(e){
    e.preventDefault()
    const userdata=signInUser(email,password)
    
    navigate("/",{state:{
      user:userdata,
      }})
   }


  return (
    <>
    <div className='w-full h-screen flex justify-center items-center'>
    <form className='w-80 h-96 p-4 border-2 rounded-md border-gray-300 flex flex-col shadow-lg cursor-pointer' onSubmit={handleSubmit}>
    <img src={logo} alt='logo' width={50} height={50} className='rounded-full block mx-auto'/>
    <InputFormat 
      type='email' 
      label='Enter email' 
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      required />
    <InputFormat 
      type='password' 
      label='Enter password' 
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      required />
    <button className='flex  justify-center mx-auto py-2 px-5 rounded-lg border-2 w-fit mt-6 transition shadow-lg ease-in delay-50 bg-blue-500 hover:-translate-y-1 hover:scale-150 hover:bg-indigo-500 duration-300' type='submit'>Login</button>
     <p className='text-center text-zinc-800 mt-4 text-xl'>
        No account yet?{' '}
        <Link to="/sign-up" className='text-cyan-700'>
          Sign up
        </Link>
      </p>
    </form>
   </div>
  </>
  )
}

export default Login
