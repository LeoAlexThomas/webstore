import { FaShoppingCart } from "react-icons/fa";

const HeaderSection = ({ productsInCart, onCartClicked }) => {
  return (
    <nav className="w-full shadow-lg bg-[#F4F7F7] ">
      <div className="max-w-[1440px] mx-auto px-4 py-2 flex justify-between items-center ">
        <h3 className="text-3xl font-bold">WEBSTORE</h3>
        <div className="relative cursor-pointer" onClick={onCartClicked}>
          <FaShoppingCart className="w-7 h-7" />

          <div className="absolute -top-2 -right-2 rounded-full w-6 h-6 bg-[#FF4F18] text-center flex justify-center items-center font-bold text-sm text-[#F4F6F7]">
            {productsInCart}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default HeaderSection;
