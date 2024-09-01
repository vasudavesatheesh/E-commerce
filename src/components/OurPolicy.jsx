import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-row justify-around gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700 mr-10 ml-10'>
      <div>
        <img src={assets.exchange_icon} className='w-12 m-auto mb-5'alt="" />
        <p className='font-semibold'>Eay Exchange Policy</p>
        <p className='text-gray-700'>We Offer Simple Exchange Policy</p>
      </div>
      <div>
        <img src={assets.quality_icon} className='w-12 m-auto mb-5'alt="" />
        <p className='font-semibold'>7 days Return Policy</p>
        <p className='text-gray-700'>We Provide 7 days free Return Policy</p>
      </div>
      <div>
        <img src={assets.support_img} className='w-12 m-auto mb-5'alt="" />
        <p className='font-semibold'>Best Customer Support</p>
        <p className='text-gray-700'>We Provide 24/7 Customer Support</p>
      </div>
    </div>
  )
}

export default OurPolicy
