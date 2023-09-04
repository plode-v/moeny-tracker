'use client'
import React, { createContext } from "react"
import { auth } from "@/firebase/firebase"
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth"
import { useAuthState } from "react-firebase-hooks/auth"


export const authContext = createContext({
    user: null,
    loading: false,
    googleLoginHandler: async () => {},
    logout: async () => {}
})

export default function AuthContextProvider({children}){

    const [user, loading] = useAuthState(auth);

    const googleProvider = new GoogleAuthProvider(auth);

    const googleLoginHandler = async () => {
        try {
            signInWithPopup(auth, googleProvider)
        } catch (err) {
            throw Error(err, { status: 500 });
        }
    }

    const logout = () => {
        signOut(auth);
    };

    const values = {
        user,
        loading,
        googleLoginHandler,
        logout
    }

    return (
        <authContext.Provider value={values}>{children}</authContext.Provider>
    )
}