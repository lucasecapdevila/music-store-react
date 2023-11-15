import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import * as bootstrap from 'bootstrap'

import './index.css'

import { ProductosProvider } from './contexts/ProductosContext'
import { CarritoProvider } from './contexts/CarritoContext'
import { ThemeProvider } from './contexts/ThemeContext'
import Inicio from './pages/Inicio'
import Nosotros from './pages/Nosotros'
import Contacto from './pages/Contacto'
import Carrito from './pages/Carrito'
import NoEncontrada from './pages/NoEncontrada'
import Navbar from './components/Navbar'
import Alta from './pages/Alta'
import Footer from './components/Footer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ProductosProvider>
    <CarritoProvider>
      <ThemeProvider>
        <BrowserRouter>

          <Navbar />

          <Routes>
            <Route path='/' element={<Inicio />} />
            <Route path='/nosotros' element={<Nosotros />} />
            <Route path='/contacto' element={<Contacto />} />
            <Route path='/carrito' element={<Carrito />} />
            <Route path='/alta' element={<Alta />} />
            <Route path='*' element={<NoEncontrada />} />
          </Routes>

          <Footer />

        </BrowserRouter>
      </ThemeProvider>
    </CarritoProvider>
  </ProductosProvider>
)