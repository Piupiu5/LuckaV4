import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "@fontsource/poppins"; // Default weight 400
import "@fontsource/poppins/500.css"; // Optional specific weights
import "@fontsource/poppins/700.css"; // For bold


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
