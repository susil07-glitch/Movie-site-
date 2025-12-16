import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoadingPage from './Component/LoadingPage/LoadingPage'
import HomePage from '../Pages/HomePage'
// import Poster from './Component/Poster/Poster'


const App = () => {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/'element={<LoadingPage/>}></Route>
    <Route path='/home'element={<HomePage/>}></Route>
    {/* <Route path='/poster'element={<Poster/>}></Route> */}
   </Routes>
  </BrowserRouter>
  )
}

export default App
