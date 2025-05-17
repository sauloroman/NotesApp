import React from 'react'
import { FaGoogle } from "react-icons/fa6";
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from 'react-hook-form';

type FormData = {
  email: string,
  password: string
}

export const LoginPage: React.FC = () => {

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>()

  const onLoginUser = ( data: FormData ) => {
    console.log(data)
  }

  return (
    <AuthLayout
      title="Bienvenido de vuelta"
      description="Estamos felices de verte nuevamente 👋"
      message="Inicia sesión con tu cuenta"
      linkToPage="/auth/register"
      linkText="¿No tienes una cuenta?"
      linkText2="Regístrate"
    >
      <button className='mt-6 p-2 w-full border-1 border-gray-300 rounded-lg transition duration-200 ease-in-out cursor-pointer hover:bg-gray-50'>
        <FaGoogle className='inline-block mr-2' />
        Continuar con Google
      </button>

      <form onSubmit={ handleSubmit(onLoginUser) }  className='mt-6' action="">

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
            placeholder="Correo electrónico"
            className="border-1 border-gray-300 rounded-lg p-2 w-full"
          />
          { errors.email && (<span className='text-red-500 text-right block pt-1 text-xs'>{ errors.email.message }</span>) }
        </div>

        <div className="mb-6">
          <label className='mb-2 text-gray-500 block text-left' htmlFor="password">Contraseña</label>
          <input
            {
              ...register('password', {
                required: 'La contraseña es obligatoria'
              })
            }
            type="password"
            placeholder="Contraseña"
            className="border-1 border-gray-300 rounded-lg p-2 w-full"
          />
          { errors.password && (<span className='text-red-500 text-right block pt-1 text-xs'>{ errors.password.message }</span>) }  
        </div>

        <button
          type="submit"
          className="p-2 w-full border-1 border-gray-300 rounded-lg transition duration-200 ease-in-out cursor-pointer bg-violet-500 text-white hover:bg-violet-600"
        >
          Iniciar sesión
        </button>
      </form>
    </AuthLayout>
  )
}
