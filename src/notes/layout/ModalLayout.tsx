import React from 'react'
import { IoMdClose } from "react-icons/io";
import { useUi } from '../../hooks';

interface ModalLayoutProps {
    children: React.ReactNode
}

export const ModalLayout: React.FC<ModalLayoutProps> = ({ children }) => {

  const { hideModal } = useUi()

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(0,0,0,0.7)] px-4"
    >
      <div
        className="bg-white dark:bg-gray-800 dark:text-white rounded-2xl shadow-lg w-full max-w-lg max-h-[90vh] overflow-y-auto relative p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={ hideModal }
          className="absolute cursor-pointer dark:text-white dark:hover:text-gray-200 transition-colors duration-200 top-3 right-3 text-gray-500 hover:text-gray-800 text-xl font-bold"
        >
          <IoMdClose className='text-2xl' />
        </button>

        <div className="text-sm">
            {children}
        </div>
      </div>
    </div>
  )
}