import React, { useRef } from 'react'
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";

export const SettingsTheme: React.FC = () => {

  const lightButtonRef = useRef<HTMLInputElement>(null)

  const onSelectInput = () => {

  }

  return (
    <div>
        <header className='mb-6'>
            <h2 className='font-semibold text-md'>Tema de color</h2>
            <p className='text-xs'>Elige tu tema preferido</p>
        </header>
        <form className='flex flex-col gap-4 w-[500px]'>
            <div onClick={ onSelectInput } className="p-4 border border-gray-300 rounded-md flex justify-between items-center">
                
                <div className='flex items-center gap-4'>
                    <div className='border rounded-md border-gray-300 p-2 flex justify-center items-center'>
                        <IoSunnyOutline className='text-xl' />
                    </div>
                    <div>
                        <h3 className='text-xs font-semibold mb-1'>Modo Claro</h3>
                        <p className='text-xs'>Elige el clásico modo claro</p>
                    </div>
                </div>
                <input ref={lightButtonRef} className='w-10' type="radio" name='theme' value={'light'} />

            </div>

            <div className="p-4 border border-gray-300 rounded-md flex justify-between items-center">
                <div className='flex items-center gap-4'>
                    <div className='border rounded-md border-gray-300 p-2 flex justify-center items-center'>
                        <IoMoonOutline className='text-xl' />
                    </div>
                    <div>
                        <h3 className='text-xs font-semibold mb-1'>Modo Oscuro</h3>
                        <p className='text-xs'>Elige el moderno modo oscuro</p>
                    </div>
                </div>
                <input className='w-10' type="radio" name='theme' value={'dark'} />
            </div>

            <div className="flex justify-end mt-4">
                <button className='mb-4 bg-violet-500 cursor-pointer text-white rounded-md p-2 hover:bg-violet-600 transition-colors duration-200 text-xs font-semibold'>Aplicar cambios</button>
            </div>
        </form>
    </div>
  )
}
