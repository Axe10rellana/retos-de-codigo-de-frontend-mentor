import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/index.css";
import { LoopstudiosProvider } from "./context/LoopstudiosContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <LoopstudiosProvider>
    <App />
  </LoopstudiosProvider>
);
