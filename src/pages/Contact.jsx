import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-1'>
        <Title text1={'CONTACT '} text2={'US'}/>
      
      </div>
      <div className='ml-10 my-10 flex flex-col justify-center  md:flex-row gap-10 mb-28 mr-10 '>
        <img className='w-full md:max-w-[450px]' src={assets.contact_img} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
            <p className='font-semibold text-xl text-gray-600'>OUR STORE</p>
            <p className='text-gray-500' >73737 MUNDAKKAYAM POSTOFFICE <br />CITYID:89099,MUNDAKKAYAM</p>
            <p className='text-gray-500'>6238435808 <br />vasu@gmail.com</p>
           <p className='font-semibold text-xl text-gray-600'>Carrers at Forever</p>
           <p className='text-gray-500' >Learn More About Our Team AND Job Openings</p>
           <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
        </div>
      </div>
       <NewsLetterBox/>
    </div>
  )
}

export default Contact
