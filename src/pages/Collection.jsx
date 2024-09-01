import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const Collection = () => {
  
   const{products,search,showSearch}=useContext(ShopContext);
   const[showFilter,setShowFilter]=useState(false)
   const[filterProducts,setFilterProducts]=useState([])
   const[category,setCategory]=useState([])
   const[subCategory,setSubCategory]=useState([])
  const[sortType,setSortType]=useState('relavant')

   const toggleCategory = (e) =>{
    if(category.includes(e.target.value)){
      setCategory(prev=>prev.filter(item=>item!==e.target.value))
    }
    else{
      setCategory(prev=>[...prev,e.target.value])
    }
   }

   const toggleSubCategory=(e)=>{
    if (subCategory.includes(e.target.value)) {
      setSubCategory(prev=>prev.filter(item=>item!==e.target.value))   
    }else{
      setSubCategory(prev=>[...prev,e.target.value])
    }
   }
   const applyFilter=()=>{

    let productsopy=products.slice();


    if (showSearch &&  search) {
      productsopy=productsopy.filter(item=>item.name.toLowerCase().includes(search.toLowerCase()))
    }
   
    if (category.length>0) {
      productsopy=productsopy.filter(item=>category.includes(item.category))
    }
    
    if (subCategory.length>0) {
      productsopy=productsopy.filter(item=>subCategory.includes(item.subCategory))
    }
    setFilterProducts(productsopy)
   }
 const sortProduct=()=>{
  let fpCopy=filterProducts.slice()
  switch (sortType){
    case 'low-high':
    setFilterProducts(fpCopy.sort((a,b)=>(a.price-b.price)))
    break;
    case 'high-low':
      setFilterProducts(fpCopy.sort((a,b)=>(b.price - a.price)))
      break;


      default:
        applyFilter();
        break;

  }
 }

  useEffect(()=>{
       applyFilter()
  },[category,subCategory,search,showSearch])

  useEffect(()=>{
      sortProduct();
  },[sortType])


  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10  border-t ml-10'>
      {/* filter Options */}
      
      <div className='min-w-60'>
        <p onClick={()=>setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2 ml-10'>FILTERS</p> 
        <img className={` ml-10 h-3 sm:hidden ${showFilter?'rotate-90':''}`} src={assets.dropdown_icon} alt="" />
        {/* category filter */}
        <div className={`ml-10 mr-10 border border-gray-300 pl-5 py-3 mt-6 my-5 ${showFilter ?'':'hidden'} sm:block`}>
            <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
            <div className='flex flex-col gap-2 text-ssm font-light text-gray-700'>
           <p className='flex gap-2'>
            <input className='w-3' type="checkbox" name="" id="" value={'Men'} onChange={toggleCategory}/>Men
           </p>
           <p className='flex gap-2'>
            <input className='w-3' type="checkbox" name="" id="" value={'Women'} onChange={toggleCategory}/>Women
           </p>
           <p className='flex gap-2'>
            <input className='w-3' type="checkbox" name="" id="" value={'Kids'} onChange={toggleCategory} />kids
           </p>
            </div>
        </div>
             {/* subcategory filter */}
             <div className={`ml-10 mr-10 border border-gray-300 pl-5 py-3 mt-6 ${showFilter ?'':'hidden'} sm:block`}>
            <p className='mb-3 text-sm font-medium'>TYPE</p>
            <div className='flex flex-col gap-2 text-ssm font-light text-gray-700'>
           <p className='flex gap-2'>
            <input className='w-3' type="checkbox" name="" id="" value={'Topwear'} onChange={toggleSubCategory} />TOPWEAR
           </p>
           <p className='flex gap-2'>
            <input className='w-3' type="checkbox" name="" id="" value={'Bottomwear'}  onChange={toggleSubCategory} />BOTTOMWEAR
           </p>
           <p className='flex gap-2'>
            <input className='w-3' type="checkbox" name="" id="" value={'Winterwear'}  onChange={toggleSubCategory} />WINTERWEAR
           </p>
            </div>
        </div>
      </div>
      {/* rightside */}
      <div className='flex-1'>
        <div className='ml-10 flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={'ALL'} text2={'COLLECTIONS'}/>
          {/* PRODUCT SORT */}
          <select onChange={(e)=>setSortType(e.target.value)} className=' mr-10 border-2 border-gray-300 text-sm px-2'>
            <option value="relavent">Sort BY:Relavent</option>
            <option value="low-high">Sort By:Low to High</option>
            <option value="high-low">Sort By:High to Low</option>
          </select>
        </div>
        {/* mapp products */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6 mr-10'>
          {
            filterProducts.map((items,index)=>(
              <ProductItem key={index} name={items.name} id={items._id} price={items.price} image={items.image}/>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Collection
