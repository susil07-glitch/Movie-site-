import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoadingPage from './Component/LoadingPage/LoadingPage'
import HomePage from './Component/Pages/HomePage'

const App = () => {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/'element={<LoadingPage/>}></Route>
    <Route path='/home'element={<HomePage/>}></Route>
   </Routes>
  </BrowserRouter>
  )
}

export default App
