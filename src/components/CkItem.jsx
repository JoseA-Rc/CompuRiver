import React from 'react'
import { useContext } from 'react';
// Importamos Icons
import {IoMdAdd, IoMdClose, IoMdRemove} from 'react-icons/io'
// Importamos CartContext
import { CartContext } from '../contexts/CartContext';

const CkItem = ({item}) => {
  const {removeCart, increaseCart, descreaseCart} = useContext(CartContext)
  // Destructure item
  const {idProducto, nombre, image, precio, amount} = item; 
  return (
    <div className='bg-white flex gap-x-4 py-2 lg:px-4 border-b border-gray-400 w-full font-ligh'>
      <div className='w-full min-h-[120px] flex items-center gap-x-4'>
        {/* image */}
        <img className='max-w-[60px]' src={image} alt="" />
        <div className='w-full flex flex-col'>
          <div className='flex justify-between mb-2'>
            {/* titulo */}
            <div className='text-sm uppercase font-medium max-w-[240px] text-primary' >{nombre}</div>
            {/* remover producto */}
            <div onClick={() => removeCart(idProducto)} className='text-xl cursor-pointer'>
              <IoMdClose className='text-gray-500 hover:text-red-500 transition'/>
            </div>
          </div>

          <div className='flex gap-x-2 h-[36px] text-sm'>
            <div className='flex flex-1 max-w-[100px] items-center h-full border text-primary font-medium'>
              {/* Icono restar */}
              <div onClick={() => descreaseCart(idProducto)} className='flex-1 h-full flex justify-center items-center cursor-pointer'>
                <IoMdRemove/>
              </div>
              
              {/* Npumero que sube o baja dependiendo de los iconos de al lado */}
              <div className='h-full flex justify-center items-center px-2'>
                {amount}
              </div>

              {/* Icono aumentar */}
              <div onClick={() => increaseCart(idProducto)} className='flex-1 h-full flex justify-center items-center cursor-pointer'>
                <IoMdAdd/>
              </div>            
            </div>

            {/* Precio  */}
            <div className='flex-1 flex items-center justify-around'>S/. {precio}</div>
            {/* Precio Final */}
            {/* hacer el precio de 2 decimales */}
            <div className='flex-1 flex justify-end items-center text-primary font-medium'>{`S/. ${parseFloat(precio * amount).toFixed(2)}`}</div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default CkItem