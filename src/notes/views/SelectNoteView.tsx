import React from 'react'
import { BtnArchivateNote, BtnDeleteNote, FormUpdateNote } from '../components';

export const SelectNoteView: React.FC = () => {
  return (
    <div className='lg:grid lg:grid-cols-4 lg:min-h-screen mt-10 border-t border-gray-300 dark:border-gray-700'>
      <div className="lg:col-span-3">
        <FormUpdateNote />
      </div>
      <div className="col-span-1 p-4 border-l border-gray-300 dark:border-gray-700">
        <div className="flex lg:flex-col gap-2">
          <BtnArchivateNote />
          <BtnDeleteNote />
        </div>
      </div>
    </div>
  )
}
