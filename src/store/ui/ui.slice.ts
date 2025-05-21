import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export const AlertType = {
    success: 'success',
    error: 'error',
    info: 'info',
} as const 

export type AlertType = typeof AlertType[keyof typeof AlertType]

interface InitialStateUI {
    alert: {
        message: string | null,
        type: AlertType,
        isAlertOpen: boolean,
    },
    createNote: {
        isOpen: boolean,
    }
}

export const initialState: InitialStateUI = {
    alert: {
        message: null,
        type: AlertType.info,
        isAlertOpen: false,
    },
    createNote: {
        isOpen: false,
    }
}

export const uiSlice = createSlice({
    initialState: initialState,
    name: "ui", 
    reducers: {

        showAlert: ( state, { payload }: PayloadAction<{ message: string, type: AlertType }> ) => {
            const { message, type } = payload

            state.alert = {
                message,
                type,
                isAlertOpen: true,
            }
        },

        closeAlert: ( state ) => {
            state.alert = {
                message: null,
                type: AlertType.info,
                isAlertOpen: false,
            }
        },

        createNoteOpen: (state, {payload}: PayloadAction<boolean> ) => {
            state.createNote.isOpen = payload
        }

    }
})

export const {
    showAlert,
    closeAlert,
    createNoteOpen
} = uiSlice.actions