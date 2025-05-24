import React from 'react'
import { LuArchiveRestore } from "react-icons/lu";
import { useUi } from '../../hooks';
import { ModalName } from '../../store/ui/ui.slice';

interface BtnRestoreNoteProps {
  noteId: string
}

export const BtnRestoreNote: React.FC<BtnRestoreNoteProps> = ({ noteId }) => {

  const { showModal, onSetRestoreNoteUid } = useUi()

  const onRestoreNote = () => {
    showModal( ModalName.restoreNote )
    onSetRestoreNoteUid( noteId )
  }

  return (
    <button 
    onClick={ onRestoreNote } 
      className='absolute bottom-5 right-5 cursor-pointer transition-colors duration-200 p-2 rounded-full hover:bg-violet-100'>
        <LuArchiveRestore className='text-lg' />
    </button>
  )
}
