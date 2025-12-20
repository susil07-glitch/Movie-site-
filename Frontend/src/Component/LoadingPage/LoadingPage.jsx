import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import {motion} from 'framer-motion'
import Navbar from '../Navbar/Navbar'
import Footter from '../Footer/Footter'
import { useNavigate } from 'react-router-dom'

import NavbarWithoutUser from '../Navbar/Navbar'
import WelcomePageBanner from '../../ImageFile/WelcomePageBanner.jpg'


const LoadingPage = () => {


  useEffect
  
  return (
 <div>
    
    <NavbarWithoutUser/>
      <div className="bg-cover bg-center -scale-z-10010 "
      style={{
        backgroundImage:`url(${WelcomePageBanner})`
      }}
      >
          <section id="home" className="hero-bg min-h-screen flex items-center justify-center relative">
                <div className="spotlight top-1/4 left-1/4" />
                <div className="spotlight top-3/4 right-1/4" style={{animationDelay: '-4s'}} />
               
                <div className="text-center z-10 max-w-4xl mx-auto px-6">
                      <h1 className="text-7xl  text-cyan-600 animate-bounce font-bold mb-6 neon-text floating-animation">
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

      <div>
                <input
                  placeholder="Email Address"
                  className="w-full p-2 py-3 bg-amber-700 gap-2 border-amber-400 rounded-sm sm:py-4 md:py-5 md:w-3/4"
                />
                <Link to={"/login"}>
                  <button className="px-4 py-2 mt-3 font-medium text-white bg-red-700 rounded-sm sm:py-4 md:mt-0 md:pb-5 md:text-xl md:w-1/4">
                    Get Started
                  </button>
                </Link>
              </div>
    </div>
  </section>


   </div>
 
 
  

  <Footter/>
  
</div>

  )
}

export default LoadingPage
