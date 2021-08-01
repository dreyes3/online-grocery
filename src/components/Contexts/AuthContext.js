import React, { useContext, useState, useEffect } from "react"
import { auth } from "../firebase"

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)
    const [fullName, setFullName] = useState('')

    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password)
    }

    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password)
    }

    function logout() {
        return auth.signOut()
    }

    function resetPassword(email) {
        return auth.sendPasswordResetEmail(email)
    }

    function updateEmail(email) {
        return currentUser.updateEmail(email)
    }

    function updatePassword(password) {
        return currentUser.updatePassword(password)
    }

    function updateProfile(displayName) {
        console.log(`updateProfile: ${displayName}`)
        return currentUser.updateProfile({
            displayName: displayName
        })
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {

            // console.log(`fullName: ${fullName}`)

            // if (user) {
            //     user.updateProfile({
            //         displayName: fullName
            //     })
            //     setCurrentUser(user)
            //     console.log(JSON.stringify(user))
            // }
            setLoading(false)
        })

        return unsubscribe
    }, [])

    const value = {
        currentUser,
        login,
        signup,
        logout,
        resetPassword,
        updateEmail,
        updatePassword,
        updateProfile
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
