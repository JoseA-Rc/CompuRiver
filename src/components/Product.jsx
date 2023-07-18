import React, {useContext} from 'react'
// Importamos Link
import { Link } from 'react-router-dom'
// Importamos Icons
import {BsPlus, BsEyeFill} from 'react-icons/bs'
// Importamos CartContext
import { CartContext } from '../contexts/CartContext'



const Product = ({product}) => {
  
  const {addToCart} = useContext(CartContext)
  // Destructure Product
  //const {id, image, category, title, price} = product;
  const {idProducto, nombre, estado, nombreCategoria, precio, marca, image} = product;
  return (
    <div>
      <div className='border border-[#000000] h-[300px] mb-4 relative overflow-hidden group transition'>
        <div className='w-full h-full flex justify-center items-center'>
          {/* image */}
          <div className='w-[200px] mx-auto flex justify-center items-center'>
            <img className='max-h-[160px] group-hover:scale-110 transition duration-300' src={image} alt="" />
          </div>
        </div>

        {/* buttons */}
        <div className='absolute top-3 right-11 group-hover:right-0 p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300'>
          <button onClick={() => addToCart(product, idProducto)}>
            <div className='flex justify-center items-center text-white w-12 h-12 bg-red-500'>
              <BsPlus className='text-3x1'/>
            </div>
          </button>
          <Link to={`/product/${idProducto}`} className='w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl' >
            <BsEyeFill/>
          </Link>
        </div>
      </div>

      {/* Category, nombre and precio */}
      <div>
        <div className='text-sm capitalize text-gray-500 mb-1'>{nombreCategoria}</div>
        <Link to={`/product/${idProducto}`}>
          <h2 className='font-semibold mb-1'>{nombre}</h2>
        </Link>
        <div className='font-semibold'>S/. {precio}</div>
      </div>
    </div>
  )
}

export default Product