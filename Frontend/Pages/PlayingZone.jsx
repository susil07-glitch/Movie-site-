import React from 'react'
import Navbar from '../src/Component/Navbar/Navbar'
import Footter from '../src/Component/Footer/Footter'

const PlayingZone = () => {
  return (
   <div>
    <Navbar/>
  
  <style dangerouslySetInnerHTML={{__html: "\n    /* Custom scrollbar for episode list */\n    .scrollbar-thin::-webkit-scrollbar {\n      height: 6px;\n      width: 6px;\n    }\n    .scrollbar-thin::-webkit-scrollbar-thumb {\n      background-color: #7c3aed; /* green */\n      border-radius: 3px;\n    }\n  " }} />
  
  {/* Side Menu */}
  <aside id="side-menu" className="fixed top-0 left-0 h-full w-64 bg-[#1c1c1c] z-50 p-6 transform -translate-x-full transition-transform duration-300 md:hidden">
    <button id="close-btn" className="text-white text-2xl mb-6">×</button>
    <nav className="space-y-4 text-lg">
      <a href="#" className="block text-white hover:text-green-500">Home</a>
      <a href="#" className="block text-white hover:text-green-500">Trending</a>
      <a href="#" className="block text-white hover:text-green-500">Genres</a>
      <a href="#" className="block text-white hover:text-green-500">Movies</a>
      <a href="#" className="block text-white hover:text-green-500">Login</a>
    </nav>
  </aside>
  {/* Main Content */}
  <main className="flex-grow max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
    {/* Video Player + Controls */}
    <section className="md:col-span-2 space-y-4">
      <div className="w-full aspect-video bg-black rounded overflow-hidden shadow-lg">
        <video id="video-player" className="w-full h-full bg-black" controls preload="metadata" poster="https://cdn.myanimelist.net/images/anime/10/47347.jpg">
          <source src="https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="flex justify-between items-center text-gray-400 text-sm font-semibold">
        <button id="prev-ep" className="px-3 py-1 rounded bg-green-700 hover:bg-green-800 disabled:opacity-50" disabled>Previous Episode</button>
        <span id="episode-info" className="text-green-400">Episode 1 - Attack on Titan</span>
        <button id="next-ep" className="px-3 py-1 rounded bg-green-700 hover:bg-green-800">Next Episode</button>
      </div>
      <p className="text-gray-300 leading-relaxed">
        Eren lives in a world where enormous walls protect humanity from man-eating giants known as Titans. But when a colossal Titan breaks the wall, everything changes.
      </p>
      {/* Episode List */}
      <div className="overflow-x-auto scrollbar-thin">
        <ul id="episode-list" className="flex space-x-4 py-2 text-sm text-gray-400">
          {/* Episodes inserted by JS */}
        </ul>
      </div>
    </section>
    {/* Sidebar: Trending Anime */}
    <aside>
      <h2 className="text-2xl font-bold mb-6 border-l-4 border-green-500 pl-3">Trending Anime</h2>
      <div className="grid grid-cols-2 sm:grid-cols-1 gap-4">
        <div className="relative group bg-[#1c1c1c] rounded overflow-hidden shadow hover:shadow-lg transition cursor-pointer" onclick="loadAnime('Attack on Titan', 1, 'https://cdn.myanimelist.net/images/anime/10/47347.jpg', 'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', 'Eren lives in a world where enormous walls protect humanity from man-eating giants known as Titans. But when a colossal Titan breaks the wall, everything changes.')">
          <img src="https://cdn.myanimelist.net/images/anime/10/47347.jpg" alt="Attack on Titan" className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300" />
          <div className="p-2">
            <h3 className="text-sm font-semibold truncate">Attack on Titan</h3>
            <p className="text-xs text-gray-400">24 eps • Action, Drama</p>
          </div>
          <span className="absolute top-2 left-2 bg-green-600 text-white text-xs px-2 py-1 rounded">Ep 24</span>
        </div>
        <div className="relative group bg-[#1c1c1c] rounded overflow-hidden shadow hover:shadow-lg transition cursor-pointer" onclick="loadAnime('My Hero Academia', 1, 'https://cdn.myanimelist.net/images/anime/5/87048.jpg', 'https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4', 'A story about heroes with superpowers in a modern world.')">
          <img src="https://cdn.myanimelist.net/images/anime/5/87048.jpg" alt="My Hero Academia" className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300" />
          <div className="p-2">
            <h3 className="text-sm font-semibold truncate">My Hero Academia</h3>
            <p className="text-xs text-gray-400">13 eps • Super Power</p>
          </div>
          <span className="absolute top-2 left-2 bg-green-600 text-white text-xs px-2 py-1 rounded">Ep 13</span>
        </div>
        <div className="relative group bg-[#1c1c1c] rounded overflow-hidden shadow hover:shadow-lg transition cursor-pointer" onclick="loadAnime('Death Note', 1, 'https://cdn.myanimelist.net/images/anime/4/19644.jpg', 'https://storage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4', 'A high schooler finds a notebook that can kill anyone whose name is written in it.')">
          <img src="https://cdn.myanimelist.net/images/anime/4/19644.jpg" alt="Death Note" className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300" />
          <div className="p-2">
            <h3 className="text-sm font-semibold truncate">Death Note</h3>
            <p className="text-xs text-gray-400">37 eps • Thriller, Supernatural</p>
          </div>
          <span className="absolute top-2 left-2 bg-green-600 text-white text-xs px-2 py-1 rounded">Ep 37</span>
        </div>
      </div>
    </aside>
  </main>
  <Footter/>
 </div>
  

  )
}

export default PlayingZone
