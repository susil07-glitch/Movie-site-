import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footter from '../Footer/Footter'
import { useNavigate } from 'react-router-dom'
import HomePage from '../../../Pages/HomePage'
import NavbarWithoutUser from '../Navbar/Navbar'
import WelcomePageBanner from '../../ImageFile/WelcomePageBanner.jpg'


const LoadingPage = () => {
  
  return (
    <div 
     style={{
          background: `linear-gradient(0deg, hsl(0deg 0% 0% / 73%) 0%, hsl(0deg 0% 0% / 73%) 35%),url(${WelcomePageBanner})`,
        }}
        className="h-[32rem] w-full sm:h-[65vh] xl:h-[80vh] bg-slate-800 relative">
     
  <NavbarWithoutUser/>
  
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
 
  

  <Footter/>
  
</div>

  )
}

export default LoadingPage
