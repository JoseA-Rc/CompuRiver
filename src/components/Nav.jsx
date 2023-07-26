import { FaHive, FaBars } from "react-icons/fa";
import { CiSearch, CiLogout } from "react-icons/ci";
import { BsPerson, BsCart4 } from "react-icons/bs";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SidebarContext } from '../contexts/SidebarContext'
import { CartContext } from '../contexts/CartContext'
import { ProductContext } from "../contexts/ProductContext";

export const Nav = ({ product }) => {
  const [open, setOpen] = useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);
  const { products } = useContext(ProductContext);
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [usuario, setUsuario] = useState(null)
  const [selectedProductId, setSelectedProductId] = useState(null);

  let salir = <CiLogout/>;

  let username = "";

  useEffect(() => {
    const storedUsersString = localStorage.getItem('user');
    const storedUsersArray = JSON.parse(storedUsersString);

    if (storedUsersArray && storedUsersArray.length > 0) {
      setUsuario(storedUsersArray[0].username);
    }
  }, []);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);

    // Filtrar la lista de productos por el nombre de búsqueda en tiempo real
    const filteredProducts = products.filter((product) =>
      product.nombre.toLowerCase().includes(value.toLowerCase())
    );
    setSearchResults(filteredProducts);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Realizar alguna acción cuando se envíe el formulario (opcional)
  };


  return (
    <div className="nav">
      <div className="flex justify-between items-center lg:mx-28 mx-4 md:mx-6 md:my-0 my-2 p-4">
        <div className="cursor-pointer flex flex-grow md:hidden">
          <div
            className="text-2xl text-indigo-500"
            onClick={() => setOpen(!open)}
          >
            <FaBars />
          </div>
        </div>
        <div className="md:hidden">
          <div
            className={`h-screen flex bg-neutral-50 fixed left-0 mt-6 transition-all duration-100 ${
              open ? "w-[60%]" : "w-0"
            } py-16 shadow-2xl`}
          >
            {open && (
              <div className="flex justify-center items-center w-full flex-col">
                <form action="" className="flex flex-col gap-6 flex-grow w-full px-6">
                  <div className="">
                    <label className="block mb-2 text-sm font-medium text-gray-900">
                      Username
                    </label>
                    <input
                      type="text"
                      id="first_name"
                      className="bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 transition-all duration-200 "
                      required
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 ">
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      className="bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 transition-all duration-200 "
                      required
                    />
                  </div>
                  <button className="relative inline-flex items-center justify-center p-0.5  mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 w-full">
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 w-full">
                      Ingresar
                    </span>
                  </button>
                </form>
                <Link to={'/registro'}>
                  <div className="flex items-center justify-end animate-bounce">
                      <h1 className="text-lg font-medium hover:text-indigo-500">CERRAR SESIÓN</h1>
                  </div>
                </Link>
              </div>
            )}
          </div>
        </div>
        <Link to={'/'}>
          <div className="flex items-center">
            <div className="text-indigo-500 font-medium text-3xl mr-2">
              <FaHive />
            </div>
            <h1 className="text-indigo-500 font-medium text-3xl">CompuRiver</h1>
          </div>
        </Link>
        <div></div>
        <div className="grid grid-cols-1 ml-60">
          <div className="flex justify-center">
            <div className="text-indigo-500 text-3xl lg:mx-2">
              <CiSearch />
            </div>
            <form onSubmit={handleSearchSubmit}>
              <input
                type="text"
                placeholder="Buscar componentes"
                className="bg-black text-white lg:w-72 lg:mx-2 md:text-center focus:outline-none lg:text-start"
                value={searchValue}
                onChange={handleSearchChange}
              />
            </form>
          </div>
          {/* Resultados de búsqueda */}
          <Link to={selectedProductId ? `/product/${selectedProductId}` : "#"}>
            {searchValue && searchResults.length > 0 && (
              <div className="absolute overflow-scroll overflow-x-auto h-[500px] bg-white mt-2 p-2 rounded shadow-md">
                <h2 className="text-xs font-semibold">Resultados de búsqueda:</h2>
                <ul className="">
                  {searchResults.map((product) => (
                    <li className="border-b-2 py-1 flex items-center gap-4" key={product.idProducto} onClick={() => setSelectedProductId(product.idProducto)}>
                      <img src={product.image} alt="" className="w-[50px]" /> {product.nombre}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </Link>
        </div>
        <div className="items-center justify-end flex  flex-grow ">
          <Link to={'/login'}>
            <div className=" items-center mx-2 ml-0 hidden md:flex">
              <div className="text-indigo-500 text-3xl" onClick={() => localStorage.removeItem('user')}>
              {usuario === null ? <BsPerson /> : (salir ? <CiLogout/> : <BsPerson />)}
              </div>
              <div className="mx-2 border-r-[1px] border-indigo-300 md:block hidden">
                <h1 className="mr-4 text-white">{`${usuario == null ? 'Login' : usuario}`}</h1>
              </div>
            </div>
          </Link>

          <div onClick={() => setIsOpen(!isOpen)} className='cursor-pointer flex relative'>
            <BsCart4 className='text-indigo-500 text-3xl ' />
            <div className='bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center'>
              {itemAmount}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
