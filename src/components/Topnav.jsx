import { RiMapPinLine,RiTruckLine,RiStarSmileLine } from "react-icons/ri";

export const TopNav = () => {
  return (
    <div className="topnav">

      <div className="md:flex justify-between md:py-4 text-gray-400 lg:mx-28 hidden md:mx-6 md:text-sm lg:text-base">
        <p className="">Bienvenido al mundo de CompuRiver!</p>
        <nav className="flex">
          <div className="flex justify-center items-center border-r-[1px] border-indigo-300 lg:px-4 pl-0 ">
            <div className="text-indigo-500 text-lg">
              <RiMapPinLine/>
            </div>
            <h1 className="lg:mx-2 md:mx-[4px]">Delivery al <b className="font-medium text-gray-500">999-999-999</b></h1>
          </div>
          <div className="flex justify-center items-center lg:px-4 pr-0 md:px-[6px]">
            <div className="text-indigo-500 text-lg">
              <RiStarSmileLine/>
            </div>
            <h1 className="lg:mx-2 md:mx-[4px] mr-0">Todas las ofertas</h1>
          </div>
        </nav>
      </div>
    </div>
  )
}