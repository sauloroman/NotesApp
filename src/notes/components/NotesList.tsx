import React from 'react'
import { NoteCard } from './NoteCard'
import { useNotes } from '../../hooks'

export const NotesList: React.FC = () => {

  const { notes } = useNotes()

  return (
    <ul>
      {
        notes.length > 0
        ? (
          notes.map( note => (
            <NoteCard key={note.uid} note={note} />
          ))
        )
        : (
          <li className='bg-gray-100 p-4 rounded-md shadow-md mb-4'>
            <h2 className='font-bold text-sm text-gray-800 mb-2'>Sin Notas</h2>
            <p className='text-xs'>Aún no has creado alguna nota. Crea una para almacenar tus ideas o pensamientos </p>
          </li>
        )
      }
    </ul>
  )
}
