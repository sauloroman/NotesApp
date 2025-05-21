import React, { useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { AuthRouter } from './AuthRouter'
import { NotesRouter } from './NotesRouter'
import { useAuth } from '../hooks'
import { AuthStatus } from '../store/auth/auth.slice'

export const AppRouter: React.FC = () => {

  const { status, checkAuth } = useAuth()

  useEffect(() => {
    checkAuth()
  }, [])

  return (
    <Routes> 
        {
          status === AuthStatus.authenticated
          ? ( <Route path="/*" element={<NotesRouter />} /> )
          : ( <Route path='/auth/*' element={<AuthRouter />} /> )
        }
        <Route path='/*' element={<Navigate to={'/'} />} />
       
    </Routes>
  )
}
