import { useContext } from "react";
import { CartContext } from "../../store/shopping-cart-context";
import { AiOutlineClose } from "react-icons/ai";

/**
 * Cart component to display the current shopping cart contents.
 * It shows the list of items in the cart, allows for quantity updates and removal of items.
 * Displays the total price of items in the cart.
 *
 * @returns {JSX.Element} - Rendered cart component with item details, actions and total.
 */

export default function Cart() {
  const { items, updateItemQuantity } = useContext(CartContext);

  /**
   * Calculate the total price of all items in the cart.
   * The total price is calculated by multiplying item price by its quantity.
   */
  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  /**
   * Format the total price to LKR currency format.
   */
  const formattedTotalPrice = `LKR ${totalPrice.toFixed(2)}`;

  /**
   * Function to remove an item from the cart by updating its quantity to 0.
   * @param {string} id - The unique identifier for the item to remove.
   */
  function removeItem(id) {
    const itemToRemove = items.find((item) => item.id === id);
    if (itemToRemove) {
      updateItemQuantity(id, -itemToRemove.quantity);
    }
  }

  return (
    <div className="text-gray-800">
      {/* If no items in the cart, display a message */}
      {items.length === 0 && (
        <p className="text-center text-lg font-semibold">
          No items in the cart!
        </p>
      )}

      {/* Render cart items when available */}
      {items.length > 0 && (
        <ul className="divide-y divide-gray-300 overflow-y-auto max-h-[70vh]">
          {items.map((item) => {
            const formattedPrice = `LKR ${item.price.toFixed(2)}`;
            return (
              <li key={item.id} className="flex justify-between py-3">
                <div className="flex items-center gap-4">
                  {/* Remove item button */}
                  <button
                    onClick={() => removeItem(item.id)}
                    className="p-2 bg-gray-200 text-black rounded-full transition hover:scale-125"
                    aria-label="Remove item"
                  >
                    <AiOutlineClose size={12} />
                  </button>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-lg border"
                  />
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-gray-500">{formattedPrice}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {/* Update item quantity buttons */}
                  <button
                    onClick={() => updateItemQuantity(item.id, -1)}
                    className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                  >
                    -
                  </button>
                  <span className="px-2 text-lg font-semibold">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => updateItemQuantity(item.id, 1)}
                    className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                  >
                    +
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      )}
      <div>
        <hr />
      </div>
      {/* Display total price */}
      <div className="mt-5 text-lg">
        <p>
          Cart Total:{" "}
          <strong className="text-gray-900">{formattedTotalPrice}</strong>
        </p>
      </div>
    </div>
  );
}
