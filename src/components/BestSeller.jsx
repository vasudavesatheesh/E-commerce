import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useSearchParams } from 'react-router-dom'
import Title from './Title'
import ProductItem from './ProductItem'

const BestSeller = () => {
  const{products}=useContext(ShopContext)
  const[Bestseller,setBestSeller]=useState([])

  useEffect(()=>{
    const bestProducts=products.filter((item)=>(item.bestseller))
    setBestSeller(bestProducts.slice(0,5))
  },[])
  return (
    <div className='my-10 mr-10'>
      <div className='text-center text-3xl py-8 '>
            <Title text1={'BEST'} text2={'SELLERS'}/>
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
            Here are the greatest selling products of our site ever came up to</p>
      </div >
      <div className='ml-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {
          Bestseller.map((item,index)=>(
            <ProductItem key={index} id={item._id} name={item.name} image={item.image} price={item.price}/>
          ))
        }

      </div>
      
    </div>
  )
}

export default BestSeller