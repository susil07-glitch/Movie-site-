import React, { useState } from 'react'
import Banner from '../Component/Banner/Banner'
import RowPost from '../Component/RowPost/RowPost'
import NavbarWithoutUser from '../../src/Component/Navbar/NavbarWithoutUser'
import Footter from '../Component/Footer/Footter'
import { trending ,
  Animated,
  originals,
  action,
  SciFi,
  horror,
  comedy
} from '../Constant/Urls'
import Navbar from '../Component/Navbar/Navbar'
import FadeMotion from '../Fademotion/Fademotion'

const HomePage = () => {
  const [WatchedMovie,setWatchedMovie ]=useState([])
  return (
    <div className='bg-black '>
     <Navbar></Navbar>
     
      <Banner url={trending} ></Banner>
      <div className='w-[99%] ml-1'>
        <RowPost fisrt title="Trending Now  " url={trending} key={trending} ></RowPost>

        <RowPost title="Animated " url={Animated} key={Animated }></RowPost>
        <RowPost title="Cinema Ghar Origianls " url={originals} key={originals}></RowPost>
        <RowPost title="Action & Thrillers " url={action} key={action}></RowPost>
        <RowPost title="Sci-Fic " url={SciFi} key={SciFi}></RowPost>
        <RowPost title="Horror " url={horror} key={horror}></RowPost>
        <RowPost title="Comedy " url={comedy} key={comedy}></RowPost>
        
      
        
      </div>
      <Footter></Footter>
    </div>
  )
}

export default HomePage
