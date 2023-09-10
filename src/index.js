import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
const bodyStyles = {
  fontFamily: "Arial, sans-serif",
  backgroundColor: "#000",
  margin: "0",
  padding: "0",
  touchAction: "none",
};
Object.assign(document.body.style, bodyStyles);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
