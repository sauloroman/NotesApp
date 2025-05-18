import type { Dispatch } from "@reduxjs/toolkit"
import { login, setIsLoading } from "./auth.slice"
import { loginWithEmailAndPassword, registerUserWithEmail, type LoginWithEmailAndPassword, type RegisterUserWithEmail } from "../../firebase/provider"
import { showAlert, AlertType } from "../ui/ui.slice"

export const startCreatingUserWithEmail = (data: RegisterUserWithEmail) => {

    return async ( dispatch: Dispatch ) => {

        dispatch( setIsLoading( true ) )

        try {

            const result = await registerUserWithEmail({ 
                email: data.email,
                password: data.password,
                displayName: data.displayName
            })

            const { uid, email, displayName, photoURL } = result

            dispatch( login({
                uid: uid!,
                email: email!,
                displayName: displayName!,
                photoURL: photoURL! 
            }) )

            dispatch( showAlert({
                message: 'Usuario creado correctamente',
                type: AlertType.success 
            }))

        } catch (error) {
            dispatch( showAlert({
                message: (error as Error).message,
                type: AlertType.error
            }))
        }

        dispatch( setIsLoading( false ) )

    }
}

export const startLoggingWithEmail = (data: LoginWithEmailAndPassword) => {
    return async ( dispatch: Dispatch ) => {

        dispatch( setIsLoading( true ) )
        
        try {
            
            const result = await loginWithEmailAndPassword({ 
                email: data.email,
                password: data.password
            })

            const { uid, email, displayName, photoURL } = result

            dispatch( login({
                uid: uid!,
                email: email!,
                displayName: displayName!,
                photoURL: photoURL! 
            }) )

            dispatch( showAlert({
                message: `Bienvenido ${displayName}`,
                type: AlertType.success 
            }))

        } catch (error) {
            dispatch( showAlert({
                message: (error as Error).message,
                type: AlertType.error
            }))
        }

        dispatch( setIsLoading( false ) )

    }
}