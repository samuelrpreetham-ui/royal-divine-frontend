import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Home() {
  const { addToCart } = useCart();

  return (
    <main className="bg-[var(--rdbIvory)] text-gray-800">
      {/* ===== Hero Section (Anarkali Theme) ===== */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image - Anarkali Focus */}
        <motion.img
          src="https://images.unsplash.com/photo-1621681046870-9b1d02f3f47f?auto=format&fit=crop&w=1600&q=80"
          alt="Royal Divine Boutique - Elegant Anarkali Collection"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-80"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 8, ease: "easeOut" }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>

        {/* Hero Text */}
        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-serif text-[var(--rdbIvory)] mb-4 drop-shadow-lg"
          >
            Grace in Every Thread
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.4 }}
            className="text-[var(--rdbIvory)] text-lg md:text-xl mb-10 font-light tracking-wide drop-shadow"
          >
            Discover our latest handcrafted{" "}
            <span className="text-[var(--rdbGold)] font-medium">
              Anarkali
            </span>{" "}
            collection — elegance redefined.
          </motion.p>

          {/* Shimmer Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.8 }}
            className="inline-block relative group"
          >
            <Link
              to="/shop"
              className="bg-[var(--rdbGold)] text-[var(--rdbRoyal)] px-8 py-3 rounded-full font-medium shadow-soft relative overflow-hidden"
            >
              <span className="relative z-10">Explore Anarkalis</span>
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-0 group-hover:opacity-100"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 1 }}
              />
            </Link>
          </motion.div>
        </div>

        {/* Soft bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--rdbIvory)] to-transparent"></div>
      </section>

      {/* ===== Category Section ===== */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-serif text-center text-[var(--rdbRoyal)] mb-10">
          Explore Our Categories
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {[
            {
              name: "Lehengas",
              img: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=600&q=80",
            },
            {
              name: "Kurtis",
              img: "https://images.unsplash.com/photo-1618245306535-c7e00b4cd42f?auto=format&fit=crop&w=600&q=80",
            },
            {
              name: "Anarkalis",
              img: "https://images.unsplash.com/photo-1621681046870-9b1d02f3f47f?auto=format&fit=crop&w=600&q=80",
            },
            {
              name: "Gowns",
              img: "https://images.unsplash.com/photo-1609951653944-29f8f1cbfdf1?auto=format&fit=crop&w=600&q=80",
            },
            {
              name: "Kidswear",
              img: "https://images.unsplash.com/photo-1604379583903-09a03f0a00b8?auto=format&fit=crop&w=600&q=80",
            },
          ].map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="rounded-lg overflow-hidden shadow-soft cursor-pointer group bg-white"
            >
              <img
                src={cat.img}
                alt={cat.name}
                className="w-full h-52 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="bg-white text-center py-3 font-medium text-[var(--rdbRoyal)] border-t border-[var(--rdbGold)]/20">
                {cat.name}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== Featured Anarkalis Section ===== */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-serif text-center text-[var(--rdbRoyal)] mb-10">
          Featured Anarkalis
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-[var(--rdbGold)] scrollbar-track-[var(--rdbIvory)]">
            {[
              {
                id: 1,
                name: "Golden Royal Anarkali",
                price: 7999,
                img: "https://images.unsplash.com/photo-1621681046870-9b1d02f3f47f?auto=format&fit=crop&w=800&q=80",
              },
              {
                id: 2,
                name: "Crimson Silk Anarkali",
                price: 8999,
                img: "https://images.unsplash.com/photo-1609951653944-29f8f1cbfdf1?auto=format&fit=crop&w=800&q=80",
              },
              {
                id: 3,
                name: "Ivory Mirror Work Anarkali",
                price: 8499,
                img: "https://images.unsplash.com/photo-1618245318763-d443cd95e1c5?auto=format&fit=crop&w=800&q=80",
              },
              {
                id: 4,
                name: "Blush Peach Anarkali",
                price: 7299,
                img: "https://images.unsplash.com/photo-1618245306535-c7e00b4cd42f?auto=format&fit=crop&w=800&q=80",
              },
              {
                id: 5,
                name: "Emerald Velvet Anarkali",
                price: 9599,
                img: "https://images.unsplash.com/photo-1604379583903-09a03f0a00b8?auto=format&fit=crop&w=800&q=80",
              },
            ].map((product, i) => (
              <motion.div
                key={product.id}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="min-w-[240px] md:min-w-[280px] bg-white rounded-lg shadow-soft overflow-hidden cursor-pointer group"
              >
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="p-4">
                  <h3 className="text-[var(--rdbRoyal)] font-medium text-base mb-1">
                    {product.name}
                  </h3>
                  <p className="text-[var(--rdbGold)] font-semibold mb-3">
                    ₹{product.price.toLocaleString()}
                  </p>
                  <button
                    onClick={() => addToCart(product)}
                    className="bg-[var(--rdbGold)] text-[var(--rdbRoyal)] px-4 py-2 rounded-md text-sm font-medium shadow hover:bg-white hover:shadow-gold transition"
                  >
                    Add to Cart
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </main>
  );
}
