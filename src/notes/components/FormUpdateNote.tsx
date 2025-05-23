import React, { useEffect, useState } from 'react'
import { useNotes, useUi } from '../../hooks'
import { useForm } from 'react-hook-form'
import { GoClock } from 'react-icons/go'
import { LuTags } from 'react-icons/lu'
import { formatDate, getTagsArray } from '../../shared/helpers'

type FormData = {
  title: string,
  content: string,
  tags: string,
}

export const FormUpdateNote: React.FC = () => {

  const { viewNote: { selected } } = useUi()
  const { updateNote } = useNotes()
  const { updatedAt, createdAt } = selected!

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors }
  } = useForm<FormData>()

  useEffect(() => {
    if ( !selected ) return

    reset({
      title: selected.title,
      content: selected.content,
      tags: selected.tags.join(', ')
    })
  }, [selected])

  const onUpdateNote = ( data: FormData ) => {
    const { tags } = data
    const tagsToSave = getTagsArray( tags )
      
    updateNote({ 
        ...data, 
        tags: tagsToSave 
    })
  }

  return (
    <form onSubmit={ handleSubmit( onUpdateNote ) }>
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
                    { errors.title && <span className='text-red-500 text-right block pt-1 text-sm'>{errors.title?.message}</span>}
                </div>
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
                <div className='flex gap-4 items-center'>
                  <div className="flex gap-4 text-sm">
                      <div className='flex gap-1 items-center'>
                          <GoClock className='text-gray-500 text-lg' />   
                          Última modificación:
                      </div>
                      <span className='text-gray-500'>{ formatDate(updatedAt) }</span>
                  </div>
                  <div className="flex gap-4 text-sm">
                      <div className='flex gap-1 items-center'>
                          <GoClock className='text-gray-500 text-lg' />   
                          Creado:
                      </div>
                      <span className='text-gray-500'>{ formatDate(createdAt) }</span>
                  </div>
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
            </div>
            <div className="p-4 px-6">
                <button type='submit' className='bg-gray-800 p-2 rounded-sm text-white text-sm cursor-pointer hover:bg-gray-700'>Actualizar Nota</button>
            </div>
        </form>
  )
}
