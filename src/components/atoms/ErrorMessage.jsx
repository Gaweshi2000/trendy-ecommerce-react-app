import React from "react";
import { ErrorMessage as FormikErrorMessage } from "formik";

/**
 * ErrorMessage component to display error messages for form fields using Formik.
 * It uses Formik's ErrorMessage component to render error messages for a specific field.
 *
 * @param {Object} props - The props for the component.
 * @param {string} props.name - The name of the form field associated with the error message.
 * @param {string} props.className - Custom class name to style the error message.
 * @returns {JSX.Element} - The rendered error message component.
 */

const ErrorMessage = ({ name, className }) => (
  <FormikErrorMessage name={name} component="div" className={className} />
);

export default ErrorMessage;
