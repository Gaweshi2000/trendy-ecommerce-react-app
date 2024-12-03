import { createPortal } from "react-dom";
import Cart from "../molecules/Cart";

/**
 * Modal component that displays the shopping cart.
 *
 * @param {boolean} isOpen - Controls whether the modal is open or closed.
 * @param {React.ReactNode} actions - Custom actions that can be rendered at the bottom of the modal.
 * @param {string} title - Title of the modal.
 *
 */
export default function CartModal({ isOpen, actions, title }) {
  const modalElement = document.getElementById("modal");

  if (!modalElement) {
    console.error("The target container 'modal' was not found in the DOM.");
    return null;
  }

  /**
   * Using React Portals:
   * This ensures the modal is rendered outside the normal React DOM hierarchy,
   * allowing for proper layering and isolation of modal content.
   */
  return createPortal(
    isOpen && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className=" w-full max-w-lg rounded-lg shadow-lg p-6 relative bg-cyan-50">
          {/* Modal title */}
          <h2 className="text-2xl font-bold text-gray-800 border-b border-gray-300 pb-2 mb-4">
            {title}
          </h2>

          {/* Modal body containing the cart */}
          <div className="mb-4 max-h-[70vh]">
            {/* The Cart component renders a list of items in the user's shopping cart */}
            <Cart />
          </div>

          {/* Footer actions */}
          <div className="flex justify-end gap-2">{actions}</div>
        </div>
      </div>
    ),
    modalElement
  );
}
