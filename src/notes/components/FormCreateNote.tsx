import React from 'react'
import { LuTags } from "react-icons/lu";
import { GoClock } from "react-icons/go";

export const FormCreateNote: React.FC = () => {
  return (
    <form>
        <fieldset className='border-b border-gray-300 p-4 px-6'>    
            <div className='mb-4'>
                <input
                    placeholder='Título de la nota...'
                    type="text" 
                    className='w-full p-2 border-none text-xl font-bold'
                />
            </div>
            <div className='flex gap-4 mb-4'>
                <label className='text-sm w-1/8 flex gap-1 items-center'>
                    <LuTags className='text-gray-500 text-lg' />
                    Tags
                </label>
                <input
                    placeholder='Añade etiquetas separadolas por comas'
                    className='w-full p-2 border-none text-gray-500 text-sm' 
                    type="text" 
                />
            </div>
            <div className="flex gap-4 text-sm">
                <div className='flex gap-1 items-center'>
                    <GoClock className='text-gray-500 text-lg' />   
                    Última modificación:
                </div>
                <span className='text-gray-500'>Sin Editar</span>
            </div>
        </fieldset>
        <div className='p-4 px-6 border-b border-gray-300'>
            <textarea
                placeholder='Escribe tu nota aquí...'
                className='w-full h-96 p-2 border-none text-sm'
            />
        </div>
        <div className="p-4 px-6">
            <button className='bg-gray-800 p-2 rounded-sm text-white text-sm cursor-pointer hover:bg-gray-700'>Crear Nota</button>
        </div>
    </form>
  )
}
