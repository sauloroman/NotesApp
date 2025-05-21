import React from 'react'
import { IoArchiveOutline, IoHomeOutline } from 'react-icons/io5'
import { NavLink } from 'react-router-dom'

export const MenuPages: React.FC = () => {
  return (
    <nav className='flex flex-col gap-4 text-sm'>
        <NavLink
          to="/"
          className={({ isActive }) => `${isActive && 'font-semibold bg-violet-50'} text-gray-700 flex items-center gap-2 hover:bg-violet-50 hover:text-gray-600 rounded-md p-2 transition-colors duration-200`}
        >
            <IoHomeOutline className='text-lg' />
            Notas
        </NavLink>
        <NavLink
          to="/notes/archived"
          className={({ isActive }) => `${isActive && 'font-semibold bg-violet-50'} flex items-center gap-2 text-gray-600 hover:bg-violet-50 hover:text-gray-700 rounded-md p-2 transition-colors duration-200`}
        >
            <IoArchiveOutline className='text-lg' />  
            Archivadas
        </NavLink>

    </nav>
  )
}
