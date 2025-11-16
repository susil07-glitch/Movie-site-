import React from 'react'
import Navbar from '../Component/Pages/Navbar'

const Layout = ({children}) => {
  return (
    <div>
      <Navbar/>
      {children}
      

      
      
    </div>
  )
}

export default Layout
