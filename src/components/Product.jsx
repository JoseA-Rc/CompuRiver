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
      </div>
      {/* buttons */}
      <div className='flex justify-between items-center py-2'>
        <button onClick={() => addToCart(product, idProducto)} className=''>
          <div className='ml-10 border border-gray-950 flex justify-center items-center text-white w-12 h-12 bg-red-500'>
            <BsPlus className='text-3x1'/>
          </div>
        </button>
        <div className=''>
          <Link to={`/product/${idProducto}`} className='mr-10 border border-gray-950 w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl' >
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