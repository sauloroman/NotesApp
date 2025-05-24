import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { ArchivedNote, NotesPage, SettingsPage } from '../notes/pages'

export const NotesRouter: React.FC = () => {
  return (
    <Routes>
        <Route path='/' element={<NotesPage />} />
        <Route path='notes/archived' element={<ArchivedNote />} />
        <Route path='settings' element={<SettingsPage />} />
        <Route path='/*' element={<Navigate to='/' />} />
    </Routes>
  )
}
