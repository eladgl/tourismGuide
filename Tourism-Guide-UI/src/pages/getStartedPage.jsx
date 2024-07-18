import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase"; // Ensure this path is correct
import Lable from "../components/label";

const GetStartedPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState(null);

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      // Optionally, you can save the username to a database or perform other actions
      window.location.href = "/";
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center pt-28 h-screen bg-white-100 text-gray-800">
      <h1 className="text-6xl text-primary font-bold text-center mb-4">Join Us Now!</h1>
      <p className="text-2xl text-primary text-center mb-4">
        Signup for an account
      </p>
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
          className="w-full px-4 py-2 mb-6 border border-gray-300 rounded"
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
