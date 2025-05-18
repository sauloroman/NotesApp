import { useDispatch, useSelector } from "react-redux"
import type { LoginWithEmailAndPassword, RegisterUserWithEmail } from "../firebase/provider"
import { startCreatingUserWithEmail, startLoggingWithEmail, startLoggingWithGoogle } from "../store/auth/auth.thunk"
import type { RootState } from "../store/store"

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
        loginWithGoogle
    }

}