import React, { createContext, useState, useEffect } from 'react'

export const AuthContext = createContext({})

export default function context({children}){

    const [User, setUser] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    // Check if user is already logged in on mount
    useEffect(() => {
        const storedUser = localStorage.getItem('user')
        const token = localStorage.getItem('token')
        
        if (storedUser && token) {
            try {
                setUser(JSON.parse(storedUser))
            } catch (error) {
                console.error('Error parsing stored user:', error)
                localStorage.removeItem('user')
                localStorage.removeItem('token')
            }
        }
        setIsLoading(false)
    }, [])

    const logout = () => {
        setUser(null)
        localStorage.removeItem('user')
        localStorage.removeItem('token')
    }

    return(
        <AuthContext.Provider value={{User, setUser, logout, isLoading}}>
            {children}
        </AuthContext.Provider>
    )
}
