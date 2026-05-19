import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import HomePage from "./pages/HomePage";
import Shop from "./pages/Shop";
import About from "../src/pages/About";
import Contact from "../src/pages/Contact";

import ProductDetails from "./pages/ProductDetails";

import FloatingWhatsApp from "./components/FloatingWhatsApp";

import Shipping from "./pages/Shipping";
import Returns from "./pages/Returns";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/shop" element={<Shop />} />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/product/:id" element={<ProductDetails />} />

        <Route path="/shipping" element={<Shipping />} />

        <Route path="/returns" element={<Returns />} />

        <Route path="/privacy" element={<Privacy />} />

        <Route path="/terms" element={<Terms />} />
      </Routes>

      <FloatingWhatsApp />
    </MainLayout>
  );
}

export default App;
