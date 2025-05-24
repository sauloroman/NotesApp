import React from 'react'
import { IoPricetagOutline } from 'react-icons/io5'
import { useNotes } from '../../hooks'

export const TagList: React.FC = () => {

    const { tags, setFilter, filterTag } = useNotes()

    return (
        <div className='text-sm h-[30rem] overflow-y-auto  [&::-webkit-scrollbar]:hidden scrollbar-hide'>
            <h2 className='font-semibold text-gray-500 mb-4'>Tags</h2>
            <ul className='flex flex-col gap-2'>
                <li
                    onClick={() => setFilter("")}
                    key={'no-filter'}
                    className={`
                            cursor-pointer 
                            flex items-center gap-2 
                            text-gray-600  
                            rounded-md p-2 
                            transition-colors 
                            duration-200
                            hover:bg-amber-100
                            ${filterTag === "" && 'bg-amber-100'}
                        `}>
                    Sin filtros
                </li>
                {
                    tags.map(tag => (
                        <li
                            onClick={() => setFilter(tag)}
                            key={tag}
                            className={`
                            cursor-pointer 
                            flex items-center gap-2 
                            text-gray-600  
                            rounded-md p-2 
                            transition-colors 
                            duration-200
                            hover:bg-amber-100
                            ${filterTag === tag.toLowerCase() && 'bg-amber-100'}
                        `}>
                            <IoPricetagOutline />
                            {tag}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
