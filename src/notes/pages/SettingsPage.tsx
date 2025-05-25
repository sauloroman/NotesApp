import React, { useEffect, useState } from 'react'
import { NotesLayout } from '../layout/NotesLayout'
import { useUi } from '../../hooks'
import { TitlePage } from '../../store/ui/ui.slice'
import { SettingsFonts, SettingsMenu, SettingsTheme } from '../components'

export const SettingsPage: React.FC = () => {

  const [viewName, setViewName] = useState<string>('theme')
  const { onSetTitlePage } = useUi()

  useEffect(() => {
    onSetTitlePage(TitlePage.settings)
  }, [])

  return (
    <NotesLayout>
      <div className='h-screen grid grid-cols-4 dark:bg-gray-900 dark:text-white'>
        <div className="col-span-1 p-6 border-r border-gray-300 dark:border-gray-700">
          <h2 className='text-sm font-semibold mb-6'>Menu de opciones</h2>
          <SettingsMenu 
            viewName={viewName}
            setViewName={ setViewName } 
          />
        </div>
        <div className="col-span-3 p-6">
          {
            viewName === 'theme'
            ? (<SettingsTheme />)
            : (<SettingsFonts />)
          }
        </div>
      </div>
    </NotesLayout>
  )
}
