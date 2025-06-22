import React from 'react'
import "./App.css"
import { Navbar } from './component/navbar/Navbar.jsx'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { ShopCategory } from './pages/ShopCategory.jsx'
import { Product } from './pages/Product.jsx'
import { Cart } from './pages/Cart.jsx'
import { LoginSignup } from './pages/LoginSignup.jsx'
import { Shop } from './pages/Shop.jsx'
import { Footer } from './component/Footer/Footer.jsx'

export const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop/>} />
        <Route path='/mens' element={<ShopCategory category="men"/>}/>
        <Route path='/womens' element={<ShopCategory category="women"/>}/>
      <Route path='/kids' element={<ShopCategory category="kid"/>}/>
      <Route path='/product' element={<Product/>}>
      <Route path=':productId' element={<Product/>}/>
      </Route>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
