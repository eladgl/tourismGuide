// Determine the port to use based on the environment variable VITE_API_URL
// If VITE_API_URL is defined, it likely means the production environment, so use port 443 (HTTPS)
// Otherwise, default to port 3001 (local development)
const PORT = import.meta.env.VITE_API_URL ? ":443" : ":3001";

// Construct the API URL
// If VITE_API_URL is defined, use it; otherwise, default to "http://localhost"
// Append the appropriate port to the base URL
const apiUrl = `${import.meta.env.VITE_API_URL || "http://localhost"}${PORT}`;

console.log("apiUrl: " + apiUrl);
// Export the constructed API URL as part of the default export object
export default {
  URL: apiUrl,
};
