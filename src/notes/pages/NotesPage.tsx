import React, { useEffect } from 'react'
import { NotesLayout } from '../layout/NotesLayout'
import { NotesList, SkeletonFormCreateNote } from '../components'
import { useUi } from '../../hooks/useUI'
import { CreateNoteView } from '../views/CreateNoteView'
import { useNotes } from '../../hooks'

export const NotesPage: React.FC = () => {
  const { openCreateNote, createNote: { isOpen, skeletonActive } } = useUi()
  const { getNotes } = useNotes()

  useEffect(() => {
    getNotes()
  }, [])

  return (
    <NotesLayout>
      <div className="grid w-full h-screen grid-cols-4">
        <div className='col-span-1 border-r border-gray-300 p-4'>
          <button onClick={openCreateNote} className='mb-4 bg-violet-500 cursor-pointer text-white rounded-md p-2 hover:bg-violet-600 transition-colors duration-200 text-sm w-full'>    
            Crear una nueva nota
          </button>
          <NotesList />
        </div>
        <div className="col-span-3">
          { skeletonActive && <SkeletonFormCreateNote /> }
          { isOpen && <CreateNoteView /> }
        </div>
      </div>
    </NotesLayout>
  )
}
