import React, { useEffect } from 'react'
import { NotesLayout } from '../layout/NotesLayout'
import { useUi } from '../../hooks'
import { TitlePage } from '../../store/ui/ui.slice'

export const SettingsPage: React.FC = () => {

  const { onSetTitlePage } = useUi()
  
  useEffect(() => {
    onSetTitlePage( TitlePage.settings )
  }, [])

  return (
    <NotesLayout>SettingsPage</NotesLayout>
  )
}
