import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Component/Pages/Navbar'
import Home from './Component/Pages/Home'

const App = () => {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/'element={<Home/>}></Route>
   </Routes>
  </BrowserRouter>
  )
}

export default App
