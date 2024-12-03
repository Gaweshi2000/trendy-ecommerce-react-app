import { useContext } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { AuthContext } from "../../store/auth-context";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import FormField from "../molecules/FormField";
import FormActions from "../molecules/FormActions";
import "./sweetalert-custom.css";

/**
 * Yup validation schema for registration form fields.
 */
const validationSchema = Yup.object({
  name: Yup.string().required("Name is required!"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

/**
 * RegisterForm Component
 *
 * Renders a registration form using Formik and integrates with the AuthContext for user registration.
 *
 * @component
 * @returns {JSX.Element} The rendered registration form component.
 */
function RegisterForm() {
  const { register } = useContext(AuthContext);
  const navigate = useNavigate();

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  /**
   * Handles form submission.
   *
   * @param {Object} values - Form values.
   */
  const handleSubmit = (values, { setSubmitting }) => {
    const { name, email, password } = values;
    const result = register(name, email, password);
    if (result.success) {
      Swal.fire({
        title: "Registration Successful!",
        text: "You can now log in.",
        icon: "success",
        confirmButtonText: "OK",
        customClass: {
          confirmButton: "my-custom-button",
        },
      }).then(() => {
        navigate("/login");
      });
    } else {
      Swal.fire({
        title: "Registration Failed!",
        text: result.message || "An error occurred during registration.",
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
        Register
      </h1>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, resetForm }) => (
          <Form>
            {/* Name field */}
            <FormField
              label="Name"
              type="name"
              name="name"
              id="name"
              placeholder="Enter your name"
            />

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
              primaryActionText="Register"
              secondaryActionText="Already have an account? Login"
              secondaryActionHandler={() => navigate("/login")}
            />
          </Form>
        )}
      </Formik>
    </div>
  );
}
export default RegisterForm;
