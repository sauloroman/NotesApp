import React from 'react'
import { ModalLayout } from '../layout/ModalLayout'
import { IoArchiveOutline } from "react-icons/io5";
import { useNotes, useUi } from '../../hooks';

export const ModalConfirmArchivateNote: React.FC = () => {

  const { archivateNote } = useNotes()
  const { hideModal } = useUi()

  const onArchivateNote = () => {
    archivateNote()
    hideModal()
  }

  return (
    <ModalLayout>
        <div className="flex gap-4 items-center mb-4">
            <div className="bg-violet-200 p-2 rounded-lg">
                <IoArchiveOutline className='text-xl' />
            </div>
            <p className='font-semibold text-lg'>Archivar Nota</p>
        </div>
        <div className="m-6 text-gray-600">
            <p className='font-semibold text-gray-800 mb-1'>¿Estás seguro de que deseas eliminar esta nota?</p>
            <p>Puedes encontrar las notas archivadas en la sección de archivados y recuperarlas en cualquier momento.</p>
        </div>
        <div className="flex justify-end gap-5 items-center">
            <button onClick={ hideModal } className='p-2 border border-gray-300 transition-colors duration-200 rounded-md cursor-pointer hover:bg-gray-100'>
                Cancelar
            </button>
            <button onClick={ onArchivateNote } className='p-2 border bg-violet-500 text-white transition-colors duration-200 rounded-md cursor-pointer hover:bg-violet-800'>
                Archivar
            </button>
        </div>
    </ModalLayout>
  )
}
