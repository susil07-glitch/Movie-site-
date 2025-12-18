import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../src/Component/Navbar/Navbar'
import PlayingZone from './PlayingZone'


const HomePage = () => {
  return (
    <div className='bg-black relative gap-2 '>
  
    <div className='sticky top-0 '>
      
    </div>
  
 
      
  {/* Anime Grid */}
  <section className="px-0.5 py-2 max-w-7xl mx-auto">
    <div className='text-white '>
        <h2 className="text-2xl font-bold mb-6 border-l-4 border-green-500 pl-3">Sci-Fic</h2>
    </div>
    <div className="grid  grid-cols sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {/* Anime Card */}
      <div className=" flex group flex-col bg-amber-950 rounded overflow-hidden shadow hover:shadow-cyan-600 hover:scale-170 transition">
        <img src="https://cdn.myanimelist.net/images/anime/10/47347.jpg" alt="Attack on Titan" className="w-full h-50 object-cover   transition-transform duration-300" />
        <div className="  flex flex-col items-center justify-center cursor-pointer opacity-0 group-hover:opacity-100 transition duration-300">
          
          <Link to='/play'>
               <button className="bg-green-600 px-4 py-2 rounded text-sm hover:bg-green-700 cursor-pointer">Watch Now</button>
          </Link>

          <div className="p-2">
          <h3 className="text-sm font-semibold truncate">Attack on Titan</h3>
          <p className="text-xs text-gray-400">24 eps • Action, Drama</p>
        </div>
        </div>
      
        <span className="top-2 left-2 bg-green-600 text-white text-xs px-2 py-0.5 rounded">Ep 24</span>
      </div>
    </div>
  </section>
   
    
  
  {/* Bollywood  */}
   <section className="px-3 py-2 max-w-7xl mx-auto">
    <div className='text-white'>
        <h2 className="text-2xl font-bold mb-6 border-l-4 border-green-500 pl-3">Bolly-Wood </h2>
    </div>
   
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {/* Anime Card */}
      <div className=" group bg-[#1c1c1c] rounded overflow-hidden shadow hover:shadow-lg transition">
        <img src="https://cdn.myanimelist.net/images/anime/10/47347.jpg" alt="Attack on Titan" className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300" />
        <div className=" inset-0 bg-black bg-opacity-50 flex items-center justify-center cursor-pointer opacity-0 group-hover:opacity-100 transition duration-300">
          
          <Link to='/play'>
               <button className="bg-green-600 px-4 py-2 rounded text-sm hover:bg-green-700 cursor-pointer">Watch Now</button>
          </Link>
        </div>
        <div className="p-2">
          <h3 className="text-sm font-semibold truncate">Attack on Titan</h3>
          <p className="text-xs text-gray-400">24 eps • Action, Drama</p>
        </div>
        <span className="absolute top-2 left-2 bg-green-600 text-white text-xs px-2 py-0.5 rounded">Ep 24</span>
      </div>
    </div>
  </section>

 

 
</div>

  )
}

export default HomePage
