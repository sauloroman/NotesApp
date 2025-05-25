import React from 'react'
import type { Note } from '../../store/notes/notes.slice'
import { formatDate } from '../../shared/helpers'
import { useUi } from '../../hooks'
import { NoteCardTags } from './'

interface NoteCardProps {
  note: Note
}

export const NoteCard: React.FC<NoteCardProps> = ({ note }) => {

  const { createdAt, tags, title } = note
  const dateFormatted = formatDate( createdAt )
  const { selectNote, viewNote: { selected } } = useUi()
  const uid = selected?.uid ?? ''

  const onSelectNote = () => {
    selectNote( note )
  }

  return (
    <li onClick={ onSelectNote } className={`dark:bg-gray-900 dark:text-white p-4 cursor-pointer transition-all dark:hover:bg-gray-800 hover:bg-sky-100 mb-2 ${uid === note.uid && 'bg-sky-100'}`}>
      <h3 className='text-sm font-semibold mb-2'>{title}</h3>
      <NoteCardTags tags={ tags } />
      <p className='text-[10px] text-gray-600 font-semibold dark:text-gray-400'>{ dateFormatted }</p>
    </li>
  )
}



