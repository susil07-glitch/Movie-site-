import React from 'react'

const Navbar = () => {
  return (
    <div className='m-2 h-15 items-center rounded-b-md bg-amber-600 shadow-md gap-4 '>
      <div className='flex m-2 py-3 gap-30'>
          <div className=''>
              <h1 className='text-3xl font-bold'>Net.tv</h1>
          </div>
          <div className='flex gap-4 text-xl'>
               <h2>Home</h2>
               <h2>Tv series </h2>
               <h2>Movies</h2>
           </div>

           <div>
          <label> 
          <input type="search" className=' bg-white h-10 w-100 text-2xl p-4 rounded-full' placeholder='search here !'></input>
          </label>
      </div>
      </div>
      

      
    </div>
  )
}

export default Navbar
