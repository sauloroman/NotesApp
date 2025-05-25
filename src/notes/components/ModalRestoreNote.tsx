import React from 'react'
import { ModalLayout } from '../layout/ModalLayout'
import { LuArchiveRestore } from "react-icons/lu";
import { useNotes, useUi } from '../../hooks';

export const ModalRestoreNote: React.FC = () => {

    const { hideModal, restoreNoteUid } = useUi()
    const { dearchivateNote } = useNotes()

    const onRestoreNote = () => {
        dearchivateNote( restoreNoteUid )
        hideModal()
    }

    return (
        <ModalLayout>
            <div className="flex gap-4 items-center mb-4">
                <div className="bg-violet-200 dark:text-gray-950 p-2 rounded-lg">
                    <LuArchiveRestore className='text-xl' />
                </div>
                <p className='font-semibold text-lg'>Recuperar Nota</p>
            </div>
            <div className="m-6 text-gray-600 dark:text-white">
                <p className='font-semibold text-gray-800 mb-1 dark:text-white'>¿Estás seguro de que quieres recuperar esta nota?</p>
                <p>Puedes volver a archivarla en cualquier otro momento.</p>
            </div>
            <div className="flex justify-end gap-5 items-center">
                <button onClick={hideModal} className='p-2 border dark:border-gray-700 dark:hover:bg-gray-500 border-gray-300 transition-colors duration-200 rounded-md cursor-pointer hover:bg-gray-100'>
                    Cancelar
                </button>
                <button onClick={onRestoreNote} className='p-2 border dark:border-violet-500 bg-violet-500 text-white transition-colors duration-200 rounded-md cursor-pointer hover:bg-violet-800'>
                    Recuperar
                </button>
            </div>
        </ModalLayout>
    )
}
