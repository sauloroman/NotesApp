import React from 'react'
import { InputSearchNote } from './'
import { GoGear } from 'react-icons/go'
import { useNavigatePage } from '../../hooks'

export const Header: React.FC = () => {

  const { goSettings } = useNavigatePage()

  return (
    <header className='border-b border-gray-200 p-4 h-16 fixed top-0 bg-white w-[calc(100%-16rem)]'>
        
        <div className="flex justify-between items-center">
            <h1 className='font-bold text-2xl'>Todas las Notas</h1>
            
            <div className="flex items-center gap-4">
                <InputSearchNote />
                <GoGear className='text-xl cursor-pointer' onClick={goSettings} />
            </div>
        </div>

    </header>
  )
}
