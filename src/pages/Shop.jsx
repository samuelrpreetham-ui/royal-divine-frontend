import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Shop() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ Fetch products from backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/products");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("❌ Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts(`${import.meta.env.VITE_API_BASE_URL}/api/products`);
  }, []);

  // ✅ Loading screen
  if (loading) {
    return (
      <main className="flex flex-col items-center justify-center h-screen text-[var(--rdbRoyal)] font-serif">
        <div className="text-xl animate-pulse">Loading beautiful outfits for you...</div>
      </main>
    );
  }

  // ✅ Shop grid layout
  return (
    <main className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-serif text-[var(--rdbRoyal)] text-center mb-10">
        Shop Our Collection
      </h1>

      {products.length === 0 ? (
        <p className="text-center text-gray-600">No products available yet.</p>
      ) : (
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product, index) => (
            <motion.div
              key={product._id || index}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition-shadow duration-300 border border-gray-100"
              whileHover={{ scale: 1.03 }}
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-72 object-cover"
              />
              <div className="p-4 flex flex-col justify-between">
                <h2 className="text-lg font-semibold text-gray-800 font-serif">
                  {product.name}
                </h2>
                <p className="text-sm text-gray-500 mt-1">{product.category}</p>
                <p className="text-[var(--rdbRoyal)] font-medium text-lg mt-2">
                  ₹{product.price.toLocaleString("en-IN")}
                </p>
                <button className="mt-3 bg-[var(--rdbRoyal)] text-white px-4 py-2 rounded-lg w-full hover:bg-[#a67c52] transition-colors">
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </main>
  );
}
