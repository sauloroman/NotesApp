import { useDispatch, useSelector } from "react-redux"
import type { RootState } from "../store/store"
import { startArchivatingNote, startCreatingNote, startDeletingNote, startGettingNotes, startRestoringNote, startUpdatingNote } from "../store/notes/notes.thunk"
import { setArchivedNotesInView, setFilterTag, setNotesInView } from "../store/notes/notes.slice"

export const useNotes = () => {

    const dispatch = useDispatch<any>()
    const {
        isLoading,
        notes,
        notesInView,
        tags,
        filterTag
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

    const deleteNote = () => {
        dispatch( startDeletingNote() )
    }

    const archivateNote = () => {
        dispatch( startArchivatingNote() )
    }

    const dearchivateNote = ( noteId: string ) => {
        dispatch( startRestoringNote(noteId) )
    }

    const getNotes = () => {
        dispatch( startGettingNotes() )
    }

    const setFilter = ( filter: string ) => {
        dispatch( setFilterTag( filter ) )
    }
    
    const setNotesInPage = () => {
       dispatch( setNotesInView() ) 
    }

    const getArchivedNotes = () => {
        dispatch( setArchivedNotesInView() )
    }

    return {
        isLoading,
        notes,
        notesInView,
        tags,
        filterTag,

        createNewNote,
        getNotes,
        updateNote,
        deleteNote,
        setFilter,
        setNotesInPage,
        archivateNote,
        dearchivateNote,
        getArchivedNotes
    }

}