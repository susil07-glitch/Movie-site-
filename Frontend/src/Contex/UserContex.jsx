import React, { createContext, useState } from 'react'


export const AuthContext =createContext(null)

export default function context({children}){

    const [User ,setUser]=useState(flase)

    return(
        <AuthContext.Provider value={{user,setUser}}>
            {children}
        </AuthContext.Provider>
    )
}
