import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface Category {
    uid: string,
    name: string,
    color: string,
}

export interface Note  {
    uid: string,
    title: string,
    description: string,
    archived: boolean,
    createdAt: number,
    categories: Category[],
    updatedAt: number,
}

interface InitialStateNotes {
    notes: Note[],
    isLoading: boolean, 
}

const initialState: InitialStateNotes = { 
    notes: [],
    isLoading: false,
}

export const notesSlice = createSlice({
    initialState: initialState,
    name: "notes",
    reducers: {

        setNotes: ( state, {payload}: PayloadAction<Note[]> ) => {
            state.notes = payload   
        },

    }
})

export const {
    setNotes,
} = notesSlice.actions