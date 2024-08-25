import React, { createContext, useContext, useState, useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";
import { isTokenValid } from "../utils/auth";

// Create a context for authentication
const AuthContext = createContext();

// AuthProvider component to manage and provide authentication state and actions
export const AuthProvider = ({ children }) => {
  // State to store the current authenticated user
  const [user, setUser] = useState(null);
  // State to track if the user is authenticated (initially based on token validity)
  const [isAuthenticated, setIsAuthenticated] = useState(isTokenValid());
  // State to track loading status during authentication state changes
  const [loading, setLoading] = useState(true);

  // useEffect to handle authentication state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  /**
   * Function to log in the user by storing the token and user data in local storage.
   * @param {string} token - The authentication token to be stored.
   * @param {Object} userData - The user data to be stored and set as the current user.
   */
  const login = (token, userData) => {
    localStorage.setItem("token", token);
    localStorage.setItem("currentUser", userData.email);
    setIsAuthenticated(true);
    setUser(userData);
  };

  /**
   * Function to log out the user by removing the token and user data from local storage
   * and signing out from Firebase authentication.
   */
  const logout = () => {
    localStorage.removeItem("currentUser");
    localStorage.removeItem("token");
    signOut(auth);
  };

  // Provide the user, loading, login, and logout functions to the context consumers
  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext, providing access to authentication state and actions
export const useAuth = () => useContext(AuthContext);
