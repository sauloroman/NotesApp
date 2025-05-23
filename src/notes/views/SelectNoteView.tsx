import React from 'react'
import { RiArchiveDrawerLine } from "react-icons/ri";
import { FaRegTrashAlt } from "react-icons/fa";
import { FormUpdateNote } from '../components/FormUpdateNote';

export const SelectNoteView: React.FC = () => {
  return (
    <div className='grid grid-cols-4 h-screen'>
      <div className="col-span-3">
        <FormUpdateNote />
      </div>
      <div className="col-span-1 p-4 border-l border-gray-300">
        <div className="flex flex-col gap-2">
          <button className='p-2 flex items-center gap-3 text-sm text-gray-800 cursor-pointer hover:bg-violet-50'>
            <RiArchiveDrawerLine />
            Archivar Nota
          </button>
          <button className='p-2 flex items-center gap-3 text-sm text-gray-800 cursor-pointer hover:bg-violet-50'>
            <FaRegTrashAlt />
            Eliminar Nota
          </button>
        </div>
      </div>
    </div>
  )
}
