import { useContext } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import { CartContext } from "../contexts/CartContext";
import { SidebarContext } from "../contexts/SidebarContext";

export const WhatsApp = () => {
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);
  return (
    <div className="flex justify-between fixed bottom-0 right-6 z-50 cursor-pointer transition-all ease-in-out delay-150  duration-300 text-center">
      <div className="bg-emerald-400 py-4 px-4 text-3xl text-stone-50 rounded-full my-6 shadow-2xl hover:scale-125">
        <div>
          <a href="https://api.whatsapp.com/send?phone=957933670" target={"_blank"}><FaWhatsapp /></a>
        </div>
      </div>
      <div onClick={() => setIsOpen(!isOpen)} className="bg-teal-400 py-4 px-4 text-3xl text-stone-50 rounded-full my-6 shadow-2xl ml-4 hover:scale-125">
          <LuShoppingCart/>
          <div className='bg-red-500 absolute -right-[-1px] -bottom-[-27px] text-[15px] w-[20px] h-[20px] text-white rounded-full flex justify-center items-center'>
            {itemAmount}
          </div>
      </div>
    </div>
  );
};
