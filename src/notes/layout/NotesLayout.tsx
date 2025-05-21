import React from 'react'
import { AsideMenu, Header } from '../components'

interface NotesLayoutProps {
    children: React.ReactNode   
}

export const NotesLayout: React.FC<NotesLayoutProps> = ({ children }) => {
  return (
    <div>
        <AsideMenu />

        <div className="ml-64">
            <Header />
            {children}
        </div>
    </div>
  )
}
