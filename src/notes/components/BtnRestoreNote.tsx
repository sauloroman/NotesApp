import React from 'react'
import { LuArchiveRestore } from "react-icons/lu";
import { useNotes } from '../../hooks';

interface BtnRestoreNoteProps {
  noteId: string
}

export const BtnRestoreNote: React.FC<BtnRestoreNoteProps> = ({ noteId }) => {

  const { dearchivateNote } = useNotes()

  return (
    <button 
    onClick={ () => dearchivateNote( noteId ) } 
      className='absolute bottom-5 right-5 cursor-pointer transition-colors duration-200 p-2 rounded-full hover:bg-violet-100'>
        <LuArchiveRestore className='text-lg' />
    </button>
  )
}
