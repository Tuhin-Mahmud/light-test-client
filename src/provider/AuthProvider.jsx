/* eslint-disable react/prop-types */
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import { app } from "../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
import useAxiosPublic from "../hooks/useAxiosPublic";


export const AuthContext = createContext(null)
const auth = getAuth(app);


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const axiosPublic = useAxiosPublic()


    const googleProvider = new GoogleAuthProvider()


    // google signIn 
    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }



    // create user 
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // update user

    const updateUserProfile = (name, photo) => {
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }

    // login user
    const logInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // logOut user 
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    // current user
    useEffect(() => {
        const unSubsCribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            const currentEmail = { email: currentUser?.email }
            console.log('currentUser---->', currentUser);

            if (currentUser) {
                // const userEmail = currentUser?.email || user?.email;
                // sent to user for create a token
                axiosPublic.post('/jwt', currentEmail)
                    .then(res => {
                        // console.log('create token and sent to the client site', res.data.token);
                        if (res.data.token) {
                            localStorage.setItem('access-token', res.data.token)
                        }

                    })
            }
            else {
                // remove token in localStorage
                localStorage.removeItem('access-token')
                setLoading(false)
            }

            setLoading(false)
            return () => {
                return unSubsCribe()
            }
        })
    }, [axiosPublic])



    const authInfo = {
        user,
        loading,
        createUser,
        updateUserProfile,
        logInUser,
        logOut,
        googleLogin

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;