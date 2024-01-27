import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/index.css";
//provider
import { CrowdfundingProvider } from "./context/CrowdfundingContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <CrowdfundingProvider>
    <App />
  </CrowdfundingProvider>
);
