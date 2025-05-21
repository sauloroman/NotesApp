import React from 'react'
import logo from '../../assets/img/logo-notes.png'
import { TagList, MenuPages } from './'

export const AsideMenu: React.FC = () => {
  return (
    <aside className='fixed top-0 left-0 h-screen bg-white w-64 border-r border-gray-300 p-4'>
        <div className="flex h-16"> 
            <img src={logo} alt="Logo App" className='h-20 mt-[-20px]'  />
        </div>     
        <div className='pb-4 border-b border-gray-300'>
            <MenuPages />
        </div>
        <div className='pt-4'>
            <TagList />
        </div>
    </aside>
  )
}
