import { useState, useEffect } from "react";

//LOGIN DE USUARIOS

export const Login = () => {
  const [user, Setuser] = useState([]);
  const [cliente, Setcliente] = useState(null);
  const [clienteData, SetclienteData] = useState(null);

  useEffect(() => {
    fetch("https://compu-river.up.railway.app/api/usuario")
      .then((res) => res.json())
      .then((data) => Setuser(data));
  }, []);

  useEffect(() => {
    console.log(user);
  }, [user]);

  useEffect(() => {
    fetch(`https://compu-river.up.railway.app/api/cliente/${cliente}`)
        .then((res) => res.json())
        .then((data) => SetclienteData(data));
  }, [cliente]);

  //quiero recuperar los valores de los inputs y compararlos con los de la base de datos

  function handleInput(e) {
    e.preventDefault();
    const userInput = document.querySelector("#user").value;
    const passInput = document.querySelector("#pass").value;

    const userFound = user.find((u) => u.username === userInput);
    const passFound = user.find((p) => p.password === passInput);
    if (userFound && passFound) {
      console.log("usuario encontrado con id: ", userFound.idCliente);
      Setcliente(userFound.idCliente);
    } else {
      console.log("usuario no encontrado");
    }
  }

  useEffect(() => {
    console.log(clienteData);
  }, [clienteData]);

  return (
    <form action="">
      <input type="text" id="user" />
      <input type="password" id="pass" />
      
      <div className='grid grid-cols-1 bg-black'>
        <div>
          <div className="relative z-0 mt-4 mb-4 grid grid-cols-1">
            <input type="text" className="block py-2.5 px-0 w-[120px] text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-600 appearance-none dark:text-white dark:border-gray-500 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-gray-600 peer" required/>
            <label className="absolute text-sm text-gray-600 dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Username</label>
          </div>
        </div>
              
        <div>
          <div className="relative z-0 mt-4 mb-4 grid grid-cols-1">
              <input type="password" className="block py-2.5 px-0 w-[120px] text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-600 appearance-none dark:text-white dark:border-gray-500 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-gray-600 peer" required/>
              <label className="absolute text-sm text-gray-600 dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
          </div>
        </div>
      </div>

      <button onClick={handleInput}>Ingresar</button>
    </form>
  );
};
