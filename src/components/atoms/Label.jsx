import React from "react";

/**
 * Label component for form input fields.
 * It is used to render a label element that is associated with an input field.
 *
 * @param {Object} props - The props for the label component.
 * @param {string} props.htmlFor - The `htmlFor` attribute linking the label to the corresponding input field.
 * @param {string} props.className - Custom class names for styling the label element.
 * @param {React.ReactNode} props.children - The content inside the label.
 * @returns {JSX.Element} - The rendered label element.
 */

const Label = ({ htmlFor, className, children }) => (
  <label htmlFor={htmlFor} className={className}>
    {children}
  </label>
);

export default Label;
