import React from 'react'
import { FaRegTrashAlt } from 'react-icons/fa'
import { useUi } from '../../hooks'
import { ModalName } from '../../store/ui/ui.slice'

export const BtnDeleteNote: React.FC = () => {

    const { showModal } = useUi()

    const onShowDeleteModal = () => {
        showModal( ModalName.deleteNote )
    }

    return (
        <button onClick={onShowDeleteModal} className='dark:text-white transition-colors duration-200 dark:hover:bg-gray-700 p-2 flex items-center gap-3 text-sm text-gray-800 cursor-pointer hover:bg-violet-50'>
            <FaRegTrashAlt />
            Eliminar Nota
        </button>
    )
}
