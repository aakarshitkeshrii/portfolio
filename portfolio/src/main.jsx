import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Resume from "./pages/Resume.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/resume" element={<Resume />} />
    </Routes>
  </BrowserRouter>
);
