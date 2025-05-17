import React, { useState } from 'react'
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from 'react-hook-form'
import { FaRegEye } from "react-icons/fa";

type FormData = {
  name: string,
  email: string,
  password: string,
}

export const RegisterPage: React.FC = () => {

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>()

  const [showPassword, setShowPassword] = useState<boolean>(false)

  const onRegisterUser = ( data: FormData ) => {
    console.log(data)
  }

  return (
    <AuthLayout
      title="Comienza Aquí"
      description="Únete a nosotros y comienza a crear tus notas 📗"
      message="Regístrate para obtener una cuenta"
      linkToPage="/auth/login"
      linkText="¿Ya tienes una cuenta?"
      linkText2="Inicia sesión"
    >
      <form 
        onSubmit={ handleSubmit(onRegisterUser) }
        className='mt-6' action="">

        <div className="mb-6">
          <label className='mb-2 text-gray-500 block text-left' htmlFor="name">Nombre</label>
          <input
            {
              ...register('name', {
                required: 'El nombre es obligatorio',
                minLength: {
                  value: 2,
                  message: 'El nombre debe tener al menos 2 caracteres'
                }
              })
            }
            type="text"
            placeholder="Registra tu nombre"
            className="border-1 border-gray-300 rounded-lg p-2 w-full"
          />
          {
            errors.name && (<span className='text-red-500 text-right block pt-1 text-xs'>{errors.name.message}</span>)
          }
        </div>

        <div className="mb-6">
          <label className='mb-2 text-gray-500 block text-left' htmlFor="email">Correo Electrónico</label>
          <input
            {
              ...register('email', {
                required: 'El correo electrónico es obligatorio',
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: 'El correo electrónico no es válido'
                }
              })
            }
            type="email"
            placeholder="Registra tu correo electrónico"
            className="border-1 border-gray-300 rounded-lg p-2 w-full"
          />
          { 
            errors.email && (<span className='text-red-500 text-right block pt-1 text-xs'>{errors.email.message}</span>)  
          }
        </div>

        <div className="mb-6">
          <label className='mb-2 text-gray-500 block text-left' htmlFor="password">Contraseña</label>

          <div className="border-1 border-gray-300 rounded-lg p-2 w- flex items-center justify-between">
            <input
              {
                ...register('password', {
                  required: 'La contraseña es obligatoria',
                  minLength: {
                    value: 6,
                    message: 'La contraseña debe tener al menos 6 caracteres'
                  },
                  pattern: {
                    value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
                    message: 'La contraseña debe contener al menos una letra y un número'
                  }
                })
              }
              className='w-full outline-none' 
              type={`${showPassword ? 'text' : 'password'}`}
              placeholder="Crea una contraseña"
            />
            <FaRegEye className='cursor-pointer' onClick={() => setShowPassword(!showPassword)} />
          </div>
          { errors.password && (<span className='text-red-500 text-right block pt-1 text-xs'>{errors.password.message}</span>) }

        </div>

        <button
          type="submit"
          className="p-2 w-full border-1 border-gray-300 rounded-lg transition duration-200 ease-in-out cursor-pointer bg-violet-500 text-white hover:bg-violet-600"
        >
          Registrarse
        </button>
      </form>
    </AuthLayout>
  )
}
