import React from 'react'
import { useNotes } from '../../hooks'
import { NoteArchivedCard } from './NoteArchivedCard'

export const NotesArchivedList: React.FC = () => {
  
  const { notesInView } = useNotes()

  return (
    <ul className='flex items-center gap-4 flex-wrap text-sm'>
        {
            notesInView.length > 0
            ? (
                notesInView.map( note => (
                    <NoteArchivedCard key={ note.uid } note={note} />
                ))
            )
            : (
                <li className="bg-amber-100 w-64 p-4 rounded">
                    <h2 className='font-semibold mb-2'>Sin Notas archivadas</h2>
                    <p className='text-xs text-gray-700'>Ninguna de tus notas ha sido archivada. Si decides hacerlo, aquí podrás visualizarlas</p>
                </li>
            )
        }
    </ul>
  )
}
