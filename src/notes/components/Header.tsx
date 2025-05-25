import React from 'react'
import { InputSearchNote } from './'
import { GoGear } from 'react-icons/go'
import { useNavigatePage, useUi } from '../../hooks'
import { TitlePage } from '../../store/ui/ui.slice'

export const Header: React.FC = () => {

  const { goSettings } = useNavigatePage()
  const { titlePage } = useUi()

  return (
    <header className='border-b border-gray-200 p-4 h-16 fixed top-0 bg-white w-[calc(100%-16rem)] dark:bg-gray-900 dark:text-white dark:border-gray-700'>
        
        <div className="flex justify-between items-center">
            <h1 className='font-bold text-2xl'>{titlePage}</h1>
            
            <div className="flex items-center gap-4">
                { titlePage === TitlePage.allNotes &&  <InputSearchNote />}
                <GoGear className='text-xl cursor-pointer' onClick={goSettings} />
            </div>
        </div>

    </header>
  )
}
