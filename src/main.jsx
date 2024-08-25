import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./tailwindStyles/index.css";
import "virtual:svg-icons-register";

// Rendering the React application into the root DOM node
ReactDOM.createRoot(document.getElementById("root")).render(
  // StrictMode is a tool for highlighting potential problems in an application
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
