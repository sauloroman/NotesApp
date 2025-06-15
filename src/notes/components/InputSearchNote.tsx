import React, { useState } from 'react'
import { CiSearch } from 'react-icons/ci'
import { useNotes, useUi } from '../../hooks'

export const InputSearchNote: React.FC = () => {
  
  const { search: { isOpen } } = useUi()
  const { setNotesInPageSearch } = useNotes()
  const [search, setSearch] = useState<string>("")

  const onSearchNote = (e: React.FormEvent) => {
    e.preventDefault()
    setNotesInPageSearch(search)
  }

  return (
    <form onSubmit={ onSearchNote } className={`${!isOpen && 'hidden'} lg:block`}>
        <div className="lg:w-100 w-60 flex items-center rounded-sm border border-gray-300 p-2 gap-2 text-sm dark:border-gray-500 dark:bg-gray-900 dark:text-white">
            <CiSearch className='dark:text-white' />
            <input
                type="text"
                placeholder="Buscan notas por título, contenido o etiquetas"
                className="bg-transparent outline-none w-full font-poppins dark:placeholder:text-white dark:text-white text-gray-600 placeholder:text-gray-400 text-xs"
                autoComplete='off'
                onChange={ e => setSearch( e.target.value) }
            />
        </div>
    </form>
  )
}
