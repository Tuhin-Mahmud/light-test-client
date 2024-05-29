import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'


import { HelmetProvider } from 'react-helmet-async'
import AuthProvider from './provider/AuthProvider.jsx'
import { Toaster } from 'react-hot-toast'
import {

  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Route.jsx'
// import { ToastContainer } from 'react-toastify'


const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <div><Toaster /></div>
      {/* <ToastContainer /> */}
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <div className='max-w-screen-xl mx-auto'>
            {/* <RouterProvider router={router}></RouterProvider> */}
            <RouterProvider router={router}></RouterProvider>
          </div>
        </QueryClientProvider>
      </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>,
)
