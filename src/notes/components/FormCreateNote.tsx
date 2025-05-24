import React from 'react'
import { LuTags } from "react-icons/lu";
import { GoClock } from "react-icons/go";
import { useForm } from 'react-hook-form';
import { useNotes } from '../../hooks/useNotes';
import { getTagsArray } from '../../shared/helpers';

type FormData = {
    title: string,
    content: string,
    tags: string
}

export const FormCreateNote: React.FC = () => {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormData>()

  const { createNewNote, isLoading } = useNotes()

  const onCreateNewNote = ( data: FormData ) => {
    const { tags } = data
    const tagsToSave = getTagsArray( tags )
    createNewNote({ ...data, tags: tagsToSave })
    reset()
  }

  return (
    <form onSubmit={ handleSubmit( onCreateNewNote ) }>
        <fieldset className='border-b border-gray-300 p-4 px-6'>    
            <div className='mb-4'>
                <input
                    {
                        ...register('title', {
                            required: 'El título de la nota es requerido',
                            minLength: {
                                value: 2,
                                message: 'El título debe de tener al menos 2 caracteres'
                            }
                        })
                    }
                    placeholder='Título de la nota...'
                    type="text" 
                    className='w-full p-2 border-none text-xl font-bold'
                />
                { errors.title && <span className='text-red-500 text-right block pt-1 text-xs'>{errors.title.message}</span>}
            </div>
            <div>
                <div className='flex gap-4 mb-4'>
                    <label className='text-sm w-1/8 flex gap-1 items-center'>
                        <LuTags className='text-gray-500 text-lg' />
                        Tags
                    </label>
                    <input
                        {
                            ...register('tags', {
                                required: 'Al menos una tag debe crearse',
                            })
                        }
                        placeholder='Añade etiquetas separadolas por comas'
                        className='w-full p-2 border-none text-gray-500 text-sm' 
                        type="text" 
                        />
                </div>
                { errors.tags && <span className='text-red-500 text-right block pt-1 text-xs'>{errors.tags.message}</span>}
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
                {
                    ...register('content', { 
                        required: 'El contenido de la nota es requerido'
                    })
                }
                placeholder='Escribe tu nota aquí...'
                className='w-full h-96 p-2 border-none text-sm'
            />
             { errors.content && <span className='text-red-500 text-right block pt-1 text-xs'>{errors.content.message}</span>}
        </div>
        <div className="p-4 px-6">
            <button disabled={isLoading} type='submit' className='bg-gray-800 p-2 rounded-sm text-white text-sm cursor-pointer hover:bg-gray-700'>Crear Nota</button>
        </div>
    </form>
  )
}
