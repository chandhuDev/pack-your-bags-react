import React,{useState} from 'react'
import InputFormat from '../InputFormat/InputFormat'
import logo from '../assests/logo.jpg'
import {Link} from 'react-router-dom'

const SignUp = () => {

   const [email,setEmail]=useState('')
   const [password,setPassword]=useState('')
   const [firstName,setFirstName]=useState('')
   const [secondName,setSecondName]=useState('')
   const [loading,isLoading]=useState(false)

   function handleSubmit(e){
    e.preventDefault()
    
   }


  return (
    <>
    
    <div className='w-full h-screen flex justify-center items-center'>
    
        <form className='w-96 h-128 p-4 border-2 rounded-md border-gray-300 flex flex-col shadow-lg cursor-pointer' onSubmit={handleSubmit}>

        <img src={logo} alt='logo' width={50} height={50} className='rounded-full block mx-auto'/>
        <div className='w-full h-14 gap-4 flex flex-row mt-4 mb-4'>
          <InputFormat type='text' label='First Name' value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
          <InputFormat type='text' label='Second Name' value={secondName} onChange={(e)=>setSecondName(e.target.value)}/>

        </div>
        
        <InputFormat 
      type='email' 
      label='Enter email' 
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      
      required />

      <InputFormat 
      type='password' 
      label='Create password' 
      value={email}
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
  )
}

export default SignUp
