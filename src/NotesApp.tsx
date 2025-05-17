import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './router/AppRouter'
import { Provider } from 'react-redux'
import { store } from './store/store'

export const NotesApp: React.FC = () => {
  return (
    <div className='font-poppins'>
      <Provider store={store}>    
          <BrowserRouter>
              <AppRouter />
          </BrowserRouter>
      </Provider>
    </div>
  )
}
