import React from 'react'
import { BtnArchivateNote, BtnDeleteNote, FormUpdateNote } from '../components';

export const SelectNoteView: React.FC = () => {
  return (
    <div className='grid grid-cols-4 min-h-screen'>
      <div className="col-span-3">
        <FormUpdateNote />
      </div>
      <div className="col-span-1 p-4 border-l border-gray-300">
        <div className="flex flex-col gap-2">
          <BtnArchivateNote />
          <BtnDeleteNote />
        </div>
      </div>
    </div>
  )
}
