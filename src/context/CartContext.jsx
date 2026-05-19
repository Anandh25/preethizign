import { createContext, useContext, useState, useEffect } from "react";

import toast from "react-hot-toast";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // LOAD CART FROM LOCAL STORAGE
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("clayaura-cart");

    return savedCart ? JSON.parse(savedCart) : [];
  });

  // SAVE CART TO LOCAL STORAGE
  useEffect(() => {
    localStorage.setItem("clayaura-cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // ADD TO CART
  const addToCart = (product, quantity = 1) => {
    const existingItem = cartItems.find((item) => item.id === product.id);

    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + quantity,
              }
            : item,
        ),
      );
    } else {
      setCartItems([
        ...cartItems,
        {
          ...product,
          quantity,
        },
      ]);
    }

    toast.success(`${product.title} added to cart`);
  };

  // INCREASE QUANTITY
  const increaseQuantity = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item,
      ),
    );
  };

  // DECREASE QUANTITY
  const decreaseQuantity = (id) => {
    setCartItems(
      cartItems
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  // REMOVE ITEM
  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));

    toast.success("Item removed from cart");
  };

  // TOTAL COUNT
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        cartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
