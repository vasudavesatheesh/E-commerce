import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { useNavigate } from "react-router-dom";



 export const ShopContext=createContext();


 const ShopContextProvider=(props)=>{
          
     const currency='$';
     const delivery_fee=10;
     const [search,setSearch]=useState('')
     const[showSearch,setShowSearch]=useState(false)
     const[cartItems,setCartItems]=useState({})
    const navigate=useNavigate() 
     const addtoCart=async(itemId,size)=>{
                 
             let cartData=structuredClone(cartItems)
             if (cartData[itemId]) {
              if (cartData[itemId][size]) {
                cartData[itemId][size]+=1
                
              }
              else {
                cartData[itemId][size]=1
              }
             }
             else{
              cartData[itemId]={}
              cartData[itemId][size]=1;
             }
             setCartItems(cartData)
     }
const getCartCount=()=>{
  let TotalCount=0;
  for(const items in cartItems){
    for(const item in cartItems[items]){
      try {
             if (cartItems[items][item]>0) {
              TotalCount += cartItems[items][item]
             }
      } catch (error) {
        
      }
    }
  }
  return TotalCount;
}

 const updateQuantity=async(itemId,size,quantity)=>{
       let Cartdata=structuredClone(cartItems)
       Cartdata[itemId][size]=quantity;
           setCartItems(Cartdata)
 }
 const getCartAmount=()=>{
  let totalAmount=0
  for(const items in cartItems){
    let iteminfo=products.find((product)=>product._id===items);
    for(const item in cartItems[items]){
      try {
          if (cartItems[items][item]>0) {
            totalAmount += iteminfo.price * cartItems[items][item]
          }
      } catch (error) {
        
      }
    }

  }
  return totalAmount;
 }
     const value={
                products,currency,delivery_fee,search,setSearch,showSearch,setShowSearch,cartItems,addtoCart
                ,getCartCount,updateQuantity,getCartAmount,navigate
     }
     return(
      <ShopContext.Provider value={value}>
        {props.children}
      </ShopContext.Provider>
     )
 }
 export  default ShopContextProvider