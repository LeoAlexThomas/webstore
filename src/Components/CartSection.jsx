import { Fragment } from "react";
import CartCard from "./CartCard";
import { FaCartPlus } from "react-icons/fa6";

const CartSection = ({ cart, onRemoveFromCart }) => {
  return (
    <div className="flex gap-4 flex-col max-h-[400px] sm:max-h-[700px] overflow-y-auto ">
      {cart.length === 0 ? (
        <div className="w-full flex flex-col justify-stretch items-center gap-2 ">
          <FaCartPlus className="w-10 h-10" />
          <p className="text-base text-center">Please add products to cart</p>
        </div>
      ) : (
        cart.map((ele, index) => {
          return (
            <Fragment key={index}>
              <CartCard
                cart={ele}
                onRemoveCartClicked={() => onRemoveFromCart(ele)}
              />
            </Fragment>
          );
        })
      )}
    </div>
  );
};

export default CartSection;
