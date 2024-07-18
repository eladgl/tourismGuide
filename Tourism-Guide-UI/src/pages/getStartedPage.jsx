import React from "react";
import Lable from "../components/label";

const GetStartedPage = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-28 h-screen bg-white-100 text-gray-800">
        <h1 className="text-6xl text-primary font-bold text-center mb-4">Join Us Now!</h1>
        <p className="text-2xl text-primary text-center mb-4">
            Signup for an account
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
            <input
                type="text"
                placeholder="Email Adress"
                className="w-full px-4 py-2 mb-6 border border-gray-300 rounded"
            />
            <Lable className="block w-full px-4 py-2 bg-primary text-white rounded hover:bg-yellow-700 transition duration-300 text-center">
                    <a href="/">Signup</a>
                </Lable>
        </div>
        <Lable className="mt-4 px-4 py-2 bg-primary text-white rounded hover:bg-yellow-700 transition duration-300 inline-block">
                    <a href="/">Go to Homepage</a>
                </Lable>
    </div>
);
  };
  
  export default GetStartedPage;