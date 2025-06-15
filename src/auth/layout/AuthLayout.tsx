import React from 'react'
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks';
import { Loader } from '../../shared/components';

interface AuthLayoutProps {
    title: string,
    description: string,
    message: string,
    linkToPage: string,
    linkText: string,
    linkText2: string,
    children: React.ReactNode;  
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({ 
  title, 
  description, 
  message, 
  linkToPage, 
  linkText, 
  linkText2, 
  children 
}) => {

  const { isLoading } = useAuth()

  return (
    <div className='text-md bg-violet-100 h-screen flex items-center justify-center dark:bg-gray-900'>
      <div className="w-full md:w-9/12 md:h-fit md:py-15 md:px-10 lg:w-lg h-full flex justify-center flex-col text-center rounded-xl p-6 bg-white shadow-md dark:bg-gray-800 dark:text-white">
        <div className='flex flex-col items-center justify-center'>
          <h1 className='text-4xl font-semibold text-gray-800 pb-2 mb-2 dark:text-white'>{title}</h1>
          <p className='text-gray-500 dark:text-gray-200'>{description}</p>
          <p className='text-gray-500 dark:text-gray-200'>{message}</p>
        </div>

        {
          isLoading 
          ? (<Loader />)
          : (
            <>
              {children}
              <p className='mt-4'>{linkText} <Link to={linkToPage} className="text-violet-500 ml-1">{linkText2}</Link></p>  
            </>
          )
        }

      </div>

    </div>
  )
}
