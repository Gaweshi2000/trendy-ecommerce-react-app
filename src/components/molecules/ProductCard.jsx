import { useContext } from "react";
import { CartContext } from "../../store/shopping-cart-context";
import AddToCartButton from "../atoms/AddToCartButton";

/**
 * ProductCard component displays product information such as image, title, description, and price.
 * It also includes a button to add the product to the shopping cart.
 *
 * @param {Object} props - The props for the product card.
 * @param {string} props.id - The unique identifier for the product.
 * @param {string} props.image - The image URL for the product.
 * @param {string} props.title - The title or name of the product.
 * @param {number} props.price - The price of the product.
 * @param {string} props.description - A brief description of the product.
 * @returns {JSX.Element} - The rendered product card with product details and action button.
 */
export default function ProductCard({ id, image, title, price, description }) {
  const { addItemToCart } = useContext(CartContext);

  return (
    <div className="relative rounded-sm border border-gray-200 bg-neutral-50 shadow-md transition-transform transform hover:shadow-lg p-1">
      <div className="relative group">
        {/* Product Image */}
        <img className="rounded-sm w-full" src={image} alt={title} />

        {/* Price Display */}
        <div className="absolute top-2 right-2 bg-primary text-white px-2 py-1 rounded text-sm">
          LKR {price}
        </div>

        {/* Add to Cart button */}
        <div className="absolute bottom-0 left-0 w-full opacity-0 group-hover:opacity-100 transition-opacity">
          <AddToCartButton
            onClick={() => addItemToCart(id)}
            className="w-full bg-primary text-white py-2"
          />
        </div>
      </div>
      <div className="mt-2">
        {/* Product Title */}
        <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">
          {title}
        </h3>

        {/* Product Description */}
        <p className="mt-2 text-gray-600 line-clamp-3 text-sm">{description}</p>
      </div>
    </div>
  );
}
