import React from 'react'

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
          <button className="hover:text-blue-400 transition-colors" onclick="showSection('home')">Home</button>
          <button className="hover:text-blue-400 transition-colors" onclick="showSection('genres')">Genres</button>
          <button className="hover:text-blue-400 transition-colors" onclick="showSection('trending')">Trending</button>
          <button className="hover:text-blue-400 transition-colors" onclick="showSection('awards')">Awards</button>
        </nav>
      </div>
    </div>
  </header>
    </div>
  )
}

export default Navbar
