const CartFooterSection = ({ cart }) => {
  return (
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
  );
};

export default CartFooterSection;
