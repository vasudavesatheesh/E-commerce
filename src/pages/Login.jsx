import React, { useState } from 'react'

const Login = () => {
  const [currentstate,setCurrentstate]=useState('Sign Up')
  const onSubmitHandler=async(event)=>{
    event.preventDefault();
  }
  return (
    <div>
      <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
           <div className='inline-flex items-center gap-3 mb-2 mt-10'>
              <p className='prata-regular text-3xl '>{currentstate}</p>
              <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
           </div>
          {currentstate==='Login'?'':<input type="text" className='w-full px-3 py-3 border border-gray-800' placeholder='Name' required/>} 
           <input type="email" className='w-full px-3 py-3 border border-gray-800' placeholder='Email'required/>
           <input type="password" className='w-full px-3 py-3 border border-gray-800' placeholder='Password'required/>
           <div className='w-full flex justify-between text-sm mt-[-8px]'>
            <p className='cursor-pointer'>forget your password</p>
            {
              currentstate==='Login'
              ?<p onClick={()=>setCurrentstate('Sign Up')} className='cursor-pointer '>Create Account</p>
              :<p onClick={()=>setCurrentstate('Login')} className='cursor-pointer '>Login Here</p>
            }

           </div>
           <button className='bg-black text-white font-light px-8 py-2 mt-4'>{currentstate==='Login'?'Sign In':'Sign Up'}</button>
      </form>
      
    </div>
  )
}

export default Login
