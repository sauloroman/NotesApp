import React from 'react'
import { CiSearch } from 'react-icons/ci'

export const InputSearchNote: React.FC = () => {
  return (
    <form>
        <div className="w-100 flex items-center rounded-sm border border-gray-300 p-2 gap-2 text-sm">
            <CiSearch />
            <input
                type="text"
                placeholder="Buscan notas por título, contenido o etiquetas"
                className="bg-transparent outline-none w-full text-gray-600 placeholder:text-gray-400 text-xs"
                autoComplete='off'
            />
        </div>
    </form>
  )
}
