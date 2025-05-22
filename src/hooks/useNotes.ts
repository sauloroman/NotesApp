import { useDispatch, useSelector } from "react-redux"
import type { RootState } from "../store/store"
import { startCreatingNote, startGettingNotes } from "../store/notes/notes.thunk"

export const useNotes = () => {

    const dispatch = useDispatch<any>()
    const {
        isLoading,
        notes,
        tags
    } = useSelector( (state: RootState) => state.notes )

    const createNewNote = ( data: { title: string, content: string, tags: string[]} ) => {

        const note = {
            ...data,
            createdAt: new Date().toLocaleString(),
            updatedAt: new Date().toLocaleString(),
            archived: false,
        }

        dispatch( startCreatingNote( note ) )
    }

    const getNotes = () => {
        dispatch( startGettingNotes() )
    }

    return {
        isLoading,
        notes,
        tags,

        createNewNote,
        getNotes,
    }

}