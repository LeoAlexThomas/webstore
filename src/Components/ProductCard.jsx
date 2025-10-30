import { FaShoppingCart } from "react-icons/fa";

const ProductCard = ({ product, onAddToCartClicked }) => {
  return (
    <div className="flex flex-col gap-4 justify-between border border-[#FF4F1840] rounded-xl overflow-hidden shadow-none hover:shadow-[0px_0px_15px_1px_#FF4F1840]">
      <div className="bg-[#FF4F1840] p-4">
        <img
          src={product.image}
          alt=""
          className="w-[200px] h-[200px] object-contain mx-auto"
        />
      </div>
      <h4 className="text-lg font-bold px-4 line-clamp-2">{product.title}</h4>
      <p className="text-base text-gray-500 px-4 line-clamp-3">
        {product.description}
      </p>
      <div className="flex gap-2 justify-between items-center">
        <div className="py-2 px-4 mx-4 max-w-fit bg-[#FF4F18BF] rounded-xl text-white">
          <p className=" text-xs  uppercase">{product.category}</p>
        </div>
        <p className="text-base px-4">
          Amount: <span className="font-bold">${product.price}</span>
        </p>
      </div>
      <div
        className="bg-[#FF4F18] mx-4 py-2 px-4 mb-4 rounded-md text-white font-medium flex justify-center items-center gap-4 cursor-pointer hover:shadow-[0px_0px_15px_3px_#00000026]"
        onClick={onAddToCartClicked}
      >
        <FaShoppingCart className="w-4 h-4" />
        Add to Cart
      </div>
    </div>
  );
};

export default ProductCard;
