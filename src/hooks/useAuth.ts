import { useDispatch, useSelector } from "react-redux"
import { type LoginWithEmailAndPassword, type RegisterUserWithEmail } from "../firebase/provider"
import { startCreatingUserWithEmail, startLoggingOut, startLoggingWithEmail, startLoggingWithGoogle } from "../store/auth/auth.thunk"
import type { RootState } from "../store/store"
import { onAuthStateChanged } from "firebase/auth"
import { FirebaseAuth } from "../firebase/config"
import { login, logout } from "../store/auth/auth.slice"

export const useAuth = () => {

    const dispatch = useDispatch<any>()
    const { 
        displayName,
        email, 
        isLoading,
        photoURL,
        uid,
        status
    } = useSelector( (state: RootState) => state.auth )

    const registerUser = ( data: RegisterUserWithEmail ) => {
        dispatch( startCreatingUserWithEmail( data ) )
    }

    const loginUser = ( data: LoginWithEmailAndPassword ) => {
        dispatch( startLoggingWithEmail( data ) )
    }

    const loginWithGoogle = () => {
        dispatch( startLoggingWithGoogle() )
    }

    const checkAuth = () => {
        onAuthStateChanged( FirebaseAuth, async (user) => {
            if (!user) return dispatch( logout() )

            const { displayName, email, photoURL, uid } = user!

            dispatch( login({ 
                displayName: displayName!, 
                email: email!, 
                photoURL: photoURL!, 
                uid: uid!    
            }))
        } )
    }

    const logoutUser = () => {
        dispatch( startLoggingOut() )
    }

    return {
        // Attributes
        displayName,
        email,
        isLoading,
        photoURL,
        uid,
        status,

        // Methods
        registerUser,
        loginUser,
        loginWithGoogle,
        checkAuth,
        logoutUser
    }

}