import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Note } from "../notes/notes.slice";

export const AlertType = {
    success: 'success',
    error: 'error',
    info: 'info',
} as const 

export type AlertType = typeof AlertType[keyof typeof AlertType]

export const TitlePage = {
    allNotes: "Todas las Notas",
    archivedNotes: "Notas Archivadas"
}

export type TitlePage = typeof TitlePage[keyof typeof TitlePage]

interface InitialStateUI {
    titlePage: TitlePage | string,
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
    },
}

export const initialState: InitialStateUI = {
    titlePage: "",
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
    },
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
        },

        activateNote: ( state, {payload}: PayloadAction<Note> ) => {
            state.viewNote.isOpen = true
            state.viewNote.selected = payload
        },

        deactivateNote: ( state ) => {
            state.viewNote.isOpen = false
            state.viewNote.selected = null
        },

        setTitlePage: ( state, {payload}: PayloadAction<TitlePage>) => {
            state.titlePage = payload
        }

    }
})

export const {
    showAlert,
    closeAlert,
    activeSkeletonCreateNote,
    activeCreateNote,
    activateNote,
    deactiveCreateNote,
    deactiveSkeletonCreateNote,
    deactivateNote,
    setTitlePage,
} = uiSlice.actions