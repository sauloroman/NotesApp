import React from 'react'
import { FormCreateNote } from '../components/FormCreateNote'

export const CreateNoteView: React.FC = () => {
  return (
    <div className='lg:grid lg:grid-cols-4 lg:min-h-screen mt-10 border-t border-gray-300 dark:border-gray-700'>
        <div className="col-span-3">
          <FormCreateNote />
        </div>
        <div className="col-span-1 p-4 border-l border-gray-300 dark:border-gray-700"></div>
    </div>
  )
}
