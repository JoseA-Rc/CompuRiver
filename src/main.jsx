import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// Proveedor de Productos
import ProductProvider from './contexts/ProductContext.jsx'
// Proveedor de Sidebar
import SidebarProvider from './contexts/SidebarContext.jsx'
// Proveedor de Cart
import CartProvider from './contexts/CartContext.jsx'

import {PayPalScriptProvider} from '@paypal/react-paypal-js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <SidebarProvider>
    <PayPalScriptProvider options={{"id_cliente" : "id del cliente"}}>
      <CartProvider>
        <ProductProvider>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </ProductProvider>
      </CartProvider>
    </PayPalScriptProvider>
  </SidebarProvider>
)
