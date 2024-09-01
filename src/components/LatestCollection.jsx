import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem'

const LatestCollection = () => {
         
  const{products}=useContext(ShopContext)
  const [LatestProducts,setLatestProducts]=useState([])

  useEffect(()=>{
    setLatestProducts(products.slice(0,10))
  },[])
   
  return (
    <div className='my-10 mr-10'>
      <div className='text-center py-8 text-3xl'>
        <Title text1={'LATEST'} text2={'COLLECTION'}/>
       <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
       Here are the most amazing lastest collection that came to our site.Enjoy every bit of it's Beauty</p>
      </div>
      {/* rendering products */}
      <div className='ml-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6' >
          {
            LatestProducts.map((items,index)=>(
              <ProductItem key={index} id={items._id} image={items.image} name={items.name} price={items.price}/>
            ))
          }
      </div>
    </div>
  )
}

export default LatestCollection
