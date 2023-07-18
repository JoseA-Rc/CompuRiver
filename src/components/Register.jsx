import React, { useRef, useState } from 'react'
import axios from 'axios';
import pc1Image from '../img/pc1.jpg'
import { Link } from 'react-router-dom';

const Register = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [direccion, setDireccion] = useState('');
  const [dni, setDni] = useState('');
  const [telefono, setTelefono] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  
  const [error, setError] = useState('');
  const [ok, setOk] = useState('');
  

  const primerCampoRef = useRef(null);

  const limpiarFormulario = () => {
    setNombre('');
    setApellido('');
    setDireccion('');
    setDni('');
    setTelefono('');
    setEmail('');
    setPassword('');
    setUsername('');

    primerCampoRef.current.focus();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://compu-river.up.railway.app/api/cliente', {
        nombre,
        apellido,
        direccion,
        dni,
        telefono,
        email,
        password,
        username,
      });
      setOk('Cliente Registrado')
      limpiarFormulario();
      console.log(response.data); // Aquí puedes hacer algo con la respuesta, como redirigir al usuario o mostrar un mensaje de éxito.
    } catch (error) {
      setError('Hubo un error en el registro.');
      limpiarFormulario();
      console.error(error);
    }
  };


  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:auto h-screen w-full'>
      <div className='bg-black flex flex-col justify-center items-center'>
        <form onSubmit={handleSubmit} className='max-w-[400px] w-full mx-auto p-8 px-8 rounded-lg'>
          <h2 className='text-4xl dark:text-white font-bold text-center mb-4 w-[90%] flex justify-center'>Registrate</h2>
          {error && <p className="text-red-500 flex justify-center w-[90%]">{error}</p>}
          {ok && <p className="text-green-500 flex justify-center w-[90%]">{ok}</p>}

          <div className='grid grid-cols-2'>
            <div>
              <div className="relative z-0 mt-4 mb-4 grid grid-cols-2">
                  <input ref={primerCampoRef} type="text" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)}  className="block py-2.5 px-0 w-[120px] text-sm bg-transparent border-0 border-b-2 text-white focus:outline-none" required/>
                  <label className="absolute text-sm text-white -translate-y-6 scale-75 top-3 -z-10 origin-[0]">Nombre</label>
              </div>
            </div>
              
            <div>
              <div className="relative z-0 mt-4 mb-4 grid grid-cols-2">
                  <input type="text" id="apellido" value={apellido} onChange={(e) => setApellido(e.target.value)}  className="block py-2.5 px-0 w-[120px] text-sm bg-transparent border-0 border-b-2 text-white focus:outline-none" required/>
                  <label className="absolute text-sm text-white -translate-y-6 scale-75 top-3 -z-10 origin-[0]">Apellido</label>
              </div>
            </div>
          </div>
            
          <div>
            <div className="relative z-0 mt-4 mb-4 grid grid-cols-1">
                <input type="text" id="direccion" value={direccion} onChange={(e) => setDireccion(e.target.value)}  className="block py-2.5 px-0 w-[90%] text-sm bg-transparent border-0 border-b-2 text-white focus:outline-none" required/>
                <label className="absolute text-sm text-white -translate-y-6 scale-75 top-3 -z-10 origin-[0]">Direccion</label>
            </div>
          </div>

          <div className='grid grid-cols-2'>
            <div>
              <div className="relative z-0 mt-4 mb-4 grid grid-cols-2">
                <input type="text" id="dni" value={dni} onChange={(e) => setDni(e.target.value)} className="block py-2.5 px-0 w-[120px] text-sm bg-transparent border-0 border-b-2 text-white focus:outline-none" required/>
                <label className="absolute text-sm text-white -translate-y-6 scale-75 top-3 -z-10 origin-[0]">Dni</label>
              </div>
            </div>
              
            <div>
              <div className="relative z-0 mt-4 mb-4 grid grid-cols-2">
                  <input type="text" id="telefono" value={telefono} onChange={(e) => setTelefono(e.target.value)}  className="block py-2.5 px-0 w-[120px] text-sm bg-transparent border-0 border-b-2 text-white focus:outline-none" required/>
                  <label className="absolute text-sm text-white -translate-y-6 scale-75 top-3 -z-10 origin-[0]">Telefono</label>
              </div>
            </div>
          </div>
            
          <div>
            <div className="relative z-0 mt-4 mb-4 grid grid-cols-1">
                <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)}  className="block py-2.5 px-0 w-[90%] text-sm bg-transparent border-0 border-b-2 text-white focus:outline-none" required/>
                <label className="absolute text-sm text-white -translate-y-6 scale-75 top-3 -z-10 origin-[0]">Email</label>
            </div>
          </div>
            
          <div className='grid grid-cols-2'>
            <div>
              <div className="relative z-0 mt-4 mb-4 grid grid-cols-2">
                  <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className="block py-2.5 px-0 w-[120px] text-sm bg-transparent border-0 border-b-2 text-white focus:outline-none" required/>
                  <label className="absolute text-sm text-white -translate-y-6 scale-75 top-3 -z-10 origin-[0]">Password</label>
              </div>
            </div>
              
            <div>
              <div className="relative z-0 mt-4 mb-4 grid grid-cols-2">
                  <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)}  className="block py-2.5 px-0 w-[120px] text-sm bg-transparent border-0 border-b-2 text-white focus:outline-none" required/>
                  <label className="absolute text-sm text-white -translate-y-6 scale-75 top-3 -z-10 origin-[0]">Username</label>
              </div>
            </div>
          </div>

          <button type="submit" className='w-[90%] my-5 py-2 bg-teal-500 shadow-lg  shadow-teal-500/50'>Registrar</button>
          <Link to={'/login'}>
            <p className='text-white hover:text-blue-500 hover:underline mt-4 ml-40'>Iniciar sesión</p>
          </Link>
        </form>
      </div>
      <div className='hidden sm:block'>
        <img className='w-full h-full object-cover' src={pc1Image} alt="" />
      </div>
    </div>
  )
}

export default Register