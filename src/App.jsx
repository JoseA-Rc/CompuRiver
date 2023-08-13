import React from 'react'
//import * as ReactDom from 'react-dom';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
// Importacion de Paginas
import Home from './pages/Home'
import ProductDetails from './pages/ProductDetails'
// Importacion de Componentes
import Sidebar from './components/Sidebar'
import Register from './components/Register'
import { Login } from './components/Login'
import MercadoPago from './components/MercadoPago'
import Popup from './components/Popup'
import Boleta from './components/Boleta'

function App() {
  return (
    <>
    <Popup/>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/registro' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/product/:id' element={<ProductDetails />} />
          <Route path='/pagar' element={<MercadoPago/>} />
          <Route path='/boleta' element={<Boleta/>} />
        </Routes>
        <Sidebar/>
    </Router>
    </>
  )
}

export default App
