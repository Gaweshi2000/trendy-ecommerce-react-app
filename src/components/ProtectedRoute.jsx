import { useContext } from "react";
import { AuthContext } from "../store/auth-context";
import { Navigate } from "react-router-dom";

/**
 * ProtectedRoute Component
 *
 * Ensures that the user is authenticated before rendering the child components.
 * Redirects unauthenticated users to the login page.
 *
 * @component
 * @param {object} props - Props passed to the component.
 * @param {JSX.Element} props.children - The components to render if authenticated.
 * @returns {JSX.Element} Rendered child components if authenticated, otherwise Navigate component.
 */
export default function ProtectedRoute({ children }) {
  const { isAuthenticated } = useContext(AuthContext);

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return children;
}
