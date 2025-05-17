import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AuthRouter } from './AuthRouter'
import { NotesRouter } from './NotesRouter'

export const AppRouter: React.FC = () => {
  return (
    <Routes>
        <Route path='/auth/*' element={<AuthRouter />} />
        <Route path="/*" element={<NotesRouter />} />
    </Routes>
  )
}
