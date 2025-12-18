import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoadingPage from './Component/LoadingPage/LoadingPage'
import HomePage from '../Pages/HomePage'
import SignIn from '../Pages/SignIn'
import Login from '../Pages/Login'
import ProfilePage from '../Pages/ProfilePage'
import Signup from '../Pages/Signup'



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

    
    
   
   </Routes>
  </BrowserRouter>
  )
}

export default App
