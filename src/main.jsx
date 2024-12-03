import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import AuthProvider from "./store/auth-context.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* AuthProvider makes authentication state accessible throughout the app */}
    <AuthProvider>
      <App />
    </AuthProvider>
  </StrictMode>
);