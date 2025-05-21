import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface Tag {
    uid: string,
    name: string,
}

export interface Note  {
    uid: string,
    title: string,
    content: string,
    archived: boolean,
    tags: Tag[],
    createdAt: string,
    updatedAt: string,
}

interface InitialStateNotes {
    notes: Note[],
    tags: Tag[],
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

        addTags: ( state, {payload}: PayloadAction<Tag[]>) => {
            
        }

    }
})

export const {
    setNotes,
    setIsLoadingNote,
    addNewNote
} = notesSlice.actions