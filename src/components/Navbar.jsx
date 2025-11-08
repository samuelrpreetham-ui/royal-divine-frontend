import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag } from "lucide-react"; // optional icon

export default function Navbar({ onOpenCart }) {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "Custom Stitching", path: "/custom" },
    { name: "Try On", path: "/tryon" },
    { name: "About", path: "/about" },
  ];

  return (
    <header className="bg-white/80 backdrop-blur-lg shadow-md sticky top-0 z-50 border-b border-[var(--rdbGold)]/20">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* ===== Logo & Brand ===== */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="Royal Divine Boutique Logo"
            className="h-10 w-auto object-contain drop-shadow-md"
          />
          <span className="font-serif text-xl text-[var(--rdbRoyal)] hidden sm:block">
            Royal Divine Boutique
          </span>
        </Link>

        {/* ===== Desktop Navigation ===== */}
        <nav className="hidden md:flex gap-6 text-sm text-gray-700">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`hover:text-[var(--rdbRoyal)] transition ${
                location.pathname === item.path
                  ? "text-[var(--rdbRoyal)] font-medium underline"
                  : ""
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* ===== Right Side (Cart + Mobile Menu) ===== */}
        <div className="flex items-center gap-3">
          {/* Cart Button */}
          <button
            onClick={onOpenCart}
            className="flex items-center gap-2 bg-[var(--rdbGold)] text-[var(--rdbRoyal)] px-4 py-2 rounded-md text-sm font-medium shadow hover:bg-white hover:shadow-gold transition"
          >
            <ShoppingBag size={16} />
            <span>Cart</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-[var(--rdbRoyal)] text-2xl"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* ===== Mobile Menu ===== */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/95 shadow-inner border-t text-center py-4 flex flex-col gap-3"
          >
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-gray-700 hover:text-[var(--rdbRoyal)] transition ${
                  location.pathname === item.path
                    ? "text-[var(--rdbRoyal)] font-medium"
                    : ""
                }`}
              >
                {item.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
