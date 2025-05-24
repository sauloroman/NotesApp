import React from 'react'
import { FormCreateNote } from '../components/FormCreateNote'

export const CreateNoteView: React.FC = () => {
  return (
    <div className='grid grid-cols-4'>
        <div className="col-span-3">
          <FormCreateNote />
        </div>
        <div className="col-span-1 p-4 border-l border-gray-300"></div>
    </div>
  )
}
