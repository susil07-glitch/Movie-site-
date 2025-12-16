import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footter from '../Footer/Footter'
import { useNavigate } from 'react-router-dom'
import HomePage from '../../../Pages/HomePage'
import NavbarWithoutUser from '../Navbar/Navbar'

const LoadingPage = () => {
  
  return (
    <div>
  <NavbarWithoutUser/>
  <style dangerouslySetInnerHTML={{__html: "\n@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');\n        \n        body {\n            font-family: 'Inter', sans-serif;\n        }\n        \n        .movie-card {\n            transition: all 0.3s ease;\n            background: linear-gradient(145deg, #1f2937, #374151);\n        }\n        \n        .movie-card:hover {\n            transform: translateY(-8px) scale(1.02);\n            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);\n        }\n        \n        .genre-badge {\n            background: linear-gradient(45deg, #3b82f6, #8b5cf6);\n            animation: pulse 2s infinite;\n        }\n        \n        .hero-bg {\n            background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%);\n            position: relative;\n            overflow: hidden;\n        }\n        \n        .hero-bg::before {\n            content: '';\n            position: absolute;\n            top: 0;\n            left: 0;\n            right: 0;\n            bottom: 0;\n            background: url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"><defs><pattern id=\"grain\" width=\"100\" height=\"100\" patternUnits=\"userSpaceOnUse\"><circle cx=\"25\" cy=\"25\" r=\"1\" fill=\"%23ffffff\" opacity=\"0.05\"/><circle cx=\"75\" cy=\"75\" r=\"1\" fill=\"%23ffffff\" opacity=\"0.03\"/><circle cx=\"50\" cy=\"10\" r=\"0.5\" fill=\"%23ffffff\" opacity=\"0.08\"/></pattern></defs><rect width=\"100\" height=\"100\" fill=\"url(%23grain)\"/></svg>');\n            pointer-events: none;\n        }\n        \n        .floating-animation {\n            animation: float 6s ease-in-out infinite;\n        }\n        \n        @keyframes float {\n            0%, 100% { transform: translateY(0px); }\n            50% { transform: translateY(-20px); }\n        }\n        \n        .spotlight {\n            background: radial-gradient(circle at center, rgba(59, 130, 246, 0.3) 0%, transparent 70%);\n            position: absolute;\n            width: 400px;\n            height: 400px;\n            border-radius: 50%;\n            pointer-events: none;\n            animation: spotlight 8s linear infinite;\n        }\n        \n        @keyframes spotlight {\n            0% { transform: translate(-50%, -50%) rotate(0deg); }\n            100% { transform: translate(-50%, -50%) rotate(360deg); }\n        }\n        \n        .film-strip {\n            background: repeating-linear-gradient(\n                90deg,\n                #374151 0px,\n                #374151 20px,\n                #1f2937 20px,\n                #1f2937 40px\n            );\n            height: 8px;\n        }\n        \n        .glow-text {\n            text-shadow: 0 0 20px rgba(59, 130, 246, 0.5);\n        }\n        \n        .rating-stars {\n            background: linear-gradient(45deg, #fbbf24, #f59e0b);\n            -webkit-background-clip: text;\n            -webkit-text-fill-color: transparent;\n            background-clip: text;\n        }\n    " }} />
  
  
  {/* Hero Section */}
  <section id="home" className="hero-bg min-h-screen flex items-center justify-center relative">
    <div className="spotlight top-1/4 left-1/4" />
    <div className="spotlight top-3/4 right-1/4" style={{animationDelay: '-4s'}} />
    <div className="text-center z-10 max-w-4xl mx-auto px-6">
      <h1 className="text-7xl font-bold mb-6 glow-text floating-animation">
        Welcome to Cinema घर
      </h1>
      <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
        Discover the magic of movies - from Hollywood blockbusters to indie masterpieces, 
        explore the world of cinema like never before.
      </p>
      <div className="flex flex-wrap justify-center gap-4" >
        <Link to='/home'>
        <button className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 rounded-full font-semibold hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-blue-500/25 cursor-pointer" >
          Explore Genres
        </button>
        </Link>
        
        <button className="border-2 border-white/30 px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300" onclick="showSection('trending')">
          What's Trending
        </button>
      </div>
    </div>
    {/* Floating Elements */}
    <div className="absolute top-20 left-10 text-6xl floating-animation" style={{animationDelay: '-1s'}}>🎭</div>
    <div className="absolute bottom-20 right-10 text-7xl floating-animation" style={{animationDelay: '-3s'}}>🍿</div>
    <div className="absolute top-1/2 left-5 text-3xl floating-animation" style={{animationDelay: '-2s'}}>🎪</div>
  </section>
  {/* Genres Section */}
  <section id="genres" className="py-20 bg-gray-800/50 hidden">
    <div className="container mx-auto px-6">
      <h2 className="text-5xl font-bold text-center mb-16 glow-text">Movie Genres</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <div className="genre-card bg-gradient-to-br from-red-600 to-red-800 p-6 rounded-xl hover:scale-105 transition-transform cursor-pointer" onclick="showGenreMovies('Action')">
          <div className="text-4xl mb-4">💥</div>
          <h3 className="text-2xl font-bold mb-2">Action</h3>
          <p className="text-red-100">High-octane thrills and explosive adventures</p>
        </div>
        <div className="genre-card bg-gradient-to-br from-yellow-600 to-yellow-800 p-6 rounded-xl hover:scale-105 transition-transform cursor-pointer" onclick="showGenreMovies('Comedy')">
          <div className="text-4xl mb-4">😂</div>
          <h3 className="text-2xl font-bold mb-2">Comedy</h3>
          <p className="text-yellow-100">Laughter and feel-good moments</p>
        </div>
        <div className="genre-card bg-gradient-to-br from-blue-600 to-blue-800 p-6 rounded-xl hover:scale-105 transition-transform cursor-pointer" onclick="showGenreMovies('Drama')">
          <div className="text-4xl mb-4">🎭</div>
          <h3 className="text-2xl font-bold mb-2">Drama</h3>
          <p className="text-blue-100">Emotional storytelling and character depth</p>
        </div>
        <div className="genre-card bg-gradient-to-br from-purple-600 to-purple-800 p-6 rounded-xl hover:scale-105 transition-transform cursor-pointer" onclick="showGenreMovies('Sci-Fi')">
          <div className="text-4xl mb-4">🚀</div>
          <h3 className="text-2xl font-bold mb-2">Sci-Fi</h3>
          <p className="text-purple-100">Future worlds and technological wonders</p>
        </div>
        <div className="genre-card bg-gradient-to-br from-green-600 to-green-800 p-6 rounded-xl hover:scale-105 transition-transform cursor-pointer" onclick="showGenreMovies('Horror')">
          <div className="text-4xl mb-4">👻</div>
          <h3 className="text-2xl font-bold mb-2">Horror</h3>
          <p className="text-green-100">Spine-chilling scares and supernatural tales</p>
        </div>
        <div className="genre-card bg-gradient-to-br from-pink-600 to-pink-800 p-6 rounded-xl hover:scale-105 transition-transform cursor-pointer" onclick="showGenreMovies('Romance')">
          <div className="text-4xl mb-4">💕</div>
          <h3 className="text-2xl font-bold mb-2">Romance</h3>
          <p className="text-pink-100">Love stories that touch the heart</p>
        </div>
        <div className="genre-card bg-gradient-to-br from-indigo-600 to-indigo-800 p-6 rounded-xl hover:scale-105 transition-transform cursor-pointer" onclick="showGenreMovies('Animation')">
          <div className="text-4xl mb-4">🎨</div>
          <h3 className="text-2xl font-bold mb-2">Animation</h3>
          <p className="text-indigo-100">Artistic storytelling through animation</p>
        </div>
        <div className="genre-card bg-gradient-to-br from-gray-600 to-gray-800 p-6 rounded-xl hover:scale-105 transition-transform cursor-pointer" onclick="showGenreMovies('Documentary')">
          <div className="text-4xl mb-4">📽️</div>
          <h3 className="text-2xl font-bold mb-2">Documentary</h3>
          <p className="text-gray-100">Real stories and factual narratives</p>
        </div>
      </div>
    </div>
  </section>
  {/* Trending Movies Section */}
  <section id="trending" className="py-20 bg-gray-900 hidden">
    <div className="container mx-auto px-6">
      <h2 className="text-5xl font-bold text-center mb-16 glow-text">Trending Now</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="movie-card rounded-xl p-6 hover:shadow-2xl transition-all duration-300">
          <div className="bg-gradient-to-br from-blue-500 to-purple-600 h-64 rounded-lg mb-4 flex items-center justify-center text-6xl">🦸‍♂️</div>
          <h3 className="text-2xl font-bold mb-2">Superhero Epic</h3>
          <div className="flex items-center mb-2">
            <span className="rating-stars text-lg">★★★★★</span>
            <span className="ml-2 text-gray-400">9.2/10</span>
          </div>
          <p className="text-gray-300 mb-4">A groundbreaking superhero adventure that redefines the genre.</p>
          <div className="flex flex-wrap gap-2">
            <span className="genre-badge text-xs px-3 py-1 rounded-full">Action</span>
            <span className="genre-badge text-xs px-3 py-1 rounded-full">Adventure</span>
          </div>
        </div>
        <div className="movie-card rounded-xl p-6 hover:shadow-2xl transition-all duration-300">
          <div className="bg-gradient-to-br from-green-500 to-teal-600 h-64 rounded-lg mb-4 flex items-center justify-center text-6xl">🌌</div>
          <h3 className="text-2xl font-bold mb-2">Cosmic Journey</h3>
          <div className="flex items-center mb-2">
            <span className="rating-stars text-lg">★★★★☆</span>
            <span className="ml-2 text-gray-400">8.7/10</span>
          </div>
          <p className="text-gray-300 mb-4">An interstellar adventure that explores the vastness of space.</p>
          <div className="flex flex-wrap gap-2">
            <span className="genre-badge text-xs px-3 py-1 rounded-full">Sci-Fi</span>
            <span className="genre-badge text-xs px-3 py-1 rounded-full">Drama</span>
          </div>
        </div>
        <div className="movie-card rounded-xl p-6 hover:shadow-2xl transition-all duration-300">
          <div className="bg-gradient-to-br from-red-500 to-orange-600 h-64 rounded-lg mb-4 flex items-center justify-center text-6xl">🎭</div>
          <h3 className="text-2xl font-bold mb-2">The Artist's Tale</h3>
          <div className="flex items-center mb-2">
            <span className="rating-stars text-lg">★★★★★</span>
            <span className="ml-2 text-gray-400">9.5/10</span>
          </div>
          <p className="text-gray-300 mb-4">A deeply moving drama about passion, sacrifice, and art.</p>
          <div className="flex flex-wrap gap-2">
            <span className="genre-badge text-xs px-3 py-1 rounded-full">Drama</span>
            <span className="genre-badge text-xs px-3 py-1 rounded-full">Biography</span>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Awards Section */}
  <section id="awards" className="py-20 bg-gradient-to-br from-yellow-900/20 to-yellow-800/20 hidden">
    <div className="container mx-auto px-6">
      <h2 className="text-5xl font-bold text-center mb-16 glow-text">Award Winners</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="text-center">
          <div className="text-8xl mb-6">🏆</div>
          <h3 className="text-3xl font-bold mb-4 text-yellow-400">Best Picture Winners</h3>
          <div className="space-y-4">
            <div className="bg-black/30 p-4 rounded-lg">
              <h4 className="text-xl font-semibold">2024: Oppenheimer</h4>
              <p className="text-gray-300">Christopher Nolan's biographical thriller</p>
            </div>
            <div className="bg-black/30 p-4 rounded-lg">
              <h4 className="text-xl font-semibold">2023: Everything Everywhere All at Once</h4>
              <p className="text-gray-300">Mind-bending multiverse adventure</p>
            </div>
            <div className="bg-black/30 p-4 rounded-lg">
              <h4 className="text-xl font-semibold">2022: CODA</h4>
              <p className="text-gray-300">Coming-of-age deaf family drama</p>
            </div>
          </div>
        </div>
        <div className="text-center">
          <div className="text-8xl mb-6">🎭</div>
          <h3 className="text-3xl font-bold mb-4 text-yellow-400">International Recognition</h3>
          <div className="space-y-4">
            <div className="bg-black/30 p-4 rounded-lg">
              <h4 className="text-xl font-semibold">Palme d'Or 2024</h4>
              <p className="text-gray-300">Cannes Film Festival's highest honor</p>
            </div>
            <div className="bg-black/30 p-4 rounded-lg">
              <h4 className="text-xl font-semibold">BAFTA Winners</h4>
              <p className="text-gray-300">British Academy's finest selections</p>
            </div>
            <div className="bg-black/30 p-4 rounded-lg">
              <h4 className="text-xl font-semibold">Golden Globe Champions</h4>
              <p className="text-gray-300">Hollywood Foreign Press favorites</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Movie Details Modal */}
  <div id="movieModal" className="fixed inset-0 bg-black/80 backdrop-blur-sm hidden z-50 flex items-center justify-center p-6">
    <div className="bg-gray-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
      <div className="p-8">
        <div className="flex justify-between items-start mb-6">
          <h3 id="modalTitle" className="text-3xl font-bold glow-text">Movie Title</h3>
          <button onclick="closeModal()" className="text-gray-400 hover:text-white text-2xl">×</button>
        </div>
        <div id="modalContent" className="space-y-4">
          {/* Content will be populated by JavaScript */}
        </div>
      </div>
    </div>
  </div>

  <Footter/>
  
</div>

  )
}

export default LoadingPage
