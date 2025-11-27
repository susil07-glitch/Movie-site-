import React from 'react'
import Navbar from '../Navbar/Navbar'

const HomePage = () => {
  return (
    <div>
  
  <Navbar/>
  
  
  {/* Anime Grid */}
  <section className="px-6 py-12 max-w-7xl mx-auto">
    <h2 className="text-2xl font-bold mb-6 border-l-4 border-green-500 pl-3">Trending Anime</h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {/* Anime Card */}
      <div className="relative group bg-[#1c1c1c] rounded overflow-hidden shadow hover:shadow-lg transition">
        <img src="https://cdn.myanimelist.net/images/anime/10/47347.jpg" alt="Attack on Titan" className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
          <button className="bg-green-600 px-4 py-2 rounded text-sm hover:bg-green-700">Watch Now</button>
        </div>
        <div className="p-2">
          <h3 className="text-sm font-semibold truncate">Attack on Titan</h3>
          <p className="text-xs text-gray-400">24 eps • Action, Drama</p>
        </div>
        <span className="absolute top-2 left-2 bg-green-600 text-white text-xs px-2 py-1 rounded">Ep 24</span>
      </div>
      {/* Repeat with different data */}
      <div className="relative group bg-[#1c1c1c] rounded overflow-hidden shadow hover:shadow-lg transition">
        <img src="https://cdn.myanimelist.net/images/anime/5/87048.jpg" alt="My Hero Academia" className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
          <button className="bg-green-600 px-4 py-2 rounded text-sm hover:bg-green-700">Watch Now</button>
        </div>
        <div className="p-2">
          <h3 className="text-sm font-semibold truncate">My Hero Academia</h3>
          <p className="text-xs text-gray-400">13 eps • Super Power</p>
        </div>
        <span className="absolute top-2 left-2 bg-green-600 text-white text-xs px-2 py-1 rounded">Ep 13</span>
      </div>
      <div className="relative group bg-[#1c1c1c] rounded overflow-hidden shadow hover:shadow-lg transition">
        <img src="https://cdn.myanimelist.net/images/anime/4/19644.jpg" alt="Death Note" className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
          <button className="bg-green-600 px-4 py-2 rounded text-sm hover:bg-green-700">Watch Now</button>
        </div>
        <div className="p-2">
          <h3 className="text-sm font-semibold truncate">Death Note</h3>
          <p className="text-xs text-gray-400">37 eps • Thriller, Supernatural</p>
        </div>
        <span className="absolute top-2 left-2 bg-green-600 text-white text-xs px-2 py-1 rounded">Ep 37</span>
      </div>
      <div className="relative group bg-[#1c1c1c] rounded overflow-hidden shadow hover:shadow-lg transition">
        <img src="https://cdn.myanimelist.net/images/anime/11/39717.jpg" alt="Fullmetal Alchemist: Brotherhood" className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
          <button className="bg-green-600 px-4 py-2 rounded text-sm hover:bg-green-700">Watch Now</button>
        </div>
        <div className="p-2">
          <h3 className="text-sm font-semibold truncate">FMAB</h3>
          <p className="text-xs text-gray-400">64 eps • Adventure, Fantasy</p>
        </div>
        <span className="absolute top-2 left-2 bg-green-600 text-white text-xs px-2 py-1 rounded">Ep 64</span>
      </div>
      <div className="relative group bg-[#1c1c1c] rounded overflow-hidden shadow hover:shadow-lg transition">
        <img src="https://cdn.myanimelist.net/images/anime/9/9453.jpg" alt="Naruto" className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
          <button className="bg-green-600 px-4 py-2 rounded text-sm hover:bg-green-700">Watch Now</button>
        </div>
        <div className="p-2">
          <h3 className="text-sm font-semibold truncate">Naruto</h3>
          <p className="text-xs text-gray-400">220 eps • Ninja, Shounen</p>
        </div>
        <span className="absolute top-2 left-2 bg-green-600 text-white text-xs px-2 py-1 rounded">Ep 220</span>
      </div>
      <div className="relative group bg-[#1c1c1c] rounded overflow-hidden shadow hover:shadow-lg transition">
        <img src="https://cdn.myanimelist.net/images/anime/3/40451.jpg" alt="Bleach" className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
          <button className="bg-green-600 px-4 py-2 rounded text-sm hover:bg-green-700">Watch Now</button>
        </div>
        <div className="p-2">
          <h3 className="text-sm font-semibold truncate">Bleach</h3>
          <p className="text-xs text-gray-400">366 eps • Action, Soul Reaper</p>
        </div>
        <span className="absolute top-2 left-2 bg-green-600 text-white text-xs px-2 py-1 rounded">Ep 366</span>
      </div>
    </div>
  </section>
  
</div>

  )
}

export default HomePage
