import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
    <header className="bg-black/50 backdrop-blur-md border-b border-gray-800 sticky top-0 z-50">
    <div className="container mx-auto px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="text-3xl font-bold glow-text">🎬 Cinema घर</div>
          
        </div>
        <nav className="flex space-x-6">
          <Link to='/home'>
          <button className="hover:text-blue-400 transition-colors" >Home</button>
          </Link>
          <button className="hover:text-blue-400 transition-colors" >Genres</button>
          <button className="hover:text-blue-400 transition-colors" >Trending</button>
          <button className="hover:text-blue-400 transition-colors" >Awards</button>
        </nav>
      </div>
    </div>
  </header>
    </div>
  )
}

export default Navbar
