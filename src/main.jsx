import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from './App'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'

import { Navbar } from './component/navbar/Navbar.jsx'
import { ShopCategory } from './pages/ShopCategory.jsx'
import { Product } from './pages/Product.jsx'
import { Cart } from './pages/Cart'
import { LoginSignup } from './pages/LoginSignup'


createRoot(document.getElementById('root')).render(
    <>
    <App/>
    </>
)
