import React from "react";
import Label from "../atoms/Label";
import Input from "../atoms/Input";
import ErrorMessage from "../atoms/ErrorMessage";

/**
 * FormField component renders a labeled input field with error handling.
 *
 * @param {Object} props - The props for the component.
 * @param {string} props.label - The label for the input field.
 * @param {string} props.type - The type of the input.
 * @param {string} props.name - The name of the input field.
 * @param {string} props.id - The id of the input field.
 * @param {string} props.placeholder - Placeholder text for the input field.
 * @returns {JSX.Element} - The rendered form field.
 */
const FormField = ({ label, type, name, id, placeholder }) => (
  <div className="mb-4">
    {/* Label for the input field */}
    <Label
      htmlFor={id}
      className="block text-sm font-medium text-gray-700 mb-1"
    >
      {label}
    </Label>

    {/* Input field */}
    <Input
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      className="w-full px-4 py-3 border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-700 focus:border-transparent"
    />

    {/* Error message */}
    <ErrorMessage name={name} className="text-red-500 text-sm mt-1" />
  </div>
);

export default FormField;
