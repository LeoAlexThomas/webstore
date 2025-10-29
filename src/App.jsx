import { Fragment, useState } from "react";
import HeaderSection from "./Components/HeaderSection";
import Products from "./Components/Products";
import { CiWarning } from "react-icons/ci";
import { FaCartPlus } from "react-icons/fa6";
import DialogModel from "./Components/DialogModel";
import CartCard from "./Components/CartCard";
import CustomToast from "./Components/CustomToast";

const App = () => {
  // States
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWarningOpen, setIsWarningOpen] = useState(false);
  const [isMessageOpen, setIsMessageOpen] = useState(false);

  // Cart Model Status state changer
  const handleCartOpen = () => setIsCartOpen(true);
  const handleCartClose = () => setIsCartOpen(false);

  const handleWarningModelOpen = () => setIsWarningOpen(true);
  const handleWarningModelClose = () => setIsWarningOpen(false);

  const handleMessageModelOpen = () => setIsMessageOpen(true);
  const handleMessageModelClose = () => setIsMessageOpen(false);

  const handleCartClicked = () => {
    handleCartOpen();
  };

  // Adding product to cart
  const handleAddToCardClicked = (product) => {
    if (cart.includes(product)) {
      handleWarningModelOpen();
      return;
    }
    setCart((prevCart) => [...prevCart, product]);
    handleMessageModelOpen();
  };

  // Remove product from cart
  const handleRemoveFromCart = (product) => {
    setCart(cart.filter((ele) => ele !== product));
  };

  return (
    <div className="bg-white">
      {/* Cart success toast */}
      {isMessageOpen && (
        <CustomToast
          toastId="successMessage"
          message="Added Successfully to cart"
          onToastClose={handleMessageModelClose}
          isWarningToast={false}
        />
      )}
      {/* Cart warning toast */}
      {isWarningOpen && (
        <CustomToast
          toastId="warningMessage"
          message="Item already added to the cart"
          onToastClose={handleWarningModelClose}
          isWarningToast={true}
        />
      )}
      {/* Cart Model */}
      <DialogModel
        isModelOpen={isCartOpen}
        onModelClose={handleCartClose}
        titleSection={
          <>
            <p className="text-3xl font-semibold text-[#141517]">Cart</p>
          </>
        }
        additionalButtons={
          <>
            {cart.length !== 0 && (
              <p className="text-lg font-medium justify-self-start">
                Total Cost: $
                {cart
                  .reduce((acc, cv) => {
                    return acc + cv.price;
                  }, 0)
                  .toFixed(2)}
              </p>
            )}
            <div className="w-full flex-1" />
          </>
        }
      >
        <div className="flex gap-4 flex-col max-h-[700px] overflow-y-auto ">
          {cart.length === 0 ? (
            <div className="w-full flex flex-col justify-stretch items-center gap-2 ">
              <FaCartPlus className="w-10 h-10" />
              <p className="text-base text-center">
                Please add products to cart
              </p>
            </div>
          ) : (
            cart.map((ele, index) => {
              return (
                <Fragment key={index}>
                  <CartCard
                    cart={ele}
                    onRemoveCartClicked={() => handleRemoveFromCart(ele)}
                  />
                </Fragment>
              );
            })
          )}
        </div>
      </DialogModel>

      <HeaderSection
        productsInCart={cart.length}
        onCartClicked={handleCartClicked}
      />
      <Products
        products={products}
        setProducts={setProducts}
        onAddToCardClicked={handleAddToCardClicked}
      />
    </div>
  );
};

export default App;
