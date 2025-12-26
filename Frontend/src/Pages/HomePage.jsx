import React, { useState } from 'react'
import Banner from '../Component/Banner/Banner'
import RowPost from '../Component/RowPost/RowPost'
import NavbarWithoutUser from '../../src/Component/Navbar/NavbarWithoutUser'
import Footter from '../Component/Footer/Footter'
import { trending ,
  Animated,
  originals
} from '../Constant/Urls'

const HomePage = () => {
  const [WatchedMovie,setWatchedMovie ]=useState([])
  return (
    <div className='bg-black'>
      <NavbarWithoutUser></NavbarWithoutUser>
      <Banner url={trending}></Banner>
      <div className='w-[99%] ml-1'>
        <RowPost fisrt title="Trending Now  " url={trending} key={trending} ></RowPost>

        <RowPost title="Animated " url={Animated} key={Animated }></RowPost>
        <RowPost title="Cinema Ghar Origianls " url={originals} key={originals}></RowPost>
       
        
      </div>
      <Footter></Footter>
    </div>
  )
}

export default HomePage
