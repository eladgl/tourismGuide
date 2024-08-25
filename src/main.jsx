import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./tailwindStyles/index.css";
import "virtual:svg-icons-register";

if (import.meta.hot) {
  import.meta.hot.accept((newModule) => {
    console.log("HMR update detected");
    // Optionally, add more specific logging here
  });
}

console.log(import.meta.hot);
// Rendering the React application into the root DOM node
ReactDOM.createRoot(document.getElementById("root")).render(
  // StrictMode is a tool for highlighting potential problems in an application
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
