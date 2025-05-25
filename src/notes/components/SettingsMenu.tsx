import React from 'react'
import { MdOutlineWbSunny } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa";
import { MdOutlineTextFields } from "react-icons/md";

interface SettingsMenuProps {
    viewName: string,
    setViewName: ( name: string ) => void
}

export const SettingsMenu: React.FC<SettingsMenuProps> = ({ viewName, setViewName }) => {
  return (
    <ul className='flex flex-col gap-4'>
        <li onClick={() => setViewName('theme')} className={`text-sm flex items-center dark:hover:bg-gray-700 justify-between cursor-pointer transition-colors duration-200 p-2 rounded-md hover:bg-violet-100 ${ viewName === 'theme' && 'bg-violet-100 dark:bg-gray-700' }`}>
            <div className='flex gap-2'>
                <MdOutlineWbSunny className='text-lg' />
                <p>Tema de color</p>
            </div>
            <FaAngleRight className='text-md' />
        </li>
        <li onClick={() => setViewName('font')}  className={`text-sm flex items-center dark:hover:bg-gray-700 justify-between cursor-pointer transition-colors duration-200 p-2 rounded-md hover:bg-violet-100 ${ viewName === 'font' && 'bg-violet-100 dark:bg-gray-700' }`}>
            <div className='flex gap-2'>
                <MdOutlineTextFields className='text-lg' />
                <p>Tema de fuente</p>
            </div>
            <FaAngleRight className='text-md' />
        </li>
    </ul>
  )
}
