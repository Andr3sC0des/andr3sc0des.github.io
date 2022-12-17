import React from 'react'
import ReactDOM from 'react-dom/client'
import Footer from './components/Footer'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './styles.sass'
import About from './components/About'
import NotFound from './components/NotFound'

const router = createBrowserRouter([
  {
    path: '/',
    element: [
      <Navbar key={1} />,
      <Header key={2} />,
      <Projects key={3} />,
      <Footer key={4} />
    ]
  },
  {
    path: '/about',
    element: [
      <Navbar key={1} />,
      <About key={2} />,
      <Footer key={3} />
    ]
  },
  {
    path: '*',
    element: [
      <Navbar key={1} />,
      <NotFound key={2} />,
      <Footer key={3} />
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
