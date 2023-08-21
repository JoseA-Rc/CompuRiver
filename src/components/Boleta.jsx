import React, { useEffect, useState } from 'react';
import html2pdf from 'html2pdf.js';

const Boleta = () => {
  const [cartData, setCartData] = useState([]);
  const [nombre, setNombre] = useState([]);
  const [apellido, setApellido] = useState([]);
  const [numeroBoleta, setNumeroBoleta] = useState('');
  const [fechaEmision, setFechaEmision] = useState('');

  useEffect(() => {
    // Recuperar datos del "local storage" al cargar el componente
    const cart = JSON.parse(localStorage.getItem('cart'));
    setCartData(cart);
  }, []);
  
  useEffect(() => {
    const storedUsersString = localStorage.getItem('user');
    const storedUsersArray = JSON.parse(storedUsersString);

    if (storedUsersArray && storedUsersArray.length > 0) {
      setNombre(storedUsersArray[0].username);
      setApellido(storedUsersArray[0].password);
    }
  }, []);

  const generateRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * 100000000); // Generar un número aleatorio entre 0 y 99,999,999
    const formattedNumber = String(randomNumber).padStart(8, '0'); // Rellenar con ceros a la izquierda hasta tener 8 dígitos
    setNumeroBoleta(formattedNumber);
  };

  const generateCurrentDateTime = () => {
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString();
    const formattedTime = currentDate.toLocaleTimeString();
    setFechaEmision(`${formattedDate} - ${formattedTime}`);
  };

  useEffect(() => {
    generateRandomNumber(); // Generar el número de boleta aleatorio al cargar el componente
    generateCurrentDateTime(); // Generar la fecha y hora actual al cargar el componente
  }, []);

  const handleDownloadPDF = () => {
    const element = document.getElementById('boleta-container');
    const opt = {
      margin: 25,
      filename: 'boleta.pdf',
      image: { type: 'url', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    };
    html2pdf().from(element).set(opt).save();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div id="boleta-container" className="w-[600px] h-full">
        <h1 className='flex justify-center text-2xl font-bold mb-5'>Boleta</h1>
        <div className='flex justify-between items-center w-[600px]'>
          <h1 className='uppercase font-bold'>N° Boleta: {numeroBoleta}</h1>
          <h1 className='uppercase font-bold py-2'>Cliente : {nombre} {apellido}</h1>
        </div>
        <p className='uppercase font-bold pb-2'>Fecha Emisión: {fechaEmision}</p>
        <table className="border border-black">
          <thead className="bg-black text-white">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase">Producto</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase">Precio</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase">Cantidad</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase">SubTotal</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase">Imagen</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-black">
            {cartData.map((item, index) => (
              <tr key={index}>
                <td className="px-6 py-4">
                  <div className="text-sm">{item.nombre}</div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm">S/.{item.precio}</div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm text-center">{item.amount}</div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm">S/.{item.precio * item.amount}</div>
                </td>
                <td className="px-6 py-4">
                  <img src={item.image} alt={item.nombre} className="h-16 w-16 object-contain" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="text-xl font-bold mt-4">Total: S/.{cartData.reduce((acc, item) => acc + parseFloat(item.precio * item.amount), 0)}</p>
      </div>
      <div className='mt-4 w-[600px]'>
        <button onClick={handleDownloadPDF} className="w-[140px] h-[40px] bg-red-600 hover:bg-black text-white text-center rounded">
          Descargar PDF
        </button>
      </div>
    </div>
  );
};

export default Boleta;









