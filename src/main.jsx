import React from "react";
import ReactDOM from "react-dom/client";
import { CartProvider } from "./context/CartContext";

import { BrowserRouter } from "react-router-dom";

import App from "./App";
import "./index.css";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      <BrowserRouter>
        <App />
        <Toaster position="top-right" />
      </BrowserRouter>
    </CartProvider>
  </React.StrictMode>,
);
