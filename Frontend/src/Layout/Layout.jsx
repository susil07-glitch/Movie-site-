import React from 'react'
import Navbar from '../../Pages/Navbar'
import Footter from '../Component/Footer/Footter'

const Layout = ({children}) => {
  return (
    <>
      <Navbar/>
      {children}
      <Footter/>

      
      
    </>
  )
}

export default Layout
