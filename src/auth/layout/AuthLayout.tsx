import React from 'react'
import { Link } from 'react-router-dom';

interface AuthLayoutProps {
    title: string,
    description: string,
    message: string,
    linkToPage: string,
    linkText: string,
    linkText2: string,
    children: React.ReactNode;  
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({ title, description, message, linkToPage, linkText, linkText2, children }) => {
  return (
    <div className='text-sm bg-violet-100 h-screen flex items-center justify-center'>


      <div className="w-lg text-center rounded-xl p-10 bg-white shadow-md">
        <div className='flex flex-col items-center justify-center'>
          <h1 className='text-3xl font-semibold text-gray-800 pb-2 mb-2 '>{title}</h1>
          <p className='text-gray-500'>{description}</p>
          <p className='text-gray-500'>{message}</p>
        </div>
       {children}
        <p className='mt-4'>{linkText} <Link to={linkToPage} className="text-violet-500 ml-1">{linkText2}</Link></p>
      </div>

    </div>
  )
}
