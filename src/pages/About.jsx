import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

function About() {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
 <Title text1={'ABOUT '} text2={'US'}/></div>
          <div className='my-10 flex flex-col md:flex-row gap-16 ml-10 mr-10'>
            <img className='w-full md:max-w-[450px]' src={assets.about_img}alt="" />
            <div className='-mt-10 flex flex-col justify-center gap-6 md:w-2/4 text-gray-600 text-sm'>
                            <p>Hence, correct detection of finding the presence of a stroke inside a human becomes essential. In the existing system, there are  various medical instruments available in the market for predicting brain stroke but they are very much expensive and they are not efficient enough to be able to calculate the chance of having a brain stroke</p>
            <p>. Based on the proposed problem, ML provides different classification algorithms to divine the probability of a patient having a Brian Stroke.
            </p>
            <b className='text-gray-800'>OUR MISSION</b>
            <p>correct detection of finding the presence of a stroke inside a human becomes essential. In the existing system, there are  various medical instruments available in the market for predicting brain stroke but they are </p>
            
          </div>
      </div>
      <div className='ml-10 text-xl py-4'>
           <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'> 
            <b>Quality Assurance</b>
            <p className='text-gray-600'>Detection of finding the presence of a stroke inside a human becomes essential. In the existing system, there are  </p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'> 
            <b>Convenience</b>
            <p className='text-gray-600'>Are ect detection of finding the presence of a stroke inside a human becomes essential. In the existing system, there are  various medical instruments available in the market for predicting b </p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'> 
            <b>Exceptional Customer Service</b>
            <p className='text-gray-600'>correct detection of finding the presence of a stroke inside a human becomes essential. In the existing system, there are  various medical. In the existing system, there are  various medical instruments available in the market for predicting b </p>
          </div>
      </div>
      <NewsLetterBox/>
    </div>
  )
}

export default About
