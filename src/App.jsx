import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from "./pages/Home";
import Hotels from "./pages/Hotels";
import HotelDetails from "./pages/HotelDetails";
import Wishlist from "./pages/Wishlist";
import Contact from "./pages/Contact";
const App = () => {
  return (
   
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/hotels' element={<Hotels />} />
      <Route path='/hotel/:id' element={<HotelDetails />} />
      <Route path='/wishlist' element={<Wishlist />} />
      <Route path='/contact' element={<Contact />} />

      </Routes>
   
    
  )
}

export default App
