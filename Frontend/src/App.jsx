import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoadingPage from './Component/LoadingPage/LoadingPage'
import HomePage from './Pages/HomePage'
import SignIn from './Pages/SignIn'
import Login from './Pages/Login'
import ProfilePage from './Pages/ProfilePage'
import Signup from './Pages/Signup'
import Banner from './Component/Banner/Banner'
import Loading from './Component/Loading/Loading'



const App = () => {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/'element={<LoadingPage/>}></Route>
    <Route path='/home'element={<HomePage/>}></Route>
    <Route path='/Signin'element={<SignIn/>}></Route>
    <Route path='/Signup'element={<Signup/>}></Route>
    <Route path='/login'element={<Login/>}></Route>
     <Route path='/Profile'element={<ProfilePage/>}></Route>
      <Route path='/banner'element={<Banner/>}></Route>
      <Route path='/loader'element={<Loading/>}></Route>

    
    
   
   </Routes>
  </BrowserRouter>
  )
}

export default App
