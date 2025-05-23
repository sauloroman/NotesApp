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
        tags: string[],
        isLoading: boolean, 
    }

    const initialState: InitialStateNotes = { 
        notes: [],
        tags: [],
        isLoading: false,
    }

    export const notesSlice = createSlice({
        initialState: initialState,
        name: "notes",
        reducers: {

            setNotes: ( state, {payload}: PayloadAction<Note[]> ) => {
                state.notes = payload   
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
            }

        }
    })

    export const {
        setNotes,
        setIsLoadingNote,
        addNewNote,
        addTags,
        updateNotes,
    } = notesSlice.actions