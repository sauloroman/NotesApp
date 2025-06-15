import React from 'react'
import { IoPricetagOutline } from 'react-icons/io5'
import { useNotes, useUi } from '../../hooks'

export const TagList: React.FC = () => {

    const { hideAsideMenu } = useUi()
    const { tags, setFilter, filterTag } = useNotes()

    const onSelectTag = ( value: string ) => {
        setFilter( value )
        hideAsideMenu()
    }

    return (
        <div className='text-sm h-[30rem] overflow-y-auto  [&::-webkit-scrollbar]:hidden scrollbar-hide'>
            <h2 className='font-semibold text-gray-500 mb-4 dark:text-white'>Tags</h2>
            <ul className='flex flex-col gap-2'>
                <li
                    onClick={() => onSelectTag("")}
                    key={'no-filter'}
                    className={`
                            cursor-pointer 
                            flex items-center gap-2 
                            text-gray-600  
                            rounded-md p-2 
                            transition-colors 
                            duration-200
                            hover:bg-amber-100
                            dark:text-white
                            hover:dark:bg-sky-800
                             ${filterTag === '' && 'bg-amber-100 dark:bg-sky-800'}
                        `}>
                    Sin filtros
                </li>
                {
                    tags.map(tag => (
                        <li
                            onClick={() => onSelectTag(tag)}
                            key={tag}
                            className={`
                            cursor-pointer 
                            flex items-center gap-2 
                            text-gray-600  
                            rounded-md p-2 
                            transition-colors 
                            duration-200
                            hover:bg-amber-100
                            dark:text-white
                            hover:dark:bg-sky-800
                            ${filterTag === tag.toLowerCase() && 'bg-amber-100 dark:bg-sky-800'}
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
