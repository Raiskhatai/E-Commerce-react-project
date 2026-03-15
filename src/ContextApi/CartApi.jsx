import React, { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";

export const CartContext = createContext(null);

const CartApi = ({ children }) => {
  const [CartCounter, setCartCounter] = useState([]);

  const cartIncrease = (item) => {
    // product means cartcounter ke array ke values (product)
    // item means jis item ko humne click kiya wo
    const IteminCart = CartCounter.find((product) => product.id === item.id);
    if (IteminCart) {
      let updatedCart = CartCounter.map((product) => {
        return product.id === item.id
          ? { ...product, quantity: product.quantity + 1 }
          : product;
      });
      setCartCounter(updatedCart);
      toast.success("product quantity increased");
    } else {
      // add new product with quantity 1
      setCartCounter([...CartCounter, { ...item, quantity: 1 }]);
      toast.success("product is added succesfully");
    }
  };

  const updateQuantity = (CartCounter, productId, action) => {
    setCartCounter(
      CartCounter.map((item) => {
        if (item.id === productId) {
          let newUnit = item.quantity;
          if (action == "increase") {
            newUnit = newUnit + 1;
            toast.success("quantity increase by 1");
          } else if (action == "decrease") {
            newUnit = newUnit - 1;
            toast.success("quantity decreased by 1");
          }
          return newUnit > 0 ? { ...item, quantity: newUnit } : null;
        }
        return item;
      }).filter((item) => item != null),
    );
  };

  const deleteItem = (productId) => {
    setCartCounter(CartCounter.filter((item) => item.id !== productId));
    toast.success("product is remove from cart");
  };

  return (
    <div>
      <CartContext.Provider
        value={{
          CartCounter,
          setCartCounter,
          cartIncrease,
          updateQuantity,
          deleteItem,
        }}
      >
        {children}
      </CartContext.Provider>
    </div>
  );
};

export const useCartValue = () => useContext(CartContext);

export default CartApi;
