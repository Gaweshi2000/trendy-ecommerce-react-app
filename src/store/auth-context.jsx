import React, { createContext, useEffect, useState } from "react";
import { DUMMY_USERS } from "../utils/dummy-users";

export const AuthContext = createContext();

/**
 * AuthProvider Component
 *
 * Provides authentication functionality including login, logout, and registration.
 * Exposes the authentication state and methods through the AuthContext.
 *
 * @component
 * @param {object} props - Props passed to the component.
 * @param {JSX.Element} props.children - Child components that need access to authentication context.
 * @returns {JSX.Element} Rendered AuthProvider component with context.
 */
export default function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("auth") === "true"
  );

  /**
   * Handles user login by verifying credentials.
   *
   * @param {string} email - The user's email.
   * @param {string} password - The user's password.
   * @returns {object} Response object containing success status and message.
   */
  const login = (email, password) => {
    const user = DUMMY_USERS.find(
      (user) => user.email === email && user.password === password
    );
    if (user) {
      setIsAuthenticated(true);
      localStorage.setItem("auth", "true");
      return { success: true, message: "Login Successful!" };
    }
    return { success: false, message: "Invalid email or password!" };
  };

  /**
   * Handles user registration by checking for existing users and adding new ones.
   *
   * @param {string} name - The user's name.
   * @param {string} email - The user's email.
   * @param {string} password - The user's password.
   * @returns {object} Response object containing success status and message.
   */
  const register = (name, email, password) => {
    const userExists = DUMMY_USERS.some((user) => user.email === email);
    if (userExists) {
      return { success: false, message: "User already exists" };
    }
    DUMMY_USERS.push({ name, email, password });
    return { success: true, message: "Registration Successful!" };
  };

  /**
   * Logs the user out by clearing the authentication state and localStorage.
   */
  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("auth");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
