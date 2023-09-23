import { createContext, useState, useContext } from "react";

export const CartContext = createContext()

export const useCart = () => {
  return useContext(CartContext);
};

export function CartItems({ children }) {

  const [cartItems, setCartItems] = useState([]);

  const addItem = (item, quantity) => {

    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      existingItem.quantity += quantity;
      setCartItems([...cartItems]);
    } else {
      setCartItems([...cartItems, { ...item, quantity }]);
    }
  };

  const removeItem = (itemId) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);
  };

  const clear = () => {
    setCartItems([]);
  };

  const isInCart = (id) => {
    return cartItems.some((item) => item.id === id);
  };

  return (
    <CartContext.Provider value={{ cartItems, addItem, removeItem, clear, isInCart }}>
      {children}
    </CartContext.Provider>
  );
}

