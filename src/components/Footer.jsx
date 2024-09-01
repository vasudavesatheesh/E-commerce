import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className=' ml-11 flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm mr-10'>
              <div>
                <img src={assets.logo} className='mb-5 w-32' alt="" />
                <p className='w-full md:w-2/3 text-gray-600'>Thankyou for your extremely good support and your great Orders using our website .We are Grateful for your goof heart</p>
              </div>
              <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                         <li>HOME</li>
                         <li>ABOUT US</li>
                         <li>DELIVERY</li>
                         <li>PRIVACY POLICY</li>
                </ul>
              </div>
              <div>
                <p className='text-xl  font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-gray-60'>
                  <li>+91 6238435808</li>
                  <li>vasudavesatheesh@gmail.com</li>

                </ul>
              </div>
      </div>
      <div>
        <hr />
        <p className='py-5 text-sm text-center '>Copyright 2024 forever.com * All Rights Deserved</p>
      </div>
    </div>
  )
}

export default Footer
