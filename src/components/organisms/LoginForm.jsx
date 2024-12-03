import React, { useContext } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import FormField from "../molecules/FormField";
import FormActions from "../molecules/FormActions";
import { AuthContext } from "../../store/auth-context";

/**
 * Yup validation schema for login form fields.
 */
const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address format")
    .required("Email is required"),
  password: Yup.string()
    .min(5, "Password must be 5 character at minimum")
    .required("Password is required"),
});

/**
 * LoginForm Component
 *
 * Renders a login form using Formik and integrates with the AuthContext for authentication.
 *
 * @component
 * @returns {JSX.Element} The rendered login form component.
 */
const LoginForm = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  /**
   * Handles form submission.
   *
   * @param {Object} values - Form values.
   */
  const handleSubmit = (values, { setSubmitting }) => {
    const { email, password } = values;
    const result = login(email, password);
    if (result.success) {
      navigate("/");
    } else {
      // Show an error notification using SweetAlert.
      Swal.fire({
        title: "Login Failed!",
        text: result.message || "An error occurred during sign in.",
        icon: "error",
        confirmButtonText: "Try Again",
        customClass: {
          confirmButton: "my-custom-button",
        },
      });
    }
    setSubmitting(false);
  };

  return (
    <div className="w-full max-w-md bg-white rounded-lg  p-8">
      <h1 className="text-3xl text-center mb-6 text-gray-800 font-title">
        Welcome Back!
      </h1>
      <br></br>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={LoginSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, resetForm }) => (
          <Form>
            {/* Email field */}
            <FormField
              label="Email Address"
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
            />

            {/* Password field */}
            <FormField
              label="Password"
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
            />
            <br></br>
            <FormActions
              isSubmitting={isSubmitting}
              resetForm={resetForm}
              primaryActionText="Login"
              secondaryActionText="Don't have an account? Register"
              secondaryActionHandler={() => navigate("/register")}
            />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
