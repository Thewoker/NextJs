"use client"
import { auth, db } from "@/firebase/config"
import { signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import React, { createContext, useContext, useEffect, useState } from "react"
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { toast } from "react-toastify";

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({
        logged: false,
        email: null,
        uid: null,
        cursos: []
    })

    const getCursos = async () => {
        if (user.logged && user.uid) {
            const userRef = doc(db, 'usuarios', user.uid);
            const docSnapshot = await getDoc(userRef);
            const userData = docSnapshot.data();
            const userCursos = userData.cursos;
            return userCursos;
        }
        return null;
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            console.log(user)
            if (user) {
                setUser({
                    logged: true,
                    email: user.email,
                    uid: user.uid,
                    cursos: getCursos
                })
            } else {
                setUser({
                    logged: false,
                    email: null,
                    uid: null,
                    cursos: []
                })
            }
        })
    }, [])

    return (
        <AuthContext.Provider value={{
            user
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => useContext(AuthContext)