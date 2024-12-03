/**
 * Button component is a generic button used throughout the app.
 *
 * @param {Object} props - Props for the component
 * @param {string} props.type - The type of button, i.e., submit, button, reset
 * @param {Function} props.onClick - The function to be called on click
 * @param {string} props.className - Custom class names for styling
 * @param {boolean} props.disabled - If true, disables the button
 * @param {React.ReactNode} props.children - The content inside the button
 * @returns {JSX.Element} The rendered button
 */

const Button = ({ type, onClick, className, disabled, children }) => (
  <button
    type={type}
    onClick={onClick}
    className={`py-2 px-6 rounded-sm transition ${className} ${
      disabled ? "opacity-50 cursor-not-allowed" : " "
    }`}
    disabled={disabled}
  >
    {children}
  </button>
);

export default Button;
