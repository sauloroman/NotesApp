import React from 'react'
import { LuArchiveRestore } from "react-icons/lu";

export const BtnRestoreNote: React.FC = () => {
  return (
    <button className='absolute bottom-5 right-5 cursor-pointer transition-colors duration-200 p-2 rounded-full hover:bg-violet-100'>
        <LuArchiveRestore className='text-lg' />
    </button>
  )
}
