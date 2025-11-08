import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CartDrawer from "./components/CartDrawer";
import { Toaster } from "react-hot-toast";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Custom from "./pages/Custom";
import TryOn from "./pages/TryOn";
import About from "./pages/About";
import Checkout from "./pages/Checkout";
import { CartProvider } from "./context/CartContext";
import OrderSuccess from "./pages/OrderSuccess";
// 🧭 Placeholder for unused / future routes
function Placeholder({ title, children }) {
  return (
    <main className="max-w-6xl mx-auto px-4 py-10 text-center">
      <h1 className="text-3xl font-serif text-[var(--rdbRoyal)] mb-4">
        {title}
      </h1>
      <p className="text-gray-600">{children}</p>
    </main>
  );
}

export default function App() {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-[var(--rdbIvory)] text-gray-800">
          {/* ===== Navbar ===== */}
          <Navbar onOpenCart={() => setCartOpen(true)} />

          {/* ===== Cart Drawer ===== */}
          <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />


          {/* ===== Main Content ===== */}
          <main className="flex-1">
            <Routes>
              {/* 🏠 Home */}
              <Route path="/" element={<Home />} />

              {/* 🛍 Shop */}
              <Route path="/shop" element={<Shop />} />

              {/* 🧵 Custom Stitching */}
              <Route path="/custom" element={<Custom />} />

              {/* 👗 AI Try-On */}
              <Route path="/tryon" element={<TryOn />} />

              {/* 💳 Checkout */}
              <Route path="/checkout" element={<Checkout />} />

              {/* 🕊 About Us */}
              <Route path="/about" element={<About />} />
              import OrderSuccess from "./pages/OrderSuccess";

...

<Route path="/order-success/:id" element={<OrderSuccess />} />


              {/* 👤 Account (Future Feature) */}
              <Route
                path="/account"
                element={
                  <Placeholder title="My Account">
                    Manage orders, saved measurements, and preferences here soon.
                  </Placeholder>
                }
              />

              {/* 404 Fallback */}
              <Route
                path="*"
                element={
                  <Placeholder title="404 - Page Not Found">
                    The page you’re looking for doesn’t exist.
                  </Placeholder>
                }
              />
            </Routes>
          </main>

          {/* ===== Footer ===== */}
          <Footer />

          {/* ===== Toast Notifications ===== */}
          <Toaster
            position="bottom-right"
            toastOptions={{
              style: {
                background: "var(--rdbRoyal)",
                color: "var(--rdbIvory)",
                border: "1px solid var(--rdbGold)",
                boxShadow: "0 4px 12px rgba(212,175,55,0.4)",
                fontFamily: "'Poppins', sans-serif",
                borderRadius: "10px",
                padding: "12px 16px",
              },
              iconTheme: {
                primary: "var(--rdbGold)",
                secondary: "var(--rdbIvory)",
              },
              success: {
                iconTheme: {
                  primary: "var(--rdbGold)",
                  secondary: "var(--rdbIvory)",
                },
              },
            }}
          />
        </div>
      </Router>
    </CartProvider>
  );
}
