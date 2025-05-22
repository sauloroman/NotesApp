import React from 'react'
import { IoPricetagOutline } from 'react-icons/io5'
import { useNotes } from '../../hooks'

export const TagList: React.FC = () => {

  const { tags } = useNotes()

  return (
    <div className='text-sm h-screen overflow-y-auto'>
        <h2 className='font-semibold text-gray-500 mb-4'>Tags</h2>
        <ul className='flex flex-col gap-2'>
            {
                tags.map( tag => (
                    <li className=' flex items-center gap-2 text-gray-600  rounded-md p-2 transition-colors duration-200'>
                        <IoPricetagOutline />
                        {tag}
                    </li>
                ))
            }
        </ul>
    </div>
  )
}
