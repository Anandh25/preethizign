import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import HomePage from "./pages/HomePage";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Contact from "./pages/Contact";

import ProductDetails from "./pages/ProductDetails";

import FloatingWhatsApp from "./components/FloatingWhatsApp";

import Shipping from "./pages/Shipping";
import Returns from "./pages/Returns";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";

import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";

import ProtectedRoute from "./components/admin/ProtectedRoute";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <>
      <Routes>
        {/* CUSTOMER ROUTES */}
        <Route
          path="/"
          element={
            <MainLayout>
              <HomePage />
              <FloatingWhatsApp />
            </MainLayout>
          }
        />

        <Route
          path="/shop"
          element={
            <MainLayout>
              <Shop />
              <FloatingWhatsApp />
            </MainLayout>
          }
        />

        <Route
          path="/about"
          element={
            <MainLayout>
              <About />
              <FloatingWhatsApp />
            </MainLayout>
          }
        />

        <Route
          path="/contact"
          element={
            <MainLayout>
              <Contact />
              <FloatingWhatsApp />
            </MainLayout>
          }
        />

        <Route
          path="/product/:id"
          element={
            <MainLayout>
              <ProductDetails />
              <FloatingWhatsApp />
            </MainLayout>
          }
        />

        <Route
          path="/shipping"
          element={
            <MainLayout>
              <Shipping />
              <FloatingWhatsApp />
            </MainLayout>
          }
        />

        <Route
          path="/returns"
          element={
            <MainLayout>
              <Returns />
              <FloatingWhatsApp />
            </MainLayout>
          }
        />

        <Route
          path="/privacy"
          element={
            <MainLayout>
              <Privacy />
              <FloatingWhatsApp />
            </MainLayout>
          }
        />

        <Route
          path="/terms"
          element={
            <MainLayout>
              <Terms />
              <FloatingWhatsApp />
            </MainLayout>
          }
        />

        {/* ADMIN ROUTES */}

        <Route path="/admin/login" element={<AdminLogin />} />

        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Toaster position="top-right" />
    </>
  );
}

export default App;
