import React, { createContext, useContext, useState } from "react";

export const CartContext = createContext(null);

const CartApi = ({ children }) => {
  const [CartCounter, setCartCounter] = useState([]);

  const cartIncrease = (item) => {
    setCartCounter([...CartCounter, item]);
  };
  return (
    <div>
      <CartContext.Provider
        value={{ CartCounter, setCartCounter, cartIncrease }}
      >
        {children}
      </CartContext.Provider>
    </div>
  );
};

export const useCartValue = () => useContext(CartContext);

export default CartApi;
