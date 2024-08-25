import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Lable from "../components/label";
import config from "../access/configs/config";

import { useAuth } from "../contexts/authContext";

import { Title } from "../styles/components/title";

/**
 * GetStartedPage component for user registration.
 *
 * This component allows users to sign up for an account by providing their email, username, and password.
 * Upon successful registration, the user is logged in and redirected to the homepage.
 */
const GetStartedPage = () => {
  // State variables to store the user's input for email, password, and username
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState(null);

  const { login } = useAuth();
  const navigate = useNavigate();

  /**
   * Handles the signup process.
   *
   * This function is called when the user submits the signup form. It sends the user's
   * email, username, and password to the server to create a new account.
   * If successful, it logs the user in and navigates them to the homepage.
   *
   * @param {Object} e - The event object.
   */
  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${config.URL}/api/auth/register`, {
        email,
        username,
        password,
      });
      login(response.data.token, response.data.user);
      navigate("/");
    } catch (error) {
      console.error("Registration error:", error);
      alert("Failed to register");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center pt-28 h-screen bg-white-100 text-gray-800">
      <div className="-mt-20 mb-10 flex flex-col items-center justify-center">
        <Title>Join Us Now!</Title>
        <Title>Signup for an account</Title>
      </div>
      <div className="max-w-md w-full px-4 py-8 bg-white shadow-lg rounded-lg">
        {error && <p className="text-red-500 text-center">{error}</p>}
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded"
        />
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full py-2 mb-6 border border-gray-300 rounded"
        />
        <button
          onClick={handleSignup}
          className="block w-full px-4 py-2 bg-primary text-white rounded hover:bg-yellow-700 transition duration-300 text-center"
        >
          Signup
        </button>
      </div>
      <Lable className="mt-4 px-4 py-2 bg-primary text-white rounded hover:bg-yellow-700 transition duration-300 inline-block">
        <a href="/">Go to Homepage</a>
      </Lable>
    </div>
  );
};

export default GetStartedPage;
