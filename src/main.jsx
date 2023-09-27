import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "../styles/modern-normalize.css";
import "../styles/index.css";
import "../styles/utils.css";
import "../styles/components/Form.css";
// Components

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
