import React, {useContext} from 'react'
// Importamos ProductContext
import {ProductContext} from '../contexts/ProductContext'
// Importamos los componentes
import Product from '../components/Product'
import Header from '../components/Header';
import { Tectnico } from '../components/Tectnico';
import { TopNav } from '../components/Topnav';
import { Nav } from '../components/Nav';
import { Promo } from '../components/Promo';
import { Newfooter } from '../components/Newfooter';
import { WhatsApp } from '../components/WhatsApp';


const Home = () => {
  // Obtenemos los productos de ProductContext
  const {products} = useContext(ProductContext);
  // obtenemos la categoría de ropa para hombres 
  const filteredProducts = products.filter(item => {
    return (item.nombreCategoria === "Laptop");
  })
  // obtenemos la categoría de ropa para mujeres
  const filteredProducts2 = products.filter(item => {
    return (item.nombreCategoria === "Pc");
  })
  // obtenemos la categoría de ropa para mujeres
  const filteredProducts3 = products.filter(item => {
    return (item.nombreCategoria === "Periferico");
  })

  return (
    <div>
      {/*<Header/>*/}
      <TopNav/>
      <Nav/>
      <Tectnico/>
      <section className='py-16'>
        <div className="container mx-auto p-8">

          <div className="w-79 h-10 bg-black transform -skew-x-12 flex justify-center items-center mb-6 m-2 lg:w-40 lg:h-8 lg:-skew-x-12">
            <p className="text-white text-center text-2xl lg:text-lg">LAPTOPS</p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0'>
            {filteredProducts.map(product => {
              return (
                <Product product={product} key={product.idProducto}/>
                )
              })}
          </div>


          <div className="w-79 h-10 bg-black transform -skew-x-12 flex justify-center items-center mb-6 m-2 lg:w-40 lg:h-8 lg:-skew-x-12 mt-8">
            <p className="text-white text-center text-2xl lg:text-lg">PCs</p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0'>
            {filteredProducts2.map(product => {
              return (
                <Product product={product} key={product.idProducto}/>
              )
            })}
          </div>
          

          <div className="w-79 h-10 bg-black transform -skew-x-12 flex justify-center items-center mb-6 m-2 lg:w-40 lg:h-8 lg:-skew-x-12 mt-8">
            <p className="text-white text-center text-2xl lg:text-lg">PERIFERICOS</p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0'>
            {filteredProducts3.map(product => {
              return (
                <Product product={product} key={product.idProducto}/>
              )
            })}
          </div>
        </div>
      </section>
      <Promo/>
      <Newfooter/>
      <WhatsApp/>
    </div>
  )
}

export default Home