import { useDispatch, useSelector } from "react-redux"
import type { RootState } from "../store/store"
import { createNoteOpen } from "../store/ui/ui.slice"

export const useUi = () => {

    const dispatch = useDispatch<any>()

    const { alert, createNote } = useSelector( (state: RootState) => state.ui )

    const openCreateNote = () => {
        dispatch( createNoteOpen(true) )    
    }

    return {
        alert,
        createNote,

        openCreateNote
    }

}