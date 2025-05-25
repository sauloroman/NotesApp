import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { NotesApp } from "./NotesApp"
import './index.css'
import { Provider } from 'react-redux'
import { store } from './store/store'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <NotesApp />
    </Provider>
  </StrictMode>
)
