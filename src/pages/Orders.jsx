import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'

const Orders = () => {
  const {products,currency}=useContext(ShopContext)
  return (
    <div className=' ml-10 border-t pt-16'> 
       <div className='text-2xl '>
             <Title text1={'MY '} text2={'ORDERS'}/>
       </div>
      <div>
        {
          products.slice(1,4).map((item,index)=>(
            <div key={index} className='py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4 mr-10'>
                     <div className='flex items-start gap-6 text-sm'>
                      <img className='w-16 sm:w-20' src={item.image[0]} alt="" />
                      <div>
                        <p className='sm:text-base font-medium'>{item.name}</p>
                        <div className='flex items-center gap-3 mt-3 text-gray-700'>
                               <p className='text-lg'>{currency}{item.price}</p>
                               <p>Quanitity:1</p>
                               <p>size:M</p>
                        </div>
                        <p className='mt-8'>Date:<span className='text-gray-400'>15,jan, 2025</span></p>
                      </div>
                     </div>
                     <div className='md:w-1/2 flex justify-between'>
                     <div className='flex items-center gap-3'>
                         <p className='min-w-2  h-2 rounded-full bg-green-600'></p>
                         <p className='text-sm md:text-base'>READY TO SHIP</p>
                     </div>
                     <button className='mr-10 border px-4 py-3 text-sm font-medium rounded-sm'>TRACK ORDER</button>

                     </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Orders
