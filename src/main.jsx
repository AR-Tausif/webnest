// main.tsx or main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { NextUIProvider } from '@nextui-org/react'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Router'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NextUIProvider>
      <main className="">
        <RouterProvider router={router} />
      </main>
    </NextUIProvider>
  </React.StrictMode>,
)