import React from 'react'
import { InputSearchNote } from './'
import { GoGear } from 'react-icons/go'
import { useNavigatePage, useUi } from '../../hooks'
import { TitlePage } from '../../store/ui/ui.slice'
import { MdOutlineMenu } from "react-icons/md";
import { FaSearch } from "react-icons/fa";

export const Header: React.FC = () => {

  const { goSettings } = useNavigatePage()
  const { titlePage, showAsideMenu, hideSearch, showSearch, search } = useUi()

  const onToggleSearch = () => {
    if ( search.isOpen ) {  
      hideSearch()
    } else {
      showSearch()
    }
  }

  return (
    <header className='border-b border-gray-200 lg:p-4 p-2 h-16 fixed top-0 bg-white lg:w-[calc(100%-16rem)] shadow w-full dark:bg-gray-900 dark:text-white dark:border-gray-700'>  
      <div className="flex flew-row items-center justify-between w-full h-12">
          <h1 className={`font-bold lg:text-2xl text-sm ${ search.isOpen && 'hidden'}`}>{titlePage}</h1>
          
          <div className={`${search.isOpen && 'justify-between w-full'} flex items-center gap-4`}>
              { titlePage === TitlePage.allNotes &&  <InputSearchNote />}
              <GoGear className={`text-xl cursor-pointer ${titlePage === TitlePage.settings && 'hidden'}`} onClick={goSettings} />
              <FaSearch onClick={ onToggleSearch } className={`text-xl cursor-pointer lg:hidden ${ (titlePage === TitlePage.settings || titlePage === TitlePage.archivedNotes) && 'hidden'}`} />
              <MdOutlineMenu onClick={ showAsideMenu } className='text-xl cursor-pointer lg:hidden' />
          </div>
      </div>
    </header>
  )
}
