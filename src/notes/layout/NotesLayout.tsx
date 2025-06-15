import React from 'react'
import { AsideMenu, Header } from '../components'

interface NotesLayoutProps {
    children: React.ReactNode   
}

export const NotesLayout: React.FC<NotesLayoutProps> = ({ children }) => {
  return (
    <>
        <AsideMenu />

        <div className="lg:ml-64">
            <Header />
            <div className="mt-10 lg:mt-16">
              {children}
            </div>
        </div>
    </>
  )
}
