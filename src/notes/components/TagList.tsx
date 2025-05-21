import React from 'react'
import { IoPricetagOutline } from 'react-icons/io5'

export const TagList: React.FC = () => {
  return (
    <div className='text-sm h-56 overflow-y-auto'>
        <h2 className='font-semibold text-gray-500 mb-4'>Tags</h2>
        <ul className='flex flex-col gap-2'>
            <li className=' flex items-center gap-2 text-gray-600  rounded-md p-2 transition-colors duration-200'>
                <IoPricetagOutline />
                Cooking
            </li>
            <li className=' flex items-center gap-2 text-gray-600  rounded-md p-2 transition-colors duration-200'>
                <IoPricetagOutline />
                Dev
            </li>
            <li className=' flex items-center gap-2 text-gray-600  rounded-md p-2 transition-colors duration-200'>
                <IoPricetagOutline />
                Fitness
            </li>
        </ul>
    </div>
  )
}
