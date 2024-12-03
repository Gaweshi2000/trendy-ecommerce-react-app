import React from "react";
import LoginForm from "../../organisms/LoginForm";
import fashionImage from "../../../assets/bg8.jpg";

/**
 * LoginPage Component
 *
 * Acts as a container for the `LoginForm` component.
 * @component
 * @returns {JSX.Element} Rendered LoginPage component.
 */
function LoginPage() {
  return (
    <div className="flex items-center justify-center">
      <div className="flex items-center bg-white rounded-lg shadow-xl overflow-hidden max-w-4xl">
        <div className="hidden md:block md:w-1/2">
          <img
            src={fashionImage}
            alt="Fashion Store"
            className="object-cover h-full w-full"
          />
        </div>

        <div className="w-full p-8 md:w-1/2">
          <h1 className="text-6xl font-bold text-center text-gray-800 mb-6 font-cursiveTitle">
            Trendy
          </h1>
          {/* Login Form Component */}
          <LoginForm />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
