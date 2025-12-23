import React, { useState } from 'react'
import Banner from '../Component/Banner/Banner'
import RowPost from '../Component/RowPost/RowPost'
import NavbarWithoutUser from '../../src/Component/Navbar/NavbarWithoutUser'
import Footter from '../Component/Footer/Footter'
import { trending } from '../Constant/Urls'

const HomePage = () => {
  const [WatchedMovie,setWatchedMovie ]=useState([])
  return (
    <div>
      <NavbarWithoutUser></NavbarWithoutUser>
      <Banner></Banner>
      <div className='w-[99%] ml-1'>
        <RowPost fisrt title="trending Movie " url={trending} key={trending} ></RowPost>
        <RowPost title="Animated Movie "></RowPost>
        {WatchedMovie.length !=0 ?(
           <RowPost 
           title="Watched Movie "
           MovieData={watchedMovie }
           key={"watchedMovie"}

           ></RowPost>

        ) : null }

       
        
      </div>
      <Footter></Footter>
    </div>
  )
}

export default HomePage
