import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import RelatedProducts from '../components/RelatedProducts'

const Product = () => {
   
  const {productId}=useParams()  
  const{products,currency,addtoCart}=useContext(ShopContext)
  const[productData,setProductData]=useState(false)
  const[image,setImage]=useState('')
  const[size,setSize]=useState('')

  const fetchProductData=async()=>{

    products.map((item)=>{
      if (item._id === productId) {
        setProductData(item)
       
       setImage(item.image[0])
       
       
        return null;
        
      }
    })

  }
  useEffect(()=>{
          fetchProductData();
  },[productId,products])
  
  return  productData?(
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100 ml-10'>
      {/*................... productdata */}
      <div className='flex gap-12 flex-col sm:flex-row'>
        {/*............... productimages */}
          <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
            <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
                {
                  productData.image.map((item,index)=>(
                    <img onClick={()=>setImage(item)} src={item} key={index} alt="" className='w-24% sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer '/>
                  ))
                }
            </div>
            <div className='w-full sm:w-[80%] mr-10'>
                  <img  className='w-full h-auto mr-11' src={image} alt="" />
            </div>
          </div>
          {/* ...........productinfo */}
          <div className='flex-1'>
            <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
            <div className='flex items-center gap-1 mt-2 size-4'>
                     <img src={assets.star_icon} alt="" />
                     <img src={assets.star_icon} alt="" />
                     <img src={assets.star_icon} alt="" />
                     <img src={assets.star_icon} alt="" />
                     <img src={assets.star_dull_icon}alt="" />
                     <p className='pl-2'>
                      (122)
                     </p>
            </div>
             <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
             <p className='mt-5 text-gray-700 md:w-4/5'>{productData.description}</p>
             <div className='flex flex-col gap-4 my-8'>
              <p>Select Size</p>
              <div className='flex  gap-2'>
                {productData.sizes.map((item,index)=>(
                  <button  onClick={()=>setSize(item)} className={`border py-4 px-4 bg-gray-200 text-sm ${item===size?'border-orange-500':''}`} key={index}>{item}</button>
                ))}

              </div>
             </div>
             <button onClick={()=>addtoCart(productData._id,size)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>ADD TO CART</button>
             <hr className='mt-8 sm:w-4/5'/>
             <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
                     <p>100% Orginal Product</p>
                     <p>Cash On Delivery is available </p>
                     <p>Easy Return ans Exchange Policy</p>
             </div>
          </div>

      </div>
      {/* desciption and review section */}
      <div className='mt-20'>
         <div className='flex'>
              <b className='border px-5 py-3 text-sm'>Description</b>
              <p  className='border px-5 py-3 text-sm'>Reviews (122)</p>
         </div>
         <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
          <p>e commerce is an online platform for a great viewership of the products on the online facilities and make is more and more simple and great for anyone to view and see from snywhere in the world and any olace in the world</p>
           <p>This is not just as usual or great platform for any one to be participate in the world,e commerce is an online platform for a great viewership of the products on the online facilities and make is more and more simple and great for anyone to view and see from snywhere in the world and any olace in the world.And </p>
         </div>
      </div>
      {/* .............DISPLAY related products....... */}
      <RelatedProducts category={productData.category} subCategory={productData.subCategory}/> 
    </div>
  ):<div className='opacity-0'></div>
}

export default Product
