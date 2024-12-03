import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import ProductsPage from "./components/pages/Products/ProductsPage";
import LoginPage from "./components/pages/Authentication/LoginPage";
import RegisterPage from "./components/pages/Authentication/RegisterPage";
import "./App.css";
import { useContext } from "react";
import { AuthContext } from "./store/auth-context";
import ProtectedRoute from "./components/ProtectedRoute";

/**
 * Component to handle redirecting authenticated users away from login/register pages.
 * If a user is authenticated, it navigates to the home page.
 */
const AuthRedirect = ({ children }) => {
  const { user } = useContext(AuthContext);
  return user ? <Navigate to="/" /> : children;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      // Protect the products page from unauthenticated access
      <ProtectedRoute>
        <ProductsPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/login",
    element: (
      // Redirect authenticated users away from the login page
      <AuthRedirect>
        <LoginPage />
      </AuthRedirect>
    ),
  },
  {
    path: "/register",
    element: (
      // Redirect authenticated users away from the registration page
      <AuthRedirect>
        <RegisterPage />
      </AuthRedirect>
    ),
  },
]);

/**
 * Main application component.
 * Renders the router provider to manage navigation within the app.
 */
function App() {
  return (
    <>
      <RouterProvider router={router} />

      {/* Modal container for dynamically injected modals */}
      <div id="modal"></div>
    </>
  );
}

export default App;
