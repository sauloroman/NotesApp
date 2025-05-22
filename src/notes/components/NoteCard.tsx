import React from 'react'
import type { Note } from '../../store/notes/notes.slice'
import { formatDate } from '../../shared/helpers'

interface NoteCardProps {
  note: Note
}

export const NoteCard: React.FC<NoteCardProps> = ({ note }) => {

  const { createdAt, tags, title, uid } = note
  const dateFormatted = formatDate( createdAt )

  return (
    <li className='p-4 cursor-pointer transition-all hover:bg-violet-50'>
      <h3 className='text-sm font-semibold mb-2'>{title}</h3>

      <div className="flex gap-2 flex-wrap mb-2">
        {
          tags.map((tag: string) => (
            <span className='text-[10px] bg-blue-50 rounded-4xl px-2 py-1'>{tag}</span>
          ))
        }
      </div>

      <p className='text-[10px] text-gray-600 font-semibold'>{ dateFormatted }</p>
    </li>
  )
}



