import { collection, doc, getDocs, query, setDoc, where } from "firebase/firestore/lite"
import { FirebaseDB } from "../../firebase/config"
import { setIsLoading } from "../auth/auth.slice"
import { activateNote, deactivateNote, deactiveCreateNote } from "../ui/ui.slice"

import type { Dispatch } from "@reduxjs/toolkit"
import { addNewNote, addTags, archivedNote, setFilterTag, setNotes, setNotesInView, updateNotes, type Note } from "./notes.slice"
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
            dispatch( activateNote(newNote as Note) )
            dispatch( setFilterTag(""))
            dispatch( setNotesInView() )

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

export const startUpdatingNote = ( data: Partial<Note> ) => {
    return async( dispatch: Dispatch, getState: () => RootState ) => {

        const { uid: userUid } = getState().auth
        const { viewNote: { selected } } = getState().ui

        const { uid, createdAt, archived } = selected!

        dispatch( setIsLoading(true) )

        try {
            
            const noteRef = doc( FirebaseDB, `notes-app/${userUid}/notes/${uid}` )
            await setDoc( noteRef, { ...data }, { merge: true }) 

            const newNote: Note = {
                uid: uid,                
                createdAt: createdAt,
                archived: archived,
                content: data.content!,
                title: data.title!,
                tags: data.tags!,
                updatedAt: data.updatedAt!,
            }

            dispatch( updateNotes( newNote ) )
            dispatch( activateNote({
                ...newNote,
            } as Note))
            dispatch( setFilterTag(""))
            dispatch( setNotesInView() )

        } catch (error) {
            console.log('Error al actualizar la nota: ', error )
        }

        dispatch( setIsLoading( false ) )

    }
}

export const startArchivatingNote = ( data: { archived: boolean } ) => {
    return async ( dispatch: Dispatch, getState: () => RootState ) => {

        dispatch( setIsLoading( true ) )

        const { uid: userUid } = getState().auth 
        const { viewNote: { selected } } = getState().ui
        const { uid } = selected!

        try {
        
            const noteRef = doc( FirebaseDB, `notes-app/${userUid}/notes/${uid}`)
            await setDoc( noteRef, data, { merge: true } )

            dispatch( archivedNote( uid ) )
            dispatch( deactivateNote() )
            dispatch( setFilterTag("") )
            dispatch( setNotesInView() )

        } catch( error ) {
            console.log('Error al archivar la nota', error)
        }
        
        dispatch( setIsLoading( false ) )

    }
}