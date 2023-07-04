import React, { useContext, useState, useEffect } from 'react'
// Importamos el contexto sidebar
import { SidebarContext } from '../contexts/SidebarContext'
// Importamos el contexto cart
import { CartContext } from '../contexts/CartContext'
// Importamos icons
import {BsBag, BsHouse} from 'react-icons/bs'
// Importamos Link
import { Link } from 'react-router-dom'
// Importamos Logo
//import Logo from '../img/logo.png'

const Header = () => {
  // Estado de Header
  const [isActive, setIsActive] = useState(false);
  const {isOpen,setIsOpen} = useContext(SidebarContext);
  const {itemAmount} = useContext(CartContext);
  // Detector de eventos
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    })
  })
  return (
    <header className={`${isActive ? 'bg-white p-4 shadow-md' : 'bg-black text-white rounded p-4'} fixed w-full z-10 transition-all`} >
      <div className='container mx-auto flex items-center justify-between h-full'>
        {/* logo */}
        <Link to={'/'}>
          <div>
            <BsHouse className='text-2xl'/>
          </div>   
        </Link>
        <Link to={'/login'}>
          <div>
            Iniciar Sesion
          </div>
        </Link>
        <Link to={'/registro'}>
          <div>
            Registrarse
          </div>
        </Link>
        {/* Cart */}
        <div onClick={() => setIsOpen(!isOpen)} className='cursor-pointer flex relative'>
          <BsBag className='text-2xl' />
          <div className='bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center'>
            {itemAmount}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header