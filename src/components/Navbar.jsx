import React, { useContext, useState } from 'react'
import {assets} from '../assets/assets'
import {Link,NavLink } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'

const Navbar = () => {
  const[visibe,setVisible]=useState(false)

  const{setShowSearch,getCartCount}=useContext(ShopContext)
  return (
    <div className='flex items-center justify-between py-5 font-medium ml-10'>

      <Link to='/'><img src={assets.logo}   className='w-36' alt="" /></Link>
      <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
       <NavLink to='/' className='flex flex-col items-center gap-1 mr-10'>
        <p>HOME</p>
        <hr  className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
       </NavLink>
       <NavLink to='/collection' className='flex flex-col items-center gap-1 mr-10'>
        <p>COLLECTIONS</p>
        <hr  className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
       </NavLink>
       <NavLink to='/about' className='flex flex-col items-center gap-1 mr-10'>
        <p>ABOUT</p>
        <hr  className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
       </NavLink>
       <NavLink to='/contact' className='flex flex-col items-center gap-1 mr-10'>
        <p>CONTACT</p>
        <hr  className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
       </NavLink>
      </ul>
      <div  className='flex items-center gap-6 mr-10'>
        <img onClick={()=>setShowSearch(true)} src={assets.search_icon} className='w-5 cursor-pointer' alt="" />
           <div className='group relative'>
     <Link to={'/login'}> <img src={assets.profile_icon} className='w-5 cursor-pointer' alt="" /></Link>  
        <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4 '>
           <div className='flex flex-col gap-2 w-36 py-3 px5 bg-slate-100 text-gray-500 rounded'>
              <p className=' ml-2 cursor-pointer hover:text-black'>My profile</p>
             <Link to={'/orders'}><p className=' ml-2 cursor-pointer hover:text-black'>Orders</p></Link> 
              <p className=' ml-2 cursor-pointer hover:text-black'>Logout</p>
           </div>
        </div>
           </div>
          <Link to='/cart' className='relative'>
          <img src={assets.cart_icon}  className='w-5 min-w-5'alt="" />
          <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>{getCartCount()}</p>
          </Link>
          <img onClick={()=>setVisible(true)} src={assets.menu_icon}  className='w-5 cursor-pointer sm:hidden' alt="" />
      </div>
               
       {/* {sidebar menu for the small screens like phone} */}
         <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visibe ?'w-full' :'w-0'}`}>
              <div className='flex flex-col text-gray-600'>
                 <div onClick={()=>setVisible(false)} className='flex items-center gap-4 p-3  cursor-pointer'>
                     <img  className='h-4 rotate-180'src={assets.dropdown_icon} alt="" />
                     <p>Back</p>
                 </div>
                 <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border'to='/'>HOME</NavLink>
                 <NavLink onClick={()=>setVisible(false)}className='py-2 pl-6 border'to='/collection'>COLLECTION</NavLink>
                 <NavLink onClick={()=>setVisible(false)}className='py-2 pl-6 border'to='/about'>ABOUT</NavLink>
                 <NavLink onClick={()=>setVisible(false)}className='py-2 pl-6 border'to='/contact'>CONTACT</NavLink>
              </div>

         </div>
    </div>
  )
}

export default Navbar