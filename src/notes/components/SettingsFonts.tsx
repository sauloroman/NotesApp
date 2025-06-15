import React, { useRef, useState } from 'react'
import { useUi } from '../../hooks';

export const SettingsFonts: React.FC = () => {

  const poppinsButtonRef = useRef<HTMLInputElement>(null)
  const rubikButtonRef = useRef<HTMLInputElement>(null)
  const montserratButtonRef = useRef<HTMLInputElement>(null)

  const { onSetFont, font } = useUi()
  const [selectedFont, setSelectedFont] = useState<string>(font)

  const onChangeFont = ( e: React.FormEvent<HTMLFormElement> ) => {
    e.preventDefault()
    onSetFont( selectedFont )
  }

  const onSelectPoppinsFont = () => {
    setSelectedFont('poppins')
    poppinsButtonRef.current?.click()
  }

  const onSelectMontserratFont = () => {
    setSelectedFont('montserrat')
    montserratButtonRef.current?.click()
  }

  const onSelectRubikFont = () => {
    setSelectedFont('rubik')
    rubikButtonRef.current?.click()
  }

  return (
    <div>
        <header className='mb-6'>
            <h2 className='font-semibold text-md'>Tema de fuente</h2>
            <p className='text-xs'>Elige tu tema de fuente preferido</p>
        </header>
        <form onSubmit={ onChangeFont } className='flex flex-col gap-4 lg:w-[500px] w-full'>
            <div 
                onClick={ onSelectPoppinsFont } 
                className="p-4 border border-gray-300 rounded-md flex justify-between items-center cursor-pointer dark:border-gray-600 hover:bg-sky-100 dark:hover:bg-gray-600"
            >
                
                <div className='flex items-center gap-4'>
                    <div className='border rounded-md border-gray-300 p-2 flex justify-center items-center dark:border-gray-600'>
                        <p className='font-poppins'>Aa</p>
                    </div>
                    <div>
                        <h3 className='text-xs font-semibold mb-1'>Poppins</h3>
                        <p className='text-xs'>Texto de prueba de Poppins</p>
                    </div>
                </div>
                <input  
                    ref={poppinsButtonRef} 
                    className='w-10' 
                    type="radio" 
                    name='font' 
                    value={'poppins'}
                    checked={selectedFont==='poppins'} 
                    onChange={() => setSelectedFont('poppins')}
                />

            </div>

            <div onClick={ onSelectMontserratFont } className="p-4 border dark:border-gray-600 border-gray-300 rounded-md flex justify-between items-center cursor-pointer hover:bg-sky-100 dark:hover:bg-gray-600">
                <div className='flex items-center gap-4'>
                    <div className='border rounded-md border-gray-300 p-2 dark:border-gray-600 flex justify-center items-center'>
                      <p className='font-montserrat'>Aa</p>
                    </div>
                    <div>
                        <h3 className='text-xs font-semibold mb-1 font-montserrat'>Montserrat</h3>
                        <p className='text-xs font-montserrat'>Texto de prueba de Montserrat</p>
                    </div>
                </div>
                <input 
                    ref={montserratButtonRef} 
                    className='w-10' 
                    type="radio" 
                    name='font' 
                    value={'montserrat'}
                    checked={selectedFont==='montserrat'} 
                    onChange={() => setSelectedFont('montserrat')}
                />
            </div>

            <div onClick={ onSelectRubikFont } className="p-4 border dark:border-gray-600 border-gray-300 rounded-md flex justify-between items-center cursor-pointer hover:bg-sky-100 dark:hover:bg-gray-600">
                <div className='flex items-center gap-4'>
                    <div className='border rounded-md border-gray-300 p-2 dark:border-gray-600 flex justify-center items-center'>
                      <p className='font-rubik'>Aa</p>
                    </div>
                    <div>
                        <h3 className='text-xs font-semibold mb-1 font-rubik'>Rubik</h3>
                        <p className='text-xs font-rubik'>Texto de prueba de Rubik</p>
                    </div>
                </div>
                <input 
                    ref={rubikButtonRef} 
                    className='w-10' 
                    type="radio" 
                    name='font' 
                    value={'rubik'}
                    checked={selectedFont==='rubik'} 
                    onChange={() => setSelectedFont('rubik')}
                />
            </div>

            <div className="flex justify-end mt-4">
                <button type='submit' className='mb-4 bg-violet-500 cursor-pointer text-white rounded-md p-2 hover:bg-violet-600 transition-colors duration-200 text-xs font-semibold'>Aplicar cambios</button>
            </div>
        </form>
    </div>
  )
}
