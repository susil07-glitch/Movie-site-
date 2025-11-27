import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoadingPage from './Component/LoadingPage/LoadingPage'
import HomePage from './Component/Pages/HomePage'
import PlayingZone from './Component/Pages/PlayingZone'

const App = () => {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/'element={<LoadingPage/>}></Route>
    <Route path='/home'element={<HomePage/>}></Route>
    <Route path='/play'element={<PlayingZone/>}></Route>
   </Routes>
  </BrowserRouter>
  )
}

export default App
