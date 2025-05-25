import { useDispatch, useSelector } from "react-redux"
import type { RootState } from "../store/store"
import { 
    activeSkeletonCreateNote, 
    activeCreateNote, 
    deactiveSkeletonCreateNote, 
    activateNote, 
    deactivateNote, 
    deactiveCreateNote, 
    setTitlePage,
    ModalName,
    openModal,
    closeModal,
    setRestoreNoteUid,
    setTheme,
    setFont
} from "../store/ui/ui.slice"
import type { Note } from "../store/notes/notes.slice"

export const useUi = () => {

    const dispatch = useDispatch<any>()

    const { alert, createNote, viewNote, titlePage, modal, restoreNoteUid, theme, font } = useSelector( (state: RootState) => state.ui )

    const openCreateNote = () => {
        dispatch( deactivateNote() )
        dispatch( activeSkeletonCreateNote() )    

        setTimeout(() => {
            dispatch( deactiveSkeletonCreateNote() )
            dispatch( activeCreateNote() )
        }, 1500 )
    }

    const selectNote = ( note: Note ) => {
        dispatch( activateNote( note ) )
        dispatch( deactiveCreateNote() )
    }

    const onSetTitlePage = ( title: string ) => {
        dispatch(setTitlePage(title))
    }

    const showModal = ( name: ModalName ) => {
        dispatch( openModal(name) )
    }

    const hideModal =  () => {
        dispatch( closeModal() )
    }

    const onSetRestoreNoteUid = ( noteId: string ) => {
        dispatch(setRestoreNoteUid( noteId ))
    }

    const onSetFont = ( font: string ) => {
        dispatch( setFont(font))
        localStorage.setItem('notes-font', JSON.stringify(font) )
    }

    const onSetTheme = ( theme: string ) => {
        dispatch( setTheme( theme ) )
        localStorage.setItem('notes-theme', JSON.stringify( theme ))
        
        if ( theme === 'light' ) {
            document.documentElement.classList.remove('dark')
        }

        document.documentElement.classList.add(theme)
    }

    return {
        modal,
        alert,
        createNote,
        titlePage,
        viewNote,
        restoreNoteUid,
        theme,
        font,
        
        onSetRestoreNoteUid,
        openCreateNote,
        selectNote,
        onSetTitlePage,
        showModal,
        hideModal,
        onSetFont,
        onSetTheme,
    }

}