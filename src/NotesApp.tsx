import React, { useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './router/AppRouter'
import { useUi } from './hooks'

export const NotesApp: React.FC = () => {

  const { font, onSetFont, onSetTheme } = useUi()

  useEffect(() => {
    const font = JSON.parse(localStorage.getItem('notes-font') || 'poppins' )
    const theme = JSON.parse(localStorage.getItem('notes-theme') || 'light' )
    onSetFont( font )
    onSetTheme( theme )
  }, [])

  return (
    <div className={`${font === 'poppins' && 'font-poppins'} ${font === 'rubik' && 'font-rubik'}  ${font === 'montserrat' && 'font-montserrat'}`}>    
      <BrowserRouter>
          <AppRouter />
      </BrowserRouter>
    </div>
  )
}
