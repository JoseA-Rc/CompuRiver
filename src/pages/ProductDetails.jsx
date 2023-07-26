import React, {useContext} from 'react'
// Importamos useParams
import { useParams } from 'react-router-dom'
import { Nav } from '../components/Nav'
import { TopNav } from '../components/Topnav'
// Importamos cartContex
import { CartContext } from '../contexts/CartContext'
// Importamos productContex
import { ProductContext } from '../contexts/ProductContext'

const ProductDetails = () => {
  // Obtenemos producto id de la url
  const {id} = useParams();
  const {products} = useContext(ProductContext);
  const {addToCart} = useContext(CartContext);

  // Obtenemos el producto individualmente
  const product = products.find(item => {
    return item.idProducto === parseInt(id);
  })

  // Si el producto no es encontrado
  if (!product) {
    return <section className='h-screen flex justify-center items-center'>Cargando...</section>
  }

  // destructure product
  //const {title, price, description, image} = product;
  const {nombre, estado, nombreCategoria, precio, marca, image} = product;

  return (
    <div>
      <TopNav/>
      <Nav/>
      <section className='pt-25 pb-12 lg:py-32 h-screen flex items-center'>
        <div className="container mx-auto">
          <div className='flex flex-col lg:flex-row items-center'>
            {/* image */}
            <div className='flex flex-1 justify-center items-center mb-8 lg:mb-0'>
              <img className='max-w-[200px] lg:max-w-sm' src={image} alt="" />
            </div>
            {/* text */}
            <div className='flex-1 text-center lg:text-left'>
              <h1 className='text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0'>{nombre}</h1>
              <div className='text-xl text-red-500 font-medium mb-6'>S/. {precio}</div>
              <p className='mb-8'>{/*description*/}</p>
              <button onClick={() => addToCart(product, product.idProducto)} className='bg-black py-4 px-8 text-white'>Agregar al carrito</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProductDetails