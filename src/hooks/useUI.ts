import { useDispatch, useSelector } from "react-redux"
import type { RootState } from "../store/store"
import { 
    activeSkeletonCreateNote, 
    activeCreateNote, 
    deactiveSkeletonCreateNote, 
    activateNote, 
    deactivateNote, 
    deactiveCreateNote, 
    setTitlePage
} from "../store/ui/ui.slice"
import type { Note } from "../store/notes/notes.slice"

export const useUi = () => {

    const dispatch = useDispatch<any>()

    const { alert, createNote, viewNote, titlePage } = useSelector( (state: RootState) => state.ui )

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

    return {
        alert,
        createNote,
        titlePage,
        viewNote,

        openCreateNote,
        selectNote,
        onSetTitlePage,
    }

}