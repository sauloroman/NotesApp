import { collection, doc, getDocs, query, setDoc, where } from "firebase/firestore/lite"
import { FirebaseDB } from "../../firebase/config"
import { setIsLoading } from "../auth/auth.slice"
import { deactiveCreateNote } from "../ui/ui.slice"

import type { Dispatch } from "@reduxjs/toolkit"
import { addNewNote, addTags, setNotes, type Note } from "./notes.slice"
import type { RootState } from "../store"

export const startCreatingNote = ( newNote: Partial<Note> ) => {
    return async ( dispatch: Dispatch, getState: () => RootState ) => {
        const { uid } = getState().auth
        dispatch( setIsLoading( true ) )

        try {
            
            const newDoc = doc( collection( FirebaseDB, `notes-app/${uid}/notes` ) )
            await setDoc( newDoc, newNote )

            const noteInStore = {
                title: newNote.title!,
                content: newNote.content!,
                archived: newNote.archived!,
                tags: newNote.tags!,
                createdAt: newNote.createdAt!,
                updatedAt: newNote.updatedAt!,
                uid: newDoc.id
            }

            dispatch( addNewNote( noteInStore ) )
            dispatch( addTags(newNote.tags!) )
            dispatch( deactiveCreateNote() ) 

        } catch (error) {   
            console.log(error)
        }

        dispatch( setIsLoading( false ) )
    }
}

export const startGettingNotes = () => {
    return async ( dispatch: Dispatch, getState: () => RootState ) => {

        dispatch( setIsLoading(true) )
        const { uid } = getState().auth

        try {

            const notesRef = collection( FirebaseDB, `notes-app/${uid}/notes`)
            const notesNoArchived = query( notesRef, where('archived', '==', false) )
            const docs = await getDocs( notesNoArchived )

            let notes: Note[] = []
            docs.forEach( (doc) => {
                const {title, content, createdAt, updatedAt, tags, archived } = doc.data()
                notes.push({ 
                    uid: doc.id,
                    title,
                    content,
                    tags,
                    archived,
                    createdAt,
                    updatedAt,
                })

                dispatch( addTags( tags ) )
            })

            dispatch( setNotes( notes ) )

        } catch (error) {
            console.log(error)
        }

        dispatch( setIsLoading(false) )

    }
}