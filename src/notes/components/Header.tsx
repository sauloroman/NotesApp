import React from 'react'
import { InputSearchNote } from './'
import { GoGear } from 'react-icons/go'
import { useNavigatePage, useUi } from '../../hooks'
import { TitlePage } from '../../store/ui/ui.slice'
import { MdOutlineMenu } from "react-icons/md";
import { FaSearch } from "react-icons/fa";

export const Header: React.FC = () => {

  const { goSettings } = useNavigatePage()
  const { titlePage } = useUi()

  return (
    <header className='border-b border-gray-200 lg:p-4 p-2 h-10 lg:h-16 fixed top-0 bg-white lg:w-[calc(100%-16rem)] shadow w-full dark:bg-gray-900 dark:text-white dark:border-gray-700'>
        
        <div className="flex lg:flex-col lg:flew-row lg:items-center justify-between w-full">
            <h1 className='font-bold lg:text-2xl text-sm'>{titlePage}</h1>
            
            <div className="flex items-center gap-4">
                { titlePage === TitlePage.allNotes &&  <InputSearchNote />}
                <GoGear className='text-xl cursor-pointer' onClick={goSettings} />
                <FaSearch className='text-xl cursor-pointer lg:hidden' />
                <MdOutlineMenu className='text-xl cursor-pointer' />
            </div>
        </div>

    </header>
  )
}
