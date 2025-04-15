import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  // Set the cart state which will be an array of items.
  const [cart, setCart] = useState([]);

  const addToCart = (item) => { 
    // Add a cart quantity per item.
    Object.defineProperty(item, "cartQuantity", {value: item.cartQuantity | 0, writable:true});

    item.cartQuantity += 1;
    Object.defineProperty(item, "totalPrice", {value: item.cartQuantity * item.price, writable: true})
    if (item.cartQuantity === 1) {
      setCart((prev) => [...prev, item]);
    } else {
      for (let i = 0; i < cart.length; i++){
        if (cart[i]._id === item._id) {
          cart[i] = item;
          break;
        }
      }
      setCart(cart);
    }
    // console.log("cart now: ", cart);
  };
  const removeFromCart = (id) => setCart((prev) => prev.filter(item => item._id !== id));

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};