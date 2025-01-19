import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {App} from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={ <App />}/>

      <Route path='*' element={<div className='text-center flex flex-col text-5xl py-40 '>
        <span className='text-red-500 pt-20'>404!</span>
        <span className='text-black text-3xl'>Page is not found</span>
        </div>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
