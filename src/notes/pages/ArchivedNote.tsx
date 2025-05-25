import React, { useEffect } from 'react'
import { NotesLayout } from '../layout/NotesLayout'
import { useNotes, useUi } from '../../hooks'
import { ModalName, TitlePage } from '../../store/ui/ui.slice'
import { NotesArchivedList, ModalRestoreNote } from '../components'

export const ArchivedNote: React.FC = () => {
  
  const { getArchivedNotes } = useNotes()
  const { onSetTitlePage, modal } = useUi()

  useEffect(() => {
    onSetTitlePage(TitlePage.archivedNotes)
    getArchivedNotes()
  }, [])

  return (
    <NotesLayout>
      <div className="p-4 dark:bg-gray-900 h-screen">
        <NotesArchivedList />
      </div>
      { modal.isOpen && modal.modalName === ModalName.restoreNote && <ModalRestoreNote />}
    </NotesLayout>
  )
}
