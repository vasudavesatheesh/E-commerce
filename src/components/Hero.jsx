import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row border border-gray-400 ml-10 mr-10' >
      {/* hero left */}
      <div className='w-full sm:w1/2 flex items-center justify-center py-10 sm:py-0'>
           <div className='text-[#414141]'>
                      <div className='flex items-center gap-2'>
                            <p className='w-8 md:w-11 h-[2px] bg-[#414141] '></p>
                            <p className='font-medium text-sm md:text-base'>OUR BEST SELLER</p>
                      </div>
                      <h1 className=' prata-regular text-3x1 sm:py-3 lg:text-5xl leading-relaxed' >LATEST ARRIVALS</h1>
                      <div className='flex items-center gap-2'>
                        <p className='font-semibold text-sm md:text-base'>Shop NOW</p>
                        <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
                      </div>
           </div>
      </div>
      {/* hero right side */}
      <img className='w-full sm:w-2/5' src={assets.hero_img} alt="" />
    </div>
  )
}

export default Hero
