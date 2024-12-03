// import { useRef, useContext } from "react";

// import CartModal from "./CartModal.jsx";
// import { CartContext } from "../store/shopping-cart-context.jsx";

// export default function Header() {
//   const modal = useRef();
//   const { items } = useContext(CartContext);

//   const cartQuantity = items.length;

//   function handleOpenCartClick() {
//     modal.current.open();
//   }

//   let modalActions = <button>Close</button>;

//   if (cartQuantity > 0) {
//     modalActions = (
//       <>
//         <button>Close</button>
//         <button>Checkout</button>
//       </>
//     );
//   }

//   return (
//     <>
//       <CartModal ref={modal} title="Your Cart" actions={modalActions} />
//       <header id="main-header">
//         <div id="main-title">
//           <img src="logo.png" alt="Elegant model" />
//           <h1>Elegant Context</h1>
//         </div>
//         <p>
//           <button onClick={handleOpenCartClick}>Cart ({cartQuantity})</button>
//         </p>
//       </header>
//     </>
//   );
// }

import { useState, useContext } from "react";
import CartModal from "./CartModal.jsx";
import { CartContext } from "../store/shopping-cart-context.jsx";

export default function Header() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalPosition, setModalPosition] = useState(null);
  const { items } = useContext(CartContext);

  const cartQuantity = items.length;

  function handleOpenCartClick() {
    const buttonRect = event.target.getBoundingClientRect();
    setModalPosition({
      top: buttonRect.bottom,
      left: buttonRect.left + buttonRect.width / 2,
    });
    setModalOpen(true);
  }

  function handleCloseModal() {
    setModalOpen(false); // Close the modal
  }

  let modalActions = <button onClick={handleCloseModal}>Close</button>;

  if (cartQuantity > 0) {
    modalActions = (
      <>
        <button onClick={handleCloseModal}>Close</button>
        <button>Checkout</button>
      </>
    );
  }

  return (
    <>
      <CartModal
        title="Your Cart"
        actions={modalActions}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        position={modalPosition}
      />
      <header id="main-header">
        <div id="main-title">
          <img src="logo.png" alt="Elegant model" />
          <h1>Elegant Context</h1>
        </div>
        <p>
          <button onClick={handleOpenCartClick}>Cart ({cartQuantity})</button>
        </p>
      </header>
    </>
  );
}
