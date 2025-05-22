import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Note } from "../notes/notes.slice";

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
        skeletonActive: boolean,
        isOpen: boolean,
    },
    viewNote: {
        selected: Note | null,
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
        skeletonActive: false,
        isOpen: false,
    },
    viewNote: {
        selected: null,
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

        activeSkeletonCreateNote: (state ) => {
            state.createNote.skeletonActive = true
        },

        deactiveSkeletonCreateNote: (state ) => {
            state.createNote.skeletonActive = false
        },

        activeCreateNote: ( state ) => {
            state.createNote.isOpen = true
        },

        deactiveCreateNote: ( state ) => {
            state.createNote.isOpen = false
        }

    }
})

export const {
    showAlert,
    closeAlert,
    activeSkeletonCreateNote,
    activeCreateNote,
    deactiveCreateNote,
    deactiveSkeletonCreateNote
} = uiSlice.actions