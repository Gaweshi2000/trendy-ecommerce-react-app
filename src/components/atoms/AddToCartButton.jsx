import { LuShoppingCart } from "react-icons/lu";

/**
 * AddToCartButton component renders a button that allows users to add items to their shopping cart.
 * It accepts a `className` prop for styling and any other props to be passed to the button.
 *
 * @param {Object} props - Props for the component
 * @param {string} props.className - Custom class names for styling
 * @returns {JSX.Element} The rendered AddToCartButton
 */

const AddToCartButton = ({ className, ...props }) => {
  return (
    <button
      {...props}
      className="w-full flex items-center justify-center gap-2 bg-cyan-700 px-4 py-2 text-white font-semibold shadow-md hover:bg-cyan-800 transition-transform transform focus:outline-none  disabled:opacity-50 disabled:cursor-not-allowed"
    >
      <LuShoppingCart size={15} className="text-white" />
      <span>Add to Cart</span>
    </button>
  );
};

export default AddToCartButton;
