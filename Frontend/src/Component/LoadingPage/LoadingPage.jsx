import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import {motion} from 'framer-motion'
import Navbar from '../Navbar/Navbar'
import Footter from '../Footer/Footter'
import { useNavigate } from 'react-router-dom'

import NavbarWithoutUser from '../Navbar/NavbarWithoutUser'
import WelcomePageBanner from '../../ImageFile/WelcomePageBanner.jpg'
import RowPost from '../RowPost/RowPost'


const LoadingPage = () => {


  useEffect
  
  return (
 <div>
    
    <NavbarWithoutUser/>
      <div className="bg-cover w-full hue-rotate-15 bg-center z-10010 backdrop:blur-xl drop-shadow-amber-900"
      style={{
        
        backgroundImage:`url(https://i.pinimg.com/1200x/f1/77/e9/f177e96ddae225adcf86e76fa1a8fda0.jpg)`
      }}
      >
          <section id="home" className="hero-bg min-h-screen flex items-center justify-center relative">
                <div className="spotlight top-1/4 left-1/4" />
                <div className="spotlight top-3/4 right-1/4" style={{animationDelay: '-4s'}} />
               
                <div className="text-center z-10 max-w-4xl mx-auto px-6">
                      
                      <p className="text-3xl shadow-black text-white drop-shadow-xl/50 mb-8 max-w-2xl mx-auto">
                           Discover the magic of movies - from Hollywood blockbusters to indie masterpieces, 
                           explore the world of cinema like never before.
                      </p>
                   
        
       
        
      

             <div className='gap-2.5'>
               
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
