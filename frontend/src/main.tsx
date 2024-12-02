import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import ThemeSwitcher from "./components/ThemeSwitcher";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    <ThemeSwitcher />
  </StrictMode>,
);
