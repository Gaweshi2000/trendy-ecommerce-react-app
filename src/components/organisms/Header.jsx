import { useContext, useState } from "react";
import { CartContext } from "../../store/shopping-cart-context";
import { LuShoppingCart } from "react-icons/lu";
import { AuthContext } from "../../store/auth-context";
import CartModal from "./CartModal";
import { FiLogOut } from "react-icons/fi";

/**
 * Header Component
 *
 * This component represents the main header of the application. It includes:
 * - logo
 * - Search and filter functionality
 * - Cart icon with item count
 * - Logout button
 * - Responsive design for mobile and desktop views
 *
 * @param {Function} onSearch - Callback triggered when the search input value changes.
 * @param {Function} onFilter - Callback triggered when the filter dropdown value changes.
 *
 * @returns {JSX.Element} The rendered header component.
 */
export default function Header({ onSearch, onFilter }) {
  const { logout } = useContext(AuthContext);
  const { items } = useContext(CartContext);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const cartQuantity = items.length;

  /**
   * Opens the cart modal.
   */
  function handleCartClick() {
    setModalOpen(true);
  }

  /**
   * Closes the cart modal.
   */
  function handleCloseModal() {
    setModalOpen(false);
  }

  /**
   * Logs out the user and clears the shopping cart from local storage.
   */
  function handlelogout() {
    localStorage.removeItem("shoppingCart");
    logout();
  }

  /**
   * Toggles the visibility of the mobile menu.
   */
  function handleToggleMobileMenu() {
    setMobileMenuOpen(!isMobileMenuOpen);
  }

  // Action button for closing the cart modal
  const modalActions = (
    <button
      className="rounded-md p-2 bg-cyan-700 text-white"
      onClick={handleCloseModal}
    >
      Close
    </button>
  );

  return (
    <>
      {/* Cart Modal */}
      <CartModal
        title="Your Cart"
        actions={modalActions}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />

      {/* Main Header */}
      <header
        id="main-header"
        className="fixed top-0 left-0 w-full z-10 px-20 py-5 bg-[#e9f0f4] "
      >
        <div className="flex items-center justify-between mb-5 mt-5">
          {/* Shop logo (for the demo, added a dummy shop name as the logo) */}
          <h1 className="text-6xl font-bold text-gray-800 font-cursiveTitle">
            Trendy
          </h1>
          <div className="flex items-center gap-x-5">
            {/* Search and Filter (Desktop View) */}
            <div className="hidden lg:flex items-center justify-center gap-x-6">
              <input
                type="text"
                placeholder="Search products..."
                className="border rounded px-4 py-2 focus:outline-none  focus:border-cyan-700 "
                onChange={(e) => onSearch(e.target.value)}
              />
              <select
                className=" border rounded px-4 py-2 focus:outline-none focus:border-cyan-700"
                onChange={(e) => onFilter(e.target.value)}
              >
                <option value="">All Categories</option>
                <option value="jacket">Jacket</option>
                <option value="blouse">Blouse</option>
              </select>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={handleToggleMobileMenu}
              className="lg:hidden p-2 bg-primary rounded-full hover:bg-primary-600 transition"
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            {/* Cart Icon with Item Count */}
            <button
              onClick={handleCartClick}
              className="relative flex items-center bg-primary rounded-full p-2 hover:bg-primary-600 transition"
            >
              <LuShoppingCart size={30} />
              {cartQuantity > 0 && (
                <span className="absolute top-0 right-0 bg-gray-800 text-white text-xs font-bold rounded-full px-2.5 py-1.5 translate-x-1/2 -translate-y-1/2">
                  {cartQuantity}
                </span>
              )}
            </button>

            {/* Logout Button (Desktop View) */}
            <div className="hidden lg:flex items-center gap-x-6 ">
              <button
                onClick={handlelogout}
                className="flex items-center gap-x-2 px-4 py-2 bg-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-300 transition"
              >
                <FiLogOut size={20} className="text-gray-700" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu (Visible when toggled) */}
        {isMobileMenuOpen && (
          <div className="lg:hidden flex flex-col items-start gap-y-4 mt-4">
            {/* Search and Filter (Mobile View) */}
            <input
              type="text"
              placeholder="Search products..."
              className="border rounded px-4 py-2 focus:outline-none focus:border-cyan-700 w-full"
              onChange={(e) => onSearch(e.target.value)}
            />
            <select
              className="border rounded px-4 py-2 focus:outline-none focus:border-cyan-700 w-full"
              onChange={(e) => onFilter(e.target.value)}
            >
              <option value="">All Categories</option>
              <option value="jacket">Jacket</option>
              <option value="blouse">Blouse</option>
            </select>
            <br />

            {/* Logout Button */}
            <button
              onClick={handlelogout}
              className="flex items-center gap-x-2 px-4 py-2 bg-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-300 transition"
            >
              <FiLogOut size={20} className="text-gray-700" />
              <span>Logout</span>
            </button>
          </div>
        )}
      </header>
    </>
  );
}
