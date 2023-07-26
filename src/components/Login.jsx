import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

//LOGIN DE USUARIOS

export const Login = () => {
  const [user, Setuser] = useState([]);
  const [cliente, Setcliente] = useState(null);
  const [clienteData, SetclienteData] = useState(null);
  const [redirectToHome, setRedirectToHome] = useState(false);
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState("");
  const [contraseña, setContraseña] = useState("");


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

  function handleInput(e) {
    e.preventDefault();
    if(usuario != undefined && contraseña != undefined){
      const searchUser = user.filter((u) => u.username === usuario && u.password === contraseña)

      if(searchUser.length > 0){
        localStorage.setItem('user', JSON.stringify(searchUser))
        console.log(searchUser)
        navigate("/")
      } else{
        alert("no existe el usuario")
      }
    }
  }

  useEffect(() => {
    console.log(clienteData);
  }, [clienteData]);

  useEffect(() => {
    if (redirectToHome) {
      navigate("/"); // Redirige al usuario a la página de inicio ("/")
    }
  }, [redirectToHome, navigate]);

  return (
    <div className="login">
        <div className="flex items-center justify-center min-h-screen bg-cover">
          <div className="bg-transparent border p-8 rounded-[40px] shadow-md">
            <h2 className="flex justify-center items-center text-2xl mb-4">INICIAR SESION</h2>
            <form>
              <div className="mb-4">
                <label className="block mb-2">Username</label>
                <input type="username" id="user" className="bg-transparent w-full px-3 py-2 border rounded" onChange={(e) => setUsuario(e.target.value) }/>
              </div>
              <div className="mb-6">
                <label className="block mb-2">Contraseña</label>
                <input type="password" id="pass" className="bg-transparent w-full px-3 py-2 border rounded" onChange={(e) => setContraseña(e.target.value) }/>
              </div>
              <button onClick={handleInput} type="submit" className="w-full bg-transparent hover:bg-black text-white font-bold py-2 border rounded-[30px]">
                Iniciar sesión
              </button>
              <Link to={'/registro'} className='flex justify-between mt-2'>
                <h2>No tienes cuenta?</h2>
                <p className='text-blue-500 hover:underline'>Registrate</p>
              </Link>
            </form>
          </div>
        </div>
    </div>
  );
}