import React, { useRef, useState } from 'react'
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import { useUi } from '../../hooks';

export const SettingsTheme: React.FC = () => {

  const lightButtonRef = useRef<HTMLInputElement>(null)
  const darkButtonRef = useRef<HTMLInputElement>(null)
  const { onSetTheme, theme } = useUi()
  const [selectedTheme, setSelectedTheme] = useState<string>(theme)

  const onChangeTheme = ( e: React.FormEvent<HTMLFormElement> ) => {
    e.preventDefault()
    onSetTheme( selectedTheme )
  }

  const onSelectLightTheme = () => {
    setSelectedTheme('light')
    lightButtonRef.current?.click()
  }

  const onSelectDarkTheme = () => {
    setSelectedTheme('dark')
    darkButtonRef.current?.click()
  }


  return (
    <div>
        <header className='mb-6'>
            <h2 className='font-semibold text-md'>Tema de color</h2>
            <p className='text-xs'>Elige tu tema preferido</p>
        </header>
        <form onSubmit={ onChangeTheme } className='flex flex-col gap-4 w-[500px]'>
            <div 
                onClick={ onSelectLightTheme } 
                className="p-4 border border-gray-300 rounded-md flex justify-between items-center cursor-pointer dark:border-gray-600 hover:bg-sky-100 dark:hover:bg-gray-600"
            >
                
                <div className='flex items-center gap-4'>
                    <div className='border rounded-md border-gray-300 p-2 flex justify-center items-center dark:border-gray-600'>
                        <IoSunnyOutline className='text-xl' />
                    </div>
                    <div>
                        <h3 className='text-xs font-semibold mb-1'>Modo Claro</h3>
                        <p className='text-xs'>Elige el clásico modo claro</p>
                    </div>
                </div>
                <input  
                    ref={lightButtonRef} 
                    className='w-10' 
                    type="radio" 
                    name='theme' 
                    value={'light'}
                    checked={selectedTheme==='light'} 
                    onChange={() => setSelectedTheme('light')}
                />

            </div>

            <div onClick={ onSelectDarkTheme } className="p-4 border dark:border-gray-600 border-gray-300 rounded-md flex justify-between items-center cursor-pointer hover:bg-sky-100 dark:hover:bg-gray-600">
                <div className='flex items-center gap-4'>
                    <div className='border rounded-md border-gray-300 p-2 dark:border-gray-600 flex justify-center items-center'>
                        <IoMoonOutline className='text-xl' />
                    </div>
                    <div>
                        <h3 className='text-xs font-semibold mb-1'>Modo Oscuro</h3>
                        <p className='text-xs'>Elige el moderno modo oscuro</p>
                    </div>
                </div>
                <input 
                    ref={darkButtonRef} 
                    className='w-10' 
                    type="radio" 
                    name='theme' 
                    value={'dark'}
                    checked={selectedTheme==='dark'} 
                    onChange={() => setSelectedTheme('dark')}
                />
            </div>

            <div className="flex justify-end mt-4">
                <button type='submit' className='mb-4 bg-violet-500 cursor-pointer text-white rounded-md p-2 hover:bg-violet-600 transition-colors duration-200 text-xs font-semibold'>Aplicar cambios</button>
            </div>
        </form>
    </div>
  )
}
