import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
    <header className=" bg-black/95  backdrop-blur-md border-b border-gray-800  z-10">
    <div className="container mx-auto px-3  py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center mx-1">
          <div className="text-3xl text-red-600 font-bold glow-text">🎬 Cinema घर</div>
          
        </div>
        <nav className="flex  text-red-600 space-x-6">
          <Link to='/home'>
          <button className="hover:text-blue-400 hover:cursor-pointer transition-colors" >Home</button>
          </Link>
          <button className="hover:text-blue-400  hover:cursor-pointer  transition-colors" >Tv Series </button>
          <button className="hover:text-blue-400  hover:cursor-pointer transition-colors" >Movies</button>
          <button className="hover:text-blue-400  hover:cursor-pointer transition-colors" > Trending </button>
        </nav>
      </div>
    </div>
  </header>
    </div>
  )
}

export default Navbar
