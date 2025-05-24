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

            setIsLoadingNote: ( state, { payload }: PayloadAction<boolean>) => {
                state.isLoading = payload
            },

            addNewNote( state, { payload }: PayloadAction<Note> ) {
                state.notes.push( payload )
            },

            addTags: ( state, {payload}: PayloadAction<string[]>) => {
                const normalizedTags = payload.map( (tag: string) => tag.replace( tag[0], tag[0].toUpperCase() ) )
                const combined = [ ...state.tags, ...normalizedTags ]
                state.tags = Array.from( new Set( combined ) )
            },

            updateNotes: ( state, {payload}: PayloadAction<Note> ) => {
                state.notes = state.notes.map( (note: Note) => {
                    if ( note.uid === payload.uid ) return payload
                    return note
                })
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
            
            setArchivedNotesInView: ( state ) => {
                state.notesInView = state.notes.filter( note => note.archived )
            },

            archivedNote: ( state, {payload}: PayloadAction<string>) => {
                state.notes = state.notes.map( note => {
                    if ( note.uid === payload ) return {
                        ...note,
                        archived: true,
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
        archivedNote,
        setArchivedNotesInView,
    } = notesSlice.actions