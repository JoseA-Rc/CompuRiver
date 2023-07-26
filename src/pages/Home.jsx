import React, {useContext,useState} from 'react'
// Importamos ProductContext
import {ProductContext} from '../contexts/ProductContext'
// Importamos los componentes
import Product from '../components/Product'
import { Tectnico } from '../components/Tectnico';
import { TopNav } from '../components/Topnav';
import { Nav } from '../components/Nav';
import { Promo } from '../components/Promo';
import { Newfooter } from '../components/Newfooter';
import { WhatsApp } from '../components/WhatsApp';
import Hero from '../components/Hero';


const Home = () => { 
  // Obtenemos los productos de ProductContext
  const {products} = useContext(ProductContext);
  const [filtroGeneral, setFiltroGeneral] = useState('todos');

  const filteredProducts4 = products.filter(item => {
    return (
      (filtroGeneral === 'todos' || item.nombreCategoria === filtroGeneral) &&
      (item.nombreCategoria === "Laptop" || item.nombreCategoria === "Pc" || item.nombreCategoria === "Periferico")
    );
  });


  return (
    <div>
      <TopNav/>
      <Nav/>
      <Hero/>
      <Tectnico/>
      <section className='bg-white py-16'>
        <div className="container mx-auto p-8">
          
          <div className='flex justify-between items-center'>
              <div className="w-[310px] bg-black transform -skew-x-12 mb-6 m-2 lg:w-40 lg:h-8 lg:-skew-x-12">
                <p className="text-white text-center text-2xl lg:text-lg uppercase">{filtroGeneral}</p>
              </div>

              
              <select value={filtroGeneral} onChange={(e) => setFiltroGeneral(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[150px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option value="todos">Todo</option>
                <option value="Laptop">Laptop</option>
                <option value="Pc">PC</option>
                <option value="Periferico">Periférico</option>
              </select>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0'>
            {filteredProducts4.map(product => {
              return (
                <Product product={product} key={product.idProducto} />
              );
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