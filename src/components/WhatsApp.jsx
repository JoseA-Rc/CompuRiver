import { FaWhatsapp } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import { Link } from "react-router-dom";

export const WhatsApp = () => {
  return (
    <div className="fixed bottom-0 right-6 z-50 cursor-pointer transition-all ease-in-out delay-150  duration-300 text-center">
      <div className="bg-emerald-400 py-4 px-4 text-3xl text-stone-50 rounded-full my-6 shadow-2xl hover:scale-125">
        <div>
          <FaWhatsapp />
        </div>
      </div>
    </div>
  );
};
