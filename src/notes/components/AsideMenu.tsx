import React from 'react'
import { TagList, MenuPages } from './'
import { useUi } from '../../hooks'
import { TitlePage } from '../../store/ui/ui.slice'
import logoDark from '../../assets/img/logo-notes-dark.png'
import logo from '../../assets/img/logo-notes.png'

export const AsideMenu: React.FC = () => {

  const { titlePage, theme } = useUi()

  return (
    <aside className='fixed top-0 h-screen bg-white w-64 border-r border-gray-300 p-4 dark:bg-gray-900 dark:border-gray-700 left-[-16rem] lg:left-0 transition-all duration-300 ease-in-out z-10'>
        <div className="flex h-16">
          {
            theme === 'dark'
            ? <img src={logoDark} alt="Logo App" className='h-20 mt-[-20px]'  />
            : <img src={logo} alt="Logo App" className='h-20 mt-[-20px]'  />
          } 
        </div>     
        <div className='pb-4 border-b border-gray-300'>
            <MenuPages />
        </div>
        <div className='pt-4'>
          { titlePage === TitlePage.allNotes && <TagList />}
        </div>
    </aside>
  )
}
