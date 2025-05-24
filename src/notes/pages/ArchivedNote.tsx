import React, { useEffect } from 'react'
import { NotesLayout } from '../layout/NotesLayout'
import { useNotes, useUi } from '../../hooks'
import { TitlePage } from '../../store/ui/ui.slice'
import { NotesArchivedList } from '../components'

export const ArchivedNote: React.FC = () => {
  
  const { getArchivedNotes } = useNotes()
  const { onSetTitlePage } = useUi()

  useEffect(() => {
    onSetTitlePage(TitlePage.archivedNotes)
    getArchivedNotes()
  }, [])

  return (
    <NotesLayout>
      <div className="p-4">
        <NotesArchivedList />
      </div>
    </NotesLayout>
  )
}
