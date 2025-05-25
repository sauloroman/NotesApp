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
    archivedNotes: "Notas Archivadas",
    settings: "Ajustes del sistema"
}

export type TitlePage = typeof TitlePage[keyof typeof TitlePage]

export const ModalName = {
    noModal: 'No Modal',
    archivateNote: 'Archivar Nota',
    restoreNote: 'Recuerar Nota',
    deleteNote: 'Eliminar Nota'
}

export type ModalName = typeof ModalName[keyof typeof ModalName]

interface InitialStateUI {
    titlePage: TitlePage | string,
    restoreNoteUid: string,
    theme: string,
    font: string,
    alert: {
        message: string | null,
        type: AlertType,
        isAlertOpen: boolean,
    },
    modal: {
        isOpen: boolean,
        modalName: ModalName
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
    restoreNoteUid: "",
    theme: 'light',
    font: 'poppins',
    alert: {
        message: null,
        type: AlertType.info,
        isAlertOpen: false,
    },
    modal: {
        isOpen: false,
        modalName: ModalName.noModal
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

        resetUi: ( state ) => {
            state.titlePage = ""
            state.restoreNoteUid = ""
            state.theme = 'light'
            state.font = 'poppins'
            state.alert = {
                message: null,
                type: AlertType.info,
                isAlertOpen: false,
            }
            state.modal = {
                isOpen: false,
                modalName: ModalName.noModal
            }
            state.createNote = {
                skeletonActive: false,
                isOpen: false,
            }
            state.viewNote = {
                selected: null,
                isOpen: false,
            }
        },

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
        },

        openModal: ( state, {payload}: PayloadAction<ModalName> ) => {
            state.modal = {
                isOpen: true,
                modalName: payload,
            }
        },
        
        closeModal: ( state ) => {
            state.modal = {
                isOpen: false,
                modalName: ModalName.noModal
            }
        },

        setRestoreNoteUid: ( state, {payload}: PayloadAction<string>) => {
            state.restoreNoteUid = payload
        },

        setTheme: ( state, {payload}: PayloadAction<string> ) => {
            state.theme = payload
        },

        setFont: ( state, {payload}: PayloadAction<string>) => {
            state.font = payload
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
    openModal,
    closeModal,
    setRestoreNoteUid,
    setTheme,
    setFont,
    resetUi,
} = uiSlice.actions