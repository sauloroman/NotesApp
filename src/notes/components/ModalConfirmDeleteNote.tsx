import React from 'react'
import { RiDeleteBin2Line } from "react-icons/ri";
import { ModalLayout } from '../layout/ModalLayout'
import { useNotes, useUi } from '../../hooks'

export const ModalConfirmDeleteNote: React.FC = () => {

    const { hideModal } = useUi()
    const { deleteNote } = useNotes()

    const onDeleteNote = () => {
        deleteNote()
        hideModal()
    }

    return (
        <ModalLayout>
            <div className="flex gap-4 items-center mb-4">
                <div className="bg-red-100 p-2 dark:text-gray-950 rounded-lg">
                    <RiDeleteBin2Line className='text-xl' />
                </div>
                <p className='font-semibold text-lg'>Eliminar Nota</p>
            </div>
            <div className="m-6 text-gray-600 dark:text-white">
                <p className='font-semibold text-gray-800 mb-1 dark:text-white'>¿Estás seguro de que deseas eliminar esta nota?</p>
                <p>Esta acción ya no podrá ser revertida.</p>
            </div>
            <div className="flex justify-end gap-5 items-center">
                <button onClick={hideModal} className='p-2 dark:border-gray-700 dark:hover:bg-gray-500 border border-gray-300 transition-colors duration-200 rounded-md cursor-pointer hover:bg-gray-100'>
                    Cancelar
                </button>
                <button onClick={ onDeleteNote } className='p-2 border dark:border-red-500 bg-red-500 text-white transition-colors duration-200 rounded-md cursor-pointer hover:bg-red-800'>
                    Eliminar
                </button>
            </div>
        </ModalLayout>
    )
}
