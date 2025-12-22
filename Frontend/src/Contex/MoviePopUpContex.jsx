import React, { createContext, useState } from 'react'

export const PopUpContex= createContext(null)


 export  default function Context2 ({children}) {

    const [showModal,setShowModal]=useState(false)
  

  return (
    <PopUpContex.Provider value={{showModal,setShowModal}} >
        {children}
    </PopUpContex.Provider>
  )
}

