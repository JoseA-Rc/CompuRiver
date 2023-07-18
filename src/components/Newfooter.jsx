import {
  FaHive,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import { BiPhoneCall } from "react-icons/bi";

export const Newfooter = () => {
  return (
    <div className="footer">
      <div className="w-full lg:px-28 md:px-6 py-8 text-zinc-100 md:block hidden">
        <div className=" flex justify-between flex-col md:flex-row">
          <div className="flex flex-col lg:w-1/3 md:w-[38%]">
            <div className="flex items-center">
              <div className="lg:text-3xl text-2xl font-bold mr-2">
                <FaHive />
              </div>
              <h1 className="lg:text-3xl text-2xl lg:my-4 md:my-2 font-bold">CompuRiver</h1>
            </div>
            <div className="w-full">
              <p className="text-sm">
                Compuriver es una tienda líder en la venta de componentes de
                computadoras y laptops. Ofrece una amplia selección de productos
                de calidad y cuenta con un equipo de expertos en tecnología que
                brindan asesoramiento personalizado. Compuriver se destaca por su
                excelente servicio al cliente y su compromiso con la satisfacción
                del usuario
              </p>
            </div>
          </div>
          <div className="flex lg:w-2/4 md:w-[60%] lg:justify-between md:justify-around md:flex-row flex-col">
            <div>
              <h1 className="">Servicio al Cliente</h1>
              <div className="text-sm ">
                <p className="font-bold my-4">Contactanos</p>
                <div className="flex items-center">
                  <div className="text-lg">
                    <FaWhatsapp />
                  </div>
                  <div className="flex flex-col items-start mx-2">
                    <p>WhatsApp</p>
                    <p>+51 999-999-999</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="text-lg">
                    <BiPhoneCall />
                  </div>
                  <div className="flex flex-col items-start mx-2">
                    <p>Llamanos</p>
                    <p>01 247-2373</p>
                  </div>
                </div>
                <div className="text-sm my-2">
                  <p className="font-bold my-2">Nuestras redes sociales</p>
                  <div className="flex w-full items-center gap-2">
                    <FaFacebook />
                    <FaTwitter />
                    <FaInstagram />
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <h1>Productos</h1>
              <ul className="text-sm my-4">
                <li className="my-2">Laptops</li>
                <li className="my-2">PCs</li>
                <li className="my-2">Componentes</li>
                <li className="my-2">Soporte Tecnico</li>
              </ul>
            </div>
            <div className="">
              <h1>Mi cuenta</h1>
              <ul className="text-sm my-4">
                <li className="my-2">Iniciar Sesion</li>
                <li className="my-2">Crear Cuenta</li>
                <li className="my-2">Libro de reclamaciones</li>
              </ul>
            </div>
          </div>
        </div>
        {/*<div className="flex justify-end items-center text-xs text-stone-50">
          <h1>© 2023 Copyright CompuRiver</h1>
    </div>*/}
      </div>
    </div>
  );
};
