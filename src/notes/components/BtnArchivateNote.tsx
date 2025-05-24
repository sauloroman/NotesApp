import React from 'react'
import { RiArchiveDrawerLine } from 'react-icons/ri'
import { useNotes } from '../../hooks'

export const BtnArchivateNote: React.FC = () => {
    const { archivateNote } = useNotes()

    return (
        <button onClick={archivateNote} className='p-2 flex items-center gap-3 text-sm text-gray-800 cursor-pointer hover:bg-violet-50'>
            <RiArchiveDrawerLine />
            Archivar Nota
        </button>
    )
}
