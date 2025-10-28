import React, { useState } from "react";
import HeaderSection from "./Components/HeaderSection";
import Products from "./Components/Products";

const App = () => {
  // States
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Cart Model Status state changer
  const handleCartOpen = () => setIsCartOpen(true);
  const handleCartClose = () => setIsCartOpen(false);

  const handleCartClicked = () => {};

  return (
    <div className="bg-white">
      <HeaderSection
        productsInCart={cart.length}
        onCartClicked={handleCartClicked}
      />
      <Products products={products} setProducts={setProducts} />
    </div>
  );
};

export default App;
