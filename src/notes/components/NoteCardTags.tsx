import React from 'react'

interface NoteCardTagsProps {
    tags: string[]
}

export const NoteCardTags: React.FC<NoteCardTagsProps> = ({ tags }) => {
    return (
        <div className="flex gap-2 flex-wrap mb-2">
            {
                tags.map((tag: string) => (
                    <span key={tag} className='text-[10px] bg-blue-50 rounded-4xl px-2 py-1'>{tag}</span>
                ))
            }
        </div>
    )
}
