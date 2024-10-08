import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Lable from "../components/label";
import Modal from "../components/modal";

import { useAuth } from "../contexts/authContext";
import config from "../access/configs/config";

/**
 * LoginPage component to handle user login.
 *
 * This component allows users to log in by providing their email and password.
 * Upon successful login, the user is redirected to the homepage, and a success modal is displayed.
 */
const LoginPage = () => {
  // State variables to store the user's email, password, and potential error messages
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // useNavigate hook from React Router to programmatically navigate the user
  const navigate = useNavigate();
  // Accessing the login function from the AuthContext to handle user login
  const { login } = useAuth();

  /**
   * Handles the login process.
   *
   * This function is called when the user submits the login form. It sends the user's
   * email and password to the server to authenticate them.
   * If successful, the user is logged in, a modal is shown, and they are redirected to the homepage.
   *
   * @param {Object} e - The event object.
   */
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${config.URL}/api/auth/login`, {
        email,
        password,
      });
      login(response.data.token, response.data.user);
      navigate("/");
    } catch (error) {
      console.error("Registration error:", error);
      alert("Failed to register");
    }
  };

  /**
   * Closes the modal and redirects to the homepage.
   */
  const closeModal = () => {
    setIsModalOpen(false);
    window.location.href = "/";
  };

  return (
    <div className="flex flex-col items-center justify-center pt-28 h-screen bg-white-100 text-gray-800">
      <h1 className="text-6xl text-primary font-bold text-center mb-4">
        Login
      </h1>
      <p className="text-2xl text-primary text-center mb-4">
        Login to access your account.
      </p>
      <div className="max-w-md w-full px-4 py-8 bg-white shadow-lg rounded-lg">
        {error && <p className="text-red-500 text-center">{error}</p>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 mb-6 border border-gray-300 rounded"
        />
        <button
          onClick={handleLogin}
          className="block w-full px-4 py-2 bg-primary text-white rounded hover:bg-yellow-700 transition duration-300 text-center"
        >
          Login
        </button>
        <Lable className="block mt-2 text-primary hover:underline text-center">
          <a href="/forgot-password">Forgot password?</a>
        </Lable>
        <Lable className="block mt-2 text-primary hover:underline text-center">
          <a href="/GetStartedpage">Don't have an account?</a>
        </Lable>
      </div>
      <Lable className="mt-4 px-4 py-2 bg-primary text-white rounded hover:bg-yellow-700 transition duration-300 inline-block">
        <a href="/">Go to Homepage</a>
      </Lable>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2 className="text-2xl font-bold">Login successful!</h2>
        <p>You will be redirected to the homepage shortly.</p>
      </Modal>
    </div>
  );
};

export default LoginPage;
