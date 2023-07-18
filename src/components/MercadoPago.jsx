import React,{ useContext, useState } from 'react';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'
import axios from "axios"

import { CartContext } from '../contexts/CartContext';
import { Nav } from './Nav';
import { TopNav } from './Topnav';
import CkItem from './CkItem';



const MercadoPago = () => {
  const {total,cart} = useContext(CartContext);

  const [preferenceId, setPreferenceId] = useState(null);
  
  initMercadoPago('TEST-440cf8e9-0243-46cd-85f0-85cb3c872001');

  const createPreference = async () => {
    try {
      const response = await axios.post("http://localhost:8080/create_preference", {
        total: total,
        quantity: 1,
      });

      const {id} = response.data;
      return id;
    } catch (error) {
      console.log(error)
    }
  }

  const handlebuy = async () => {
    const id = await createPreference();
    if (id) {
      setPreferenceId(id);
    }
  };

  return (
    <div>
      <TopNav/>
      <Nav/>
      <div className='bg-white flex justify-center items-center mt-10 w-full'>
        <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1'>
          <div className='flex-col lg:h-[300px] lg:w-[660px] md:h-[300px] md:w-[300px] h-[280px] w-[320px] lg:ml-20 ml-0 border'>
            {cart.map((item) => {
              return <CkItem item={item} key={item.idProducto} />
            })}
          </div>
          <div className='flex justify-center items-center lg:w-[400px] md:w-[350px] lg:ml-20 mt-4'>
            <div className='grid grid-cols-1'>
              <div className='flex justify-center uppercase font-semibold lg:text-2xl lg:w-[300px] lg:mt-0 md:mt-0 mt-40 :text-1xl md:w-[200px] '>
                <span className='mr-2'>Total:</span> S/. {parseFloat(total).toFixed(2)}
              </div>
              <button onClick={handlebuy} className='bg-black text-white h-10 rounded-[20px] mt-4'>
                Metodo de Pago
              </button>
              {preferenceId && <Wallet initialization={{ preferenceId }} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MercadoPago;







