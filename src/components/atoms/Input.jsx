import React from "react";
import { Field } from "formik";

/**
 * Input component is a wrapper around Formik's Field component for rendering input fields.
 * It is used to create controlled input fields in the form.
 *
 * @param {Object} props - The props for the input component.
 * @param {string} props.type - The type of the input (e.g., text, password).
 * @param {string} props.name - The name of the form field.
 * @param {string} props.id - The unique identifier for the input field.
 * @param {string} props.placeholder - The placeholder text for the input field.
 * @param {string} props.className - Custom class names for styling the input field.
 * @returns {JSX.Element} - The rendered input field component.
 */

const Input = ({ type, name, id, placeholder, className }) => (
  <Field
    type={type}
    name={name}
    id={id}
    placeholder={placeholder}
    className={className}
  />
);

export default Input;
