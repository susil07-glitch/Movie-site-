import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import PlayingZone from './PlayingZone'

const HomePage = () => {
  return (
    <div>
  
  <Navbar/>
  
  <style dangerouslySetInnerHTML={{__html: "\n@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');\n        \n        body {\n            font-family: 'Inter', sans-serif;\n        }\n        \n        .movie-card {\n            transition: all 0.3s ease;\n            background: linear-gradient(145deg, #1f2937, #374151);\n        }\n        \n        .movie-card:hover {\n            transform: translateY(-8px) scale(1.02);\n            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);\n        }\n        \n        .genre-badge {\n            background: linear-gradient(45deg, #3b82f6, #8b5cf6);\n            animation: pulse 2s infinite;\n        }\n        \n        .hero-bg {\n            background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%);\n            position: relative;\n            overflow: hidden;\n        }\n        \n        .hero-bg::before {\n            content: '';\n            position: absolute;\n            top: 0;\n            left: 0;\n            right: 0;\n            bottom: 0;\n            background: url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"><defs><pattern id=\"grain\" width=\"100\" height=\"100\" patternUnits=\"userSpaceOnUse\"><circle cx=\"25\" cy=\"25\" r=\"1\" fill=\"%23ffffff\" opacity=\"0.05\"/><circle cx=\"75\" cy=\"75\" r=\"1\" fill=\"%23ffffff\" opacity=\"0.03\"/><circle cx=\"50\" cy=\"10\" r=\"0.5\" fill=\"%23ffffff\" opacity=\"0.08\"/></pattern></defs><rect width=\"100\" height=\"100\" fill=\"url(%23grain)\"/></svg>');\n            pointer-events: none;\n        }\n        \n        .floating-animation {\n            animation: float 6s ease-in-out infinite;\n        }\n        \n        @keyframes float {\n            0%, 100% { transform: translateY(0px); }\n            50% { transform: translateY(-20px); }\n        }\n        \n        .spotlight {\n            background: radial-gradient(circle at center, rgba(59, 130, 246, 0.3) 0%, transparent 70%);\n            position: absolute;\n            width: 400px;\n            height: 400px;\n            border-radius: 50%;\n            pointer-events: none;\n            animation: spotlight 8s linear infinite;\n        }\n        \n        @keyframes spotlight {\n            0% { transform: translate(-50%, -50%) rotate(0deg); }\n            100% { transform: translate(-50%, -50%) rotate(360deg); }\n        }\n        \n        .film-strip {\n            background: repeating-linear-gradient(\n                90deg,\n                #374151 0px,\n                #374151 20px,\n                #1f2937 20px,\n                #1f2937 40px\n            );\n            height: 8px;\n        }\n        \n        .glow-text {\n            text-shadow: 0 0 20px rgba(59, 130, 246, 0.5);\n        }\n        \n        .rating-stars {\n            background: linear-gradient(45deg, #fbbf24, #f59e0b);\n            -webkit-background-clip: text;\n            -webkit-text-fill-color: transparent;\n            background-clip: text;\n        }\n    " }} />
  
  {/* Anime Grid */}
  <section className="px-3 py-2 max-w-7xl mx-auto">
    <div className='bg-blue-300'>
        <h2 className="text-2xl font-bold mb-6 border-l-4 border-green-500 pl-3">Sci-Fic</h2>
    </div>
   
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {/* Anime Card */}
      <div className="relative group bg-[#1c1c1c] rounded overflow-hidden shadow hover:shadow-lg transition">
        <img src="https://cdn.myanimelist.net/images/anime/10/47347.jpg" alt="Attack on Titan" className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center cursor-pointer opacity-0 group-hover:opacity-100 transition duration-300">
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
  
  {/* Bollywood  */}
   <section className="px-3 py-2 max-w-7xl mx-auto">
    <div className='bg-blue-300'>
        <h2 className="text-2xl font-bold mb-6 border-l-4 border-green-500 pl-3">Bolly-Wood </h2>
    </div>
   
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {/* Anime Card */}
      <div className="relative group bg-[#1c1c1c] rounded overflow-hidden shadow hover:shadow-lg transition">
        <img src="https://cdn.myanimelist.net/images/anime/10/47347.jpg" alt="Attack on Titan" className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center cursor-pointer opacity-0 group-hover:opacity-100 transition duration-300">
          
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
