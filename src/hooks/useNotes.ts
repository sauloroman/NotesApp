import { useDispatch, useSelector } from "react-redux"
import type { RootState } from "../store/store"
import { startCreatingNote, startGettingNotes, startUpdatingNote } from "../store/notes/notes.thunk"

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

    const updateNote = ( data: {title: string, content: string, tags: string[] } ) => {

        const noteUpdated = {
            ...data,
            updatedAt: new Date().toLocaleString()
        }

        dispatch( startUpdatingNote( noteUpdated ) )

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
        updateNote,
    }

}