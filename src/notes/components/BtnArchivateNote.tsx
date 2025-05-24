import React from 'react'
import { RiArchiveDrawerLine } from 'react-icons/ri'
import { useUi } from '../../hooks'
import { ModalName } from '../../store/ui/ui.slice'

export const BtnArchivateNote: React.FC = () => {
    const { showModal } = useUi()

    const onShowModal = () => {
        showModal( ModalName.archivateNote )
    }    

    return (
        <button onClick={onShowModal} className='p-2 flex items-center gap-3 text-sm text-gray-800 cursor-pointer hover:bg-violet-50'>
            <RiArchiveDrawerLine />
            Archivar Nota
        </button>
    )
}
