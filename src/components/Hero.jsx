import React from 'react'
import Typed from 'react-typed';

const Hero = () => {
  return (
    <div className='hero'>
      <div className='text-white'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen text-center mx-auto flex flex-col justify-center'>
          <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-4'>TIENDA TECNOLOGICA COMPURIVER</h1>
          <div className='flex justify-center items-center'>
            <p className='md:text-4xl sm:text-3xl text-xl font-bold py-4'>Venta de</p>
            <Typed className='md:text-4xl sm:text-3xl text-xl font-bold md:pl-4 pl-2' strings={['PCs','Laptops','Perifericos']} typeSpeed={120} backSpeed={120} loop/>
          </div>
          <p className='md:text-2xl text-xl font-bold text-gray-400'>
            Compuriver es una tienda líder en la venta de computadoras, laptops y componentes.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Hero;