import React, {createContext, useEffect, useState} from 'react'
import {auth, onAuthStateChanged} from './firebase.js'

export const AuthContext = createContext()
export const AuthProvider = ({children}) => {
    const [currUser, setCurrUser] = useState(null)
    const [pending, setPending] = useState(true)
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrUser(user)
            setPending(false)
          })
          return () => unsubscribe()
    }, [])
    if(pending) {
      return (
        <div className='flex h-[800px] justify-center items-center text-4xl font-bold'>Loading...</div>
      );
    }
    return (
        <AuthContext.Provider value={{currUser}}>
            {children}
        </AuthContext.Provider>
    )
}