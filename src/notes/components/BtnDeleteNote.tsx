import React from 'react'
import { FaRegTrashAlt } from 'react-icons/fa'

export const BtnDeleteNote: React.FC = () => {
    return (
        <button className='p-2 flex items-center gap-3 text-sm text-gray-800 cursor-pointer hover:bg-violet-50'>
            <FaRegTrashAlt />
            Eliminar Nota
        </button>
    )
}
