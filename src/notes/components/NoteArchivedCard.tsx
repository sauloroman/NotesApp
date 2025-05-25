import React, { useMemo } from 'react'
import { NoteCardTags } from './NoteCardTags'
import type { Note } from '../../store/notes/notes.slice'
import { BtnRestoreNote } from './'

interface NoteArchivedCardProps {
   note: Note
}

export const NoteArchivedCard: React.FC<NoteArchivedCardProps> = ({ note }) => {
    
    const textToShowInCard = useMemo(() => {
        if ( note.content.length > 30 ) return note.content.substring(0, 100) + '...'
        return note.content
    }, [note])

    return (
        <li className='relative h-40 p-4 bg-pink-50 rounded-md border border-gray-300 w-64 text-xs flex flex-col gap-2 dark:bg-gray-900 dark:text-white dark:border-gray-700'>
            <h2 className='font-semibold mb-2'>{note.title}</h2>
            <p>{textToShowInCard}</p>
            <NoteCardTags tags={note.tags} />
            <BtnRestoreNote noteId={note.uid} />
        </li>
    )
}
