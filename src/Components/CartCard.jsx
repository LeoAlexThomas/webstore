import { MdDeleteOutline } from "react-icons/md";

const CartCard = ({ cart, onRemoveCartClicked }) => {
  return (
    <div className="flex flex-col gap-4 border border-[#FF4F1880] rounded-md">
      <div className=" bg-[#FF4F1840] p-2">
        <img
          src={cart.image}
          alt=""
          className="w-[120px] h-[120px] object-contain mx-auto"
        />
      </div>
      <div className="flex flex-1 flex-col px-4 gap-3 py-2">
        <h5 className="text-lg font-bold">{cart.title}</h5>
        <p className="text-base">
          Amount: <span className="font-medium">${cart.price}</span>
        </p>
      </div>
      <div
        className="flex gap-4 mx-4 justify-center items-center rounded-md p-2 bg-[#FF4F18] mb-4 cursor-pointer"
        onClick={onRemoveCartClicked}
      >
        <MdDeleteOutline className="w-8 h-8 text-white" />
        <p className="text-lg font-medium text-white">Remove from Cart</p>
      </div>
    </div>
  );
};

export default CartCard;
