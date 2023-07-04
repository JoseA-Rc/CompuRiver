import React, {createContext, useState, useEffect, Children} from 'react'

// Creamos el contexto
export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
    // Estado de productos
    const [products, setProducts] = useState([]);
    // Fetch de productos
    useEffect(() => {
        const fetchProducts = async () => {
          const response = await fetch('https://compu-river.up.railway.app/api/producto');
          const data = await response.json();
          setProducts(data);
        };
        fetchProducts();
    }, [])
    return <ProductContext.Provider value={{products}}>{children}</ProductContext.Provider>
  
}

export default ProductProvider