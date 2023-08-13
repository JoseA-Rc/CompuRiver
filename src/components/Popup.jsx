import React, { useContext, useEffect, useState } from 'react';
import { ProductContext } from '../contexts/ProductContext';
import '../index.css'

const Popup = () => {
  const { products } = useContext(ProductContext);
  const [idProducto, setIdProducto] = useState(null);
  const [searchProduct, setSearchProduct] = useState(null);
  const [open, setOpen] = useState(true);

  useEffect(() => {
    // Obtener los IDs de los productos
    const productIds = products.map((product) => product.idProducto);

    // Generar un número aleatorio entre 0 (incluido) y la longitud del array (excluido)
    const randomIndex = Math.floor(Math.random() * productIds.length);

    // Obtener el ID aleatorio
    const randomId = productIds[randomIndex];
    console.log(randomId);
    // Establecer el ID del producto seleccionado
    setIdProducto(randomId);
  }, [products]);

  useEffect(() => {
    // Buscar el producto que coincide con el ID aleatorio
    if (idProducto !== null) {
      const product = products.find((product) => product.idProducto === idProducto);
      setSearchProduct(product);
    }
  }, [idProducto, products]);

  return (
    <div className={`${open ? '' : 'hidden'}` }>
      <div className={`fixed z-30 w-screen flex justify-center items-center h-screen`}>
          {searchProduct ? (
            <div className='bg-gray-700 relative  h-[90%] w-[60%] shadow-2xl border border-b-gray-50 rounded-xl'>
              <div onClick={() => setOpen((open) => !open)} className='absolute right-0 top-0 p-4 cursor-pointer'>
                ❌
              </div>
              <h1 className='text-white flex justify-center items-center text-3xl pt-10 font-bold uppercase'>Nueva Oferta</h1>
              <div className='flex justify-evenly items-center pt-10'>
                <img src={searchProduct.image} alt={searchProduct.nombre} className='w-[400px] rounded-xl'/>
                <div className='flex items-center justify-center gap-4 flex-col'>
                  <h1 className='text-white flex justify-between gap-2'><p className='font-bold'>Nombre:</p>{searchProduct.nombre}</h1>
                  <h1 className='text-white flex justify-between gap-2'><p className='font-bold'>Categoria: </p>{searchProduct.nombreCategoria}</h1>
                  <h1 className='text-white flex justify-between gap-2'><p className='font-bold'>Precio: </p>{searchProduct.precio}</h1>
                </div>
              </div>
            </div>
            
          ) : (
            <p>Cargando...</p>
          )}
      </div>
    </div>
  );
};

export default Popup;