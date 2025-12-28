import React, { createContext, useState } from 'react'


export const AuthContext =createContext({})

export default function context({children}){

    const [User ,setUser]=useState(flase)

    return(
        <AuthContext.Provider value={{User,setUser}}>
            {children}
        </AuthContext.Provider>
    )
}
