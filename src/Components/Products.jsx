import { Fragment } from "react";
import ProductCard from "./ProductCard";
import { HiOutlineEmojiSad } from "react-icons/hi";
import useApiCall from "../hooks/useApiCall";
import { MdErrorOutline } from "react-icons/md";

const Products = ({ onAddToCardClicked }) => {
  // Custom hook for api call
  const { item, error, isLoading } = useApiCall({
    url: "https://fakestoreapi.com/products",
  });

  if (error) {
    return (
      <div className="flex flex-col gap-2 justify-center items-center h-screen">
        <MdErrorOutline className="text-red-400 w-10 h-10" />
        <p className="text-base font-medium text-center text-red-400">
          Something went wrong
        </p>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="flex flex-col gap-2 justify-center items-center h-screen">
        <i className="fa-solid fa-spinner fa-spin-pulse"></i>
        <p className="text-base font-medium text-center">Loading</p>
      </div>
    );
  }

  const products = item ?? [];
  return (
    <div className="max-w-[1440px] mx-auto my-6 ">
      <h2 className="text-3xl font-bold px-4 mb-5">Products</h2>
      {products === null || products.length === 0 ? (
        <div className="flex justify-center p-4 items-center flex-col h-screen">
          <HiOutlineEmojiSad className="w-8 h-8" />
          <p className="text-lg text-center">Products not found</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 p-4 md:grid-cols-2 lg:grid-cols-3  gap-8 h-full overflow-y-auto">
          {products.map((prod) => (
            <Fragment key={prod.id}>
              <ProductCard
                product={prod}
                onAddToCartClicked={() => onAddToCardClicked(prod)}
              />
            </Fragment>
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
