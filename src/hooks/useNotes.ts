import { useDispatch, useSelector } from "react-redux"
import type { RootState } from "../store/store"
import { startCreatingNote } from "../store/notes/notes.thunk"

export const useNotes = () => {

    const dispatch = useDispatch<any>()
    const {
        isLoading,
        notes
    } = useSelector( (state: RootState) => state.notes )

    const createNewNote = ( data: { title: string, content: string, tags: string[]} ) => {

        const tagsToSave = data.tags.map( (tag: string) => ({
            uid: '',
            name: tag,
        }))

        const note = {
            ...data,
            uid: '',
            tags: tagsToSave,
            createdAt: new Date().toLocaleDateString(),
            updatedAt: new Date().toLocaleDateString(),
            archived: false,
        }

        dispatch( startCreatingNote( note ) )

    }

    return {
        isLoading,
        notes,

        createNewNote
    }

}