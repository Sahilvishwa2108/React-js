import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.jsx'
import './index.css'
import {Home, About, Contact} from './components'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>} >
      <Route path='' element={<Home />} />
      <Route path='About' element={<About />} />
      <Route path='Contact' element={<Contact />} />
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
