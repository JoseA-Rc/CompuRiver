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

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/registro' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/product/:id' element={<ProductDetails />} />
          <Route path='/pagar' element={<MercadoPago/>} />
        </Routes>
        <Sidebar/>
      </Router>
    </>
  )
}

export default App
