import React from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
    return (
        <div className="flex flex-col items-center justify-center pt-28 h-screen bg-white-100 text-gray-800">
            <h1 className="text-6xl text-primary font-bold text-center mb-4">Login</h1>
            <p className="text-2xl text-primary text-center mb-4">
                Login to access your account.
            </p>
            <div className="max-w-md w-full px-4 py-8 bg-white shadow-lg rounded-lg">
                <input
                    type="text"
                    placeholder="Username"
                    className="w-full px-4 py-2 mb-4 border border-gray-300 rounded"
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="w-full px-4 py-2 mb-6 border border-gray-300 rounded"
                />
                <Link
                    to="/"
                    className="block w-full px-4 py-2 bg-primary text-white rounded hover:bg-yellow-700 transition duration-300 text-center"
                >
                    Login
                </Link>
                <Link
                    to="/forgot-password"
                    className="block mt-2 text-primary hover:underline text-center"
                >
                    Forgot password?
                </Link>
            </div>
            <Link
                to="/"
                className="mt-4 px-4 py-2 bg-primary text-white rounded hover:bg-yellow-700 transition duration-300 inline-block"
                style={{ maxWidth: "150px", overflowWrap: "break-word", textAlign: "center" }}
            >
                Go to Homepage
            </Link>
        </div>
    );
};

export default LoginPage;
