import React from 'react'

interface ViewNoteLayoutProps {
    children: React.ReactNode,
}

export const ViewNoteLayout: React.FC<ViewNoteLayoutProps> = ({ children }) => {
  return (
    <div className='grid grid-cols-4 h-screen'>
        <div className="col-span-3">{children}</div>
    </div>
  )
}
