import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import { BackBtn, Footer, NavBar } from "./components";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <NavBar />
      <BackBtn />
      <App />
      <Footer />
    </Router>
  </React.StrictMode>
);
