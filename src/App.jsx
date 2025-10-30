import { useState } from "react";
import HeaderSection from "./Components/HeaderSection";
import Products from "./Components/Products";
import DialogModel from "./Components/DialogModel";
import CustomToast from "./Components/CustomToast";
import CartSection from "./Components/CartSection";
import CartFooterSection from "./Components/CartFooterSection";

const App = () => {
  // States
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
          <p className="text-3xl font-semibold text-[#141517]">Cart</p>
        }
        additionalButtons={<CartFooterSection cart={cart} />}
      >
        <CartSection cart={cart} onRemoveFromCart={handleRemoveFromCart} />
      </DialogModel>

      {/* Nav section  */}
      <HeaderSection
        productsInCart={cart.length}
        onCartClicked={handleCartClicked}
      />
      {/* Products list section */}
      <Products onAddToCardClicked={handleAddToCardClicked} />
    </div>
  );
};

export default App;
