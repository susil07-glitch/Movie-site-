import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import {motion} from 'framer-motion'
import Navbar from '../Navbar/Navbar'
import Footter from '../Footer/Footter'
import { useNavigate } from 'react-router-dom'

import NavbarWithoutUser from '../Navbar/NavbarWithoutUser'
import WelcomePageBanner from '../../ImageFile/WelcomePageBanner.jpg'


const LoadingPage = () => {


  useEffect
  
  return (
 <div>
    
    <NavbarWithoutUser/>
      <div className="bg-cover bg-center z-10010 "
      style={{
        
        backgroundImage:`url(${WelcomePageBanner})`
      }}
      >
          <section id="home" className="hero-bg min-h-screen flex items-center justify-center relative">
                <div className="spotlight top-1/4 left-1/4" />
                <div className="spotlight top-3/4 right-1/4" style={{animationDelay: '-4s'}} />
               
                <div className="text-center z-10 max-w-4xl mx-auto px-6">
                      <h1 className="text-7xl  text-cyan-600 animate-bounce font-bold mb-6  floating-animation">
                          Welcome to CineVerse
                      </h1>
                      <p className="text-xl text-rose-800 mb-8 max-w-2xl mx-auto">
                           Discover the magic of movies - from Hollywood blockbusters to indie masterpieces, 
                           explore the world of cinema like never before.
                      </p>
                   
        
       
        
      

             <div className='gap-2.5'>
                <input
                  placeholder="Email Address"
                  className="w-full p-2 py-3 bg-amber-700 gap-2 text-white border-amber-400 rounded-sm sm:py-4 md:py-5 md:w-3/4 required:"
                />
                <Link to={"/home"}>
                  <button className="px-4 py-2 mt-3 font-medium text-white bg-red-700 rounded-sm sm:py-4 md:mt-0 md:pb-5 md:text-xl md:w-1/4">
                    Get Started
                  </button>
                </Link>
                <div className="note bg-white">
                 <p className='text-4xl font-bold text-rose-900'>
                  Note:- Please don't provide your real details !
                  </p> 
                </div>
              </div>
    </div>
  </section>


   </div>
 
 
  

  <Footter/>
  
</div>

  )
}

export default LoadingPage
