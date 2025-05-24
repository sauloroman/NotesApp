import type { Note } from "../../store/notes/notes.slice"

export const filterNotes = ( notes: Note[], filter: string ) => {
    const filterLower = filter.toLowerCase()
    const filtered = notes.filter( note => note.tags.includes( filterLower ) )
    return filtered
}