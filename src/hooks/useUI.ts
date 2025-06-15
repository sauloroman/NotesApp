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
    setFont,
    openAsideMenu,
    closeAsideMenu,
    openSearch,
    closeSearch
} from "../store/ui/ui.slice"
import type { Note } from "../store/notes/notes.slice"

export const useUi = () => {

    const dispatch = useDispatch<any>()

    const { alert, createNote, viewNote, titlePage, modal, restoreNoteUid, theme, font, asideMenu, search } = useSelector( (state: RootState) => state.ui )

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

    const showAsideMenu = () => {
        dispatch( openAsideMenu() )
    }

    const hideAsideMenu = () => {
        dispatch( closeAsideMenu() )
    }

    const showSearch = () => {
        dispatch( openSearch() )
    }

    const hideSearch = () => {
        dispatch( closeSearch() )
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
        alert,
        asideMenu,
        createNote,
        font,
        modal,
        restoreNoteUid,
        theme,
        titlePage,
        search,
        viewNote,
        
        hideAsideMenu,
        hideModal,
        hideSearch,
        onSetFont,
        onSetRestoreNoteUid,
        onSetTheme,
        onSetTitlePage,
        openCreateNote,
        selectNote,
        showAsideMenu,
        showModal,
        showSearch,
    }

}