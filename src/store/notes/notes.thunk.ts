import type { Dispatch } from "@reduxjs/toolkit"
import type { RootState } from "../store"
import { setIsLoading } from "../auth/auth.slice"
import { collection, doc, increment, setDoc, updateDoc } from "firebase/firestore/lite"
import { FirebaseDB } from "../../firebase/config"
import { addNewNote, type Note, type Tag } from "./notes.slice"
import { deactiveCreateNote } from "../ui/ui.slice"

export const startCreatingNote = ( newNote: Note ) => {
    return async ( dispatch: Dispatch, getState: () => RootState ) => {
        const { uid } = getState().auth
        dispatch( setIsLoading( true ) )

        try {
            
            const newDoc = doc( collection( FirebaseDB, `notes-app/${uid}/notes` ) )
            await setDoc( newDoc, newNote )
            newNote.uid = newDoc.id

            dispatch( addNewNote( newNote ) )
            dispatch( deactiveCreateNote() )

            const userDocRef = doc(FirebaseDB, `notes-app/${uid}`)

            const tagUpdates: Record<string, any> = {}
            newNote.tags.forEach( ({ name }: Tag) => {
                tagUpdates[`tagIndex.${name}`] = increment(1)
            })

            await updateDoc( userDocRef, tagUpdates )

        } catch (error) {   
            console.log(error)
        }

        dispatch( setIsLoading( false ) )
    }
}