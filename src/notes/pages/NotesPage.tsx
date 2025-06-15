import React, { useEffect } from 'react'
import { NotesLayout } from '../layout/NotesLayout'
import { NotesList, SkeletonFormCreateNote, ModalConfirmArchivateNote, ModalConfirmDeleteNote } from '../components'
import { useUi } from '../../hooks/useUI'
import { CreateNoteView } from '../views/CreateNoteView'
import { useNotes } from '../../hooks'
import { SelectNoteView } from '../views/SelectNoteView'
import { ModalName, TitlePage } from '../../store/ui/ui.slice'

export const NotesPage: React.FC = () => {
  const { 
    openCreateNote, 
    createNote: { isOpen: isOpenCreateNote, skeletonActive },
    viewNote: { isOpen: isOpenNote }
  } = useUi()
  const { getNotes, notes } = useNotes()
  const { onSetTitlePage, modal } = useUi()

  useEffect(() => {
    if ( notes.length === 0 ) {
      getNotes()
    }
    onSetTitlePage(TitlePage.allNotes)
  }, [])

  return (
    <NotesLayout>
      <div className="lg:grid w-full lg:grid-cols-4 dark:bg-gray-900 h-fit lg:min-h-screen">
        <div className='col-span-4 h-96 lg:h-fit lg:col-span-1 p-6 lg:border-r dark:border-gray-700 border-gray-300 lg:p-4'>
          <button onClick={openCreateNote} className='mb-4 bg-violet-500 cursor-pointer text-white rounded-md p-2 hover:bg-violet-600 transition-colors duration-200 text-sm w-full'>    
            Crear una nueva nota
          </button>
          <NotesList /> 
        </div>
        <div className="col-span-3 min-h-screen dark:bg-gray-900">

          { skeletonActive 
            ? <SkeletonFormCreateNote /> 
            : (
              <>
                { isOpenCreateNote && <CreateNoteView /> }
                { isOpenNote && <SelectNoteView />}
              </>
            )
          }

        </div>
      </div>
      { modal.isOpen && modal.modalName === ModalName.archivateNote && <ModalConfirmArchivateNote />}
      { modal.isOpen && modal.modalName === ModalName.deleteNote && <ModalConfirmDeleteNote />}
    </NotesLayout>
  )
}
