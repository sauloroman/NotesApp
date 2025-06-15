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
    asideMenu: {
        isOpen: boolean
    },  
    search: {
        isOpen: boolean
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
    asideMenu: {
        isOpen: false,
    },
    search: {
        isOpen: false
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
            state.asideMenu = {
                isOpen: false,
            },
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

        openAsideMenu: (state) => {
            state.asideMenu.isOpen = true
        },

        
        closeAsideMenu: (state) => {
            state.asideMenu.isOpen = false
        },

        openSearch: (state) => {
            state.search.isOpen = true
        },

        
        closeSearch: (state) => {
            state.search.isOpen = false
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
    activateNote,
    activeCreateNote,
    activeSkeletonCreateNote,
    closeAlert,
    closeAsideMenu,
    closeModal,
    closeSearch,
    deactivateNote,
    deactiveCreateNote,
    deactiveSkeletonCreateNote,
    openAsideMenu,
    openModal,
    openSearch,
    resetUi,
    setFont,
    setRestoreNoteUid,
    setTheme,
    setTitlePage,
    showAlert,
} = uiSlice.actions