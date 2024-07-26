const PORT = import.meta.env.VERCEL_PORT || ":3001";
const apiUrl = `${import.meta.env.VITE_API_URL || "http://localhost"}${PORT}`;

export default {
  URL: apiUrl,
};
