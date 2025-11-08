import React from "react";
import { Facebook, Instagram, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[var(--rdbIvory)] border-t border-[var(--rdbGold)]/30 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10 text-sm text-gray-700">
        
        {/* ===== Brand Section ===== */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img
              src="/logo.png"
              alt="Royal Divine Boutique Logo"
              className="h-10 w-auto object-contain"
            />
            <span className="font-serif text-lg text-[var(--rdbRoyal)]">
              Royal Divine Boutique
            </span>
          </div>
          <p className="text-gray-600 leading-relaxed">
            A celebration of modern Indian elegance. Each garment is crafted
            with passion, precision, and a touch of royalty.
          </p>
        </div>

        {/* ===== Quick Links ===== */}
        <div>
          <h3 className="text-[var(--rdbRoyal)] font-semibold mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-[var(--rdbRoyal)] transition">Home</Link></li>
            <li><Link to="/shop" className="hover:text-[var(--rdbRoyal)] transition">Shop</Link></li>
            <li><Link to="/custom" className="hover:text-[var(--rdbRoyal)] transition">Custom Stitching</Link></li>
            <li><Link to="/tryon" className="hover:text-[var(--rdbRoyal)] transition">AI Try-On</Link></li>
            <li><Link to="/about" className="hover:text-[var(--rdbRoyal)] transition">About Us</Link></li>
          </ul>
        </div>

        {/* ===== Customer Care ===== */}
        <div>
          <h3 className="text-[var(--rdbRoyal)] font-semibold mb-4">
            Customer Care
          </h3>
          <ul className="space-y-2">
            <li><Link to="/returns" className="hover:text-[var(--rdbRoyal)] transition">Return Policy</Link></li>
            <li><Link to="/shipping" className="hover:text-[var(--rdbRoyal)] transition">Shipping Info</Link></li>
            <li><Link to="/faq" className="hover:text-[var(--rdbRoyal)] transition">FAQs</Link></li>
            <li><Link to="/contact" className="hover:text-[var(--rdbRoyal)] transition">Contact Us</Link></li>
          </ul>
        </div>

        {/* ===== Contact & Social ===== */}
        <div>
          <h3 className="text-[var(--rdbRoyal)] font-semibold mb-4">
            Get In Touch
          </h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <Mail size={16} className="text-[var(--rdbGold)]" />
              <a href="mailto:support@royaldivineboutique.com" className="hover:text-[var(--rdbRoyal)] transition">
                support@royaldivineboutique.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-[var(--rdbGold)]" />
              <span>+91 98765 43210</span>
            </li>
          </ul>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <a href="#" className="hover:text-[var(--rdbRoyal)] transition">
              <Instagram size={18} />
            </a>
            <a href="#" className="hover:text-[var(--rdbRoyal)] transition">
              <Facebook size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* ===== Footer Bottom ===== */}
      <div className="border-t border-[var(--rdbGold)]/30 py-4 text-center text-xs text-gray-600">
        © {new Date().getFullYear()} Royal Divine Boutique. All rights reserved.  
        <span className="text-[var(--rdbGold)]"> ♥ </span> Made with love in India.
      </div>
    </footer>
  );
}
