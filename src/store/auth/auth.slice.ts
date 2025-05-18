import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export const AuthStatus = {
    authenticated: 'authenticated',
    notAuthenticated: 'not-authenticated',
} as const 

export type AuthStatus = typeof AuthStatus[keyof typeof AuthStatus]

interface InitialStateAuth {
    status: AuthStatus,
    uid: string | null,
    email: string | null,
    displayName: string | null,
    photoURL: string | null,
    isLoading: boolean,
}

export const initialState: InitialStateAuth = {
    status: AuthStatus.notAuthenticated,
    uid: null,
    displayName: null,
    email: null,
    photoURL: null,
    isLoading: false,   
}


export const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {

        setIsLoading: ( state, {payload}: PayloadAction<boolean> ) => {
            state.isLoading = payload
        },

        login: ( state, {payload}: PayloadAction<{uid: string, email: string, displayName: string, photoURL: string}> ) => {
            const {uid, email, displayName, photoURL} = payload
            state.status = AuthStatus.authenticated
            state.uid = uid
            state.email = email
            state.displayName = displayName
            state.photoURL = photoURL
        },

        logout: ( state ) => {
            state.status = AuthStatus.notAuthenticated
            state.uid = null
            state.email = null
            state.displayName = null
            state.photoURL = null   
        }

    }
})

export const {
    setIsLoading,
    login,
    logout  
} = authSlice.actions