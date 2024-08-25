import React from "react";
import { Link } from "react-router-dom";

/**
 * PageNotFound component to display a 404 error page.
 *
 * This component is displayed when the user navigates to a route that does not exist.
 * It provides a simple message indicating that the page was not found and includes a link to return to the homepage.
 */
const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center pt-28 h-screen bg-white-100 text-gray-800">
      <h1 className="text-6xl font-bold text-primary">404</h1>
      <p className="text-2xl mb-4 text-primary">Page Not Found</p>
      <Link
        to="/"
        className="px-4 py-2 bg-primary text-white rounded hover:bg-yellow-700 transition duration-300"
      >
        Go to Homepage
      </Link>
    </div>
  );
};

export default PageNotFound;
