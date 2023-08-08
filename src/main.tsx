import React from 'react'
import ReactDOM from 'react-dom/client'


import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Acceuil from './pages/Acceuil.tsx'
import MyBooks from './pages/MyBooks.tsx'
import Tickets from './pages/Tickets.tsx'
import About from './pages/About.tsx'
import NewsletterPage from './pages/NewsletterPage.tsx'
import PageError from './pages/PageError.tsx'










const router = createBrowserRouter([
  
  {
    path: "/",
    element: <Acceuil/>,
    errorElement: <PageError/>
    },
    {
      path:'/my-books',
      element: <MyBooks/>
    },{
      path:'/tickets',
      element: <Tickets/>
    }
    ,{
      path:'/about',
      element: <About/>
    }
    ,{
      path:"/newsletter",
      element: <NewsletterPage/>
    }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>

     <RouterProvider router={router} />

  </React.StrictMode>,
)
