import { Fragment, useEffect } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import { HiOutlineEmojiSad } from "react-icons/hi";

const Products = ({ products, setProducts }) => {
  useEffect(() => {
    // Mounting Phase
    fetchData();
  }, []);

  // Fetching products
  const fetchData = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    setProducts(response.data);
  };

  return (
    <div className="max-w-[1440px] mx-auto p-4 my-6 ">
      <h2 className="text-3xl font-bold mb-5">Products</h2>
      {products.length === 0 ? (
        <div className="flex justify-center items-center flex-col h-screen">
          <HiOutlineEmojiSad className="w-8 h-8" />
          <p className="text-lg text-center">Products not found</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8 h-full overflow-y-auto">
          {products.map((prod, index) => (
            <Fragment key={`${prod.title}-${index}`}>
              <ProductCard product={prod} />
            </Fragment>
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
