import { createContext, useEffect, useState } from "react";
import { DUMMY_PRODUCTS } from "../utils/dummy-products";

export const CartContext = createContext({
  items: [],
  addItemToCart: () => {},
  updateItemQuantity: () => {},
});

/**
 * CartContextProvider Component
 *
 * Manages shopping cart state and provides methods for adding and updating items in the cart.
 * Persists cart data in localStorage.
 *
 * @component
 * @param {object} props - Props passed to the component.
 * @param {JSX.Element} props.children - Child components that need access to cart context.
 * @returns {JSX.Element} Rendered CartContextProvider component with context.
 */
export default function CartContextProvider({ children }) {
  const [shoppingCart, setShoppingCart] = useState(() => {
    const storedCart = localStorage.getItem("shoppingCart");
    return storedCart ? JSON.parse(storedCart) : { items: [] };
  });

  useEffect(() => {
    localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
  }, [shoppingCart]);

  /**
   * Adds an item to the shopping cart or increments its quantity if it already exists.
   *
   * @param {string} id - The product ID.
   */
  function handleAddItemToCart(id) {
    setShoppingCart((prevShoppingCart) => {
      const updatedItems = [...prevShoppingCart.items];

      const existingCartItemIndex = updatedItems.findIndex(
        (cartItem) => cartItem.id === id
      );
      const existingCartItem = updatedItems[existingCartItemIndex];

      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity + 1,
        };
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        const product = DUMMY_PRODUCTS.find((product) => product.id === id);
        updatedItems.push({
          id: id,
          name: product.title,
          price: product.price,
          image: product.image,
          quantity: 1,
        });
      }

      return {
        items: updatedItems,
      };
    });
  }

  /**
   * Updates the quantity of a cart item or removes it if quantity reaches zero.
   *
   * @param {string} productId - The product ID.
   * @param {number} amount - The amount to adjust the quantity by.
   */
  function handleUpdateCartItemQuantity(productId, amount) {
    setShoppingCart((prevShoppingCart) => {
      const updatedItems = [...prevShoppingCart.items];
      const updatedItemIndex = updatedItems.findIndex(
        (item) => item.id === productId
      );

      const updatedItem = {
        ...updatedItems[updatedItemIndex],
      };

      updatedItem.quantity += amount;

      if (updatedItem.quantity <= 0) {
        updatedItems.splice(updatedItemIndex, 1);
      } else {
        updatedItems[updatedItemIndex] = updatedItem;
      }

      return {
        items: updatedItems,
      };
    });
  }

  const ctxValue = {
    items: shoppingCart.items,
    addItemToCart: handleAddItemToCart,
    updateItemQuantity: handleUpdateCartItemQuantity,
  };

  return (
    <CartContext.Provider value={ctxValue}>{children}</CartContext.Provider>
  );
}
