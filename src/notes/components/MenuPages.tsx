import React  from 'react'
import { IoArchiveOutline, IoHomeOutline } from 'react-icons/io5'
import { NavLink } from 'react-router-dom'

interface PageItemProps {
  children: React.ReactNode
  link: string,
}

const PageItem: React.FC<PageItemProps> = ({ children, link }) => {
  return (
    <NavLink
          to={link}
          className={({ isActive }) => `${isActive && 'font-semibold bg-violet-50 dark:bg-gray-700 dark:text-white'} text-gray-700 flex items-center gap-2 hover:bg-violet-50 hover:text-gray-600 rounded-md p-2 transition-colors duration-200 dark:text-white hover:dark:bg-gray-700 hover:dark:text-white
          `}
        >
          {children}
      </NavLink>
  )
}

export const MenuPages: React.FC = () => {
  return (
    <nav className='flex flex-col gap-4 text-sm'>
      <PageItem link='/'>
        <IoHomeOutline className='text-lg' />
        Notas
      </PageItem>
      <PageItem link='/notes/archived'>
        <IoArchiveOutline className='text-lg' />
        Archivadas
      </PageItem>
    </nav>
  )
}
