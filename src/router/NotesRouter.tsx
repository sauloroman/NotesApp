import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { ArchivedNote, NotePage, NotesPage } from '../notes/pages'

export const NotesRouter: React.FC = () => {
  return (
    <Routes>
        <Route path='/' element={<NotesPage />} />
        <Route path='notes/:id' element={<NotePage />} />
        <Route path='notes/archived' element={<ArchivedNote />} />
        <Route path='/*' element={<Navigate to='/' />} />
    </Routes>
  )
}
