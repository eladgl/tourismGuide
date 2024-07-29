const PORT = import.meta.env.VITE_API_URL ? ":443" : ":3001";
const apiUrl = `${import.meta.env.VITE_API_URL || "http://localhost"}${PORT}`;

console.log("apiUrl: " + apiUrl);
export default {
  URL: apiUrl,
};
