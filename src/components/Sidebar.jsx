import React, {useContext} from 'react'
// Importamos Link
import { Link } from 'react-router-dom'
// Importamos Icons
import {IoMdArrowForward} from 'react-icons/io'
import {FiTrash2} from 'react-icons/fi'
// Importamos Componentes
import CartItem from '../components/CartItem'
// Importamos SidebarContext
import {SidebarContext} from '../contexts/SidebarContext'
// Importamos CartContext
import { CartContext } from '../contexts/CartContext'



const Sidebar = () => {
  const {isOpen, handleClose} = useContext(SidebarContext);
  const {cart, clearCart, total, itemAmount } = useContext(CartContext);

  return (
    <div className={`${isOpen ? 'right-0' : '-right-full'} w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}>
      <div className='flex items-center justify-between py-6 border-b'>
        <div className='uppercase text-sm font-semibold'>Bolsa de Compra({itemAmount})</div>
        <div onClick={handleClose} className='cursor-pointer w-8 h-8 flex justify-center items-center'>
          <IoMdArrowForward className='text-2xl' />
        </div>
      </div>
      <div className='flex flex-col gap-y-1 h-[550px] lg:h-[430px] overflow-y-auto overflow-x-hidden border-b'>
        {cart.map((item) => {
          return <CartItem item={item} key={item.idProducto} />
        })}
      </div>
      <div className='flex flex-col gap-y-3 py-4 mt-4'>
        <div className='flex w-full justify-between items-center'>
          <div className='uppercase font-semibold'>
            <span className='mr-2'>Total:</span> S/. {parseFloat(total).toFixed(2)}
          </div>
          <div onClick={() => clearCart()} className='cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex justify-center items-center text:xl'>
            <FiTrash2/>
          </div>
        </div>
        <Link onClick={handleClose} to='/pagar' className='bg-black flex p-1 justify-center items-center text-white w-full font-medium '>
          Pagar
        </Link>
      </div>
    </div>
  )
}

export default Sidebar