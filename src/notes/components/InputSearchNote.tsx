import React, { useState } from 'react'
import { CiSearch } from 'react-icons/ci'
import { useNotes } from '../../hooks'

export const InputSearchNote: React.FC = () => {
  
  const { setNotesInPageSearch } = useNotes()
  const [search, setsearch] = useState<string>("")

  const onSearchNote = (e: React.FormEvent) => {
    e.preventDefault()
    setNotesInPageSearch(search)
  }

  return (
    <form onSubmit={ onSearchNote } className='hidden'>
        <div className="w-100 flex items-center rounded-sm border border-gray-300 p-2 gap-2 text-sm dark:border-gray-500 dark:bg-gray-900 dark:text-white">
            <CiSearch className='dark:text-white' />
            <input
                type="text"
                placeholder="Buscan notas por título, contenido o etiquetas"
                className="bg-transparent outline-none w-full font-poppins dark:placeholder:text-white dark:text-white text-gray-600 placeholder:text-gray-400 text-xs"
                autoComplete='off'
                onChange={ e => setsearch( e.target.value) }
            />
        </div>
    </form>
  )
}
