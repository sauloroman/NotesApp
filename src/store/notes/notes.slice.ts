    import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

    export interface Note  {
        uid: string,
        title: string,
        content: string,
        archived: boolean,
        tags: string[],
        createdAt: string,
        updatedAt: string,
    }

    interface InitialStateNotes {
        notes: Note[],
        notesInView: Note[],
        tags: string[],
        isLoading: boolean, 
        filterTag: string,
    }

    const initialState: InitialStateNotes = { 
        notes: [],
        notesInView: [],
        tags: [],
        isLoading: false,
        filterTag: "",
    }

    export const notesSlice = createSlice({
        initialState: initialState,
        name: "notes",
        reducers: {

            setNotes: ( state, {payload}: PayloadAction<Note[]> ) => {
                state.notes = payload 
                state.notesInView = payload
            },

            resetNotes: ( state ) => {
                state.notes = []
                state.notesInView = []
                state.tags = []
                state.isLoading = false
                state.filterTag = ""
            },

            setIsLoadingNote: ( state, { payload }: PayloadAction<boolean>) => {
                state.isLoading = payload
            },

            addNewNote( state, { payload }: PayloadAction<Note> ) {
                state.notes.unshift( payload )
            },

            addTags: ( state, {payload}: PayloadAction<string[]>) => {
                const normalizedTags = payload.map( (tag: string) => tag.replace( tag[0], tag[0].toUpperCase() ) )
                const combined = [ ...state.tags, ...normalizedTags ]
                state.tags = Array.from( new Set( combined ) )
            },

            deleteTags: ( state, {payload}: PayloadAction<string[]> ) => {
                let tagsWithNoNotes: string[] = []

                for( const tag of payload ) {
                    const isInNote = state.notes.some( (note: Note) => note.tags.includes( tag ) )

                    if ( !isInNote ) {
                        tagsWithNoNotes.push( tag.replace( tag[0], tag[0].toUpperCase() ) )
                    } 
                }

                state.tags = state.tags.filter( tag => !tagsWithNoNotes.includes(tag) )
            },

            updateNotes: ( state, {payload}: PayloadAction<Note> ) => {
                state.notes = state.notes.map( (note: Note) => {
                    if ( note.uid === payload.uid ) return payload
                    return note
                })
            },

            deleteNote: ( state, {payload}: PayloadAction<string> ) => {
                state.notes = state.notes.filter( notes => notes.uid !== payload )
            },

            setFilterTag: ( state, { payload }: PayloadAction<string>) => {
                state.filterTag = payload.toLowerCase()
            },

            setNotesInView: ( state ) => {
                if ( state.filterTag ) {
                    state.notesInView = state.notes.filter( note => note.tags.includes( state.filterTag! ) && !note.archived )
                } else {
                    state.notesInView = state.notes.filter( note => !note.archived )
                }
            },

            setNotesInViewSearch: ( state, { payload }: PayloadAction<string> ) => {

                const searchTerm = payload.toLowerCase()

                state.notesInView = state.notes.filter( note => {
                    if (
                        note.title.toLowerCase().includes( searchTerm ) || 
                        note.content.toLowerCase().includes( searchTerm ) || 
                        note.tags.some( tag => tag.toLowerCase().includes( searchTerm ))
                    ) {
                        return note
                    }
                })
            },

            setArchivedNotesInView: ( state ) => {
                state.notesInView = state.notes.filter( note => note.archived )
            },

            toggleArchivateNote: ( state, {payload}: PayloadAction<string>) => {
                state.notes = state.notes.map( note => {
                    if ( note.uid === payload ) return {
                        ...note,
                        archived: !note.archived,
                    } 
                    return note
                })
            }

        }
    })

    export const {
        setNotes,
        setIsLoadingNote,
        addNewNote,
        addTags,
        updateNotes,
        setFilterTag,
        setNotesInView,
        toggleArchivateNote,
        setArchivedNotesInView,
        deleteNote,
        deleteTags,
        resetNotes,
        setNotesInViewSearch,
    } = notesSlice.actions