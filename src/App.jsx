import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Collection from './pages/Collection'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Login from './pages/Login'
import Placeorder from './pages/Placeorder'
import Orders from './pages/Orders'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'


const App = () => {
  return (
    <div className='main'>
      <Navbar/>
      <SearchBar/>
      <Routes>
         <Route path='/' element={<Home/>}></Route>
         <Route path='/collection' element={<Collection/>} ></Route>
         <Route path='/about' element={<About/>}></Route>
         <Route path='/contact' element={<Contact/>}></Route>
         <Route path='/product/:productId' element={<Product/>}/>
         <Route path='/cart' element={<Cart/>}></Route>
         <Route path='/login' element={<Login/>}></Route>
         <Route path='/placeorder' element={<Placeorder/>}></Route>
         <Route path='/orders' element={<Orders/>}></Route>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
