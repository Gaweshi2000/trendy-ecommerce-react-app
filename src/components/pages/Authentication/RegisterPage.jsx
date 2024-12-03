import RegisterForm from "../../organisms/RegisterForm";
import fashionImage from "../../../assets/bg9.jpg";

// RegisterPage Component: A layout for the registration page, combining a form and an image
function RegisterPage() {
  return (
    <div className="flex items-center justify-center">
      <div className="flex items-center bg-white rounded-lg shadow-xl overflow-hidden max-w-4xl">
        <div className="hidden md:block p-8 md:w-1/2">
          <h1 className="text-6xl font-bold text-center text-gray-800 mb-6 font-cursiveTitle">
            Trendy
          </h1>

          {/* Register Form Component */}
          <RegisterForm />
        </div>

        <div className="w-full md:w-1/2">
          <img
            src={fashionImage}
            alt="Fashion Store"
            className="object-cover h-full w-full"
          />
        </div>
      </div>
    </div>
  );
}
export default RegisterPage;