import React from "react";
import Button from "../atoms/Button";

/**
 * FormActions component provides action buttons for forms like submitting or secondary actions.
 *
 * @param {Object} props - The props for the component.
 * @param {boolean} props.isSubmitting - Indicates if the form is in a submitting state.
 * @param {string} props.primaryActionText - Text for the primary action button.
 * @param {string} props.secondaryActionText - Text for the secondary action button.
 * @param {function} props.secondaryActionHandler - Function to handle the secondary action button click.
 * @returns {JSX.Element} - The rendered form action buttons.
 */
const FormActions = ({
  isSubmitting,
  primaryActionText,
  secondaryActionText,
  secondaryActionHandler,
}) => (
  <div className="flex flex-col space-y-3">
    {/* Submit button */}
    <Button
      type="submit"
      className={`py-3 text-lg text-white font-semibold rounded-lg transition ${
        isSubmitting
          ? "bg-cyan-300 cursor-not-allowed"
          : "bg-cyan-700 hover:bg-cyan-900"
      }`}
      disabled={isSubmitting}
    >
      {isSubmitting ? "Signing In..." : primaryActionText}
    </Button>
    {/* Secondary action button (e.g., if it's the login page, the secondary action button is, "Don't have an account? Register") */}
    <Button
      type="button"
      onClick={secondaryActionHandler}
      className="text-sm text-cyan-950 hover:underline"
    >
      {secondaryActionText}
    </Button>
  </div>
);

export default FormActions;
