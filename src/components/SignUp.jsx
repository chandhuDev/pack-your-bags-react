import React,{useState} from 'react'
import InputFormat from '../Utils/InputFormat'
import logo from '../assests/logo.png'
import {Link,useNavigate} from 'react-router-dom'
import { signUpUser } from '../lib';
import axios from 'axios';
const SignUp = () => {
   const [email,setEmail]=useState('')
   const [password,setPassword]=useState('')
   const [firstName,setFirstName]=useState('')
   const navigate=useNavigate()

   function handleSubmit(e){
    e.preventDefault()
    const userdata=signUpUser(firstName,email,password) 
      navigate("/",{state:{
        user:userdata,
      }})
  }


  return (
    <>
    <div className='w-full h-screen flex justify-center items-center'>
     <form className='w-96 h-128 p-4 border-2 rounded-md border-gray-300 flex flex-col shadow-lg cursor-pointer' onSubmit={handleSubmit}>
       <img src={logo} alt='logo' width={50} height={50} className='rounded-full block mx-auto'/>
        <div className='w-full h-14 gap-4 flex flex-row mt-4 mb-4'>
          <InputFormat type='text' label='User Name' value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
          
        </div>
      <InputFormat 
        type='email' 
        label='Enter Email' 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required />

      <InputFormat 
        type='password' 
        label='Enter Password' 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
         required />
     <button className='flex  justify-center mx-auto py-2 px-5 rounded-lg border-2 w-fit mt-6 transition shadow-lg ease-in delay-50 bg-blue-500 hover:-translate-y-1 hover:scale-150 hover:bg-indigo-500 duration-300' type='submit'>Signup</button>
     <p className='text-center text-zinc-800 mt-4 text-xl'>
        Already have an account?{' '}
        <Link to="/sign-in" className='text-cyan-700'>
          Sign in
        </Link>
      </p>
    </form>
  </div>
</>
)}

export default SignUp
