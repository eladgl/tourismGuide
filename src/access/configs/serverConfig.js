// Define the SERVER_URL based on the environment variable REACT_APP_API_BASE_URL
// If REACT_APP_API_BASE_URL is defined, use it as the base URL
// Otherwise, default to "localhost"
const SERVER_URL = process.env.REACT_APP_API_BASE_URL || "localhost";

// Export the SERVER_URL so it can be used in other parts of the application
export default {
  SERVER_URL,
};
