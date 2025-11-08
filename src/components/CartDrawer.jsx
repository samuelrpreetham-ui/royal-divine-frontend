import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "../context/CartContext";

export default function CartDrawer({ open, onClose }) {
  const { cartItems, removeFromCart, updateQuantity, total } = useCart();

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Background overlay */}
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-40"
            onClick={onClose}
          />

          {/* Cart Drawer */}
          <motion.div
            key="drawer"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
            className="fixed right-0 top-0 w-80 h-full bg-white z-50 shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="p-4 border-b flex justify-between items-center">
              <h2 className="font-serif text-xl text-[var(--rdbRoyal)]">
                Your Cart
              </h2>
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-black text-lg"
              >
                ✕
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-4">
              {cartItems.length === 0 ? (
                <p className="text-gray-500 text-center mt-10">
                  Your cart is empty.
                </p>
              ) : (
                cartItems.map((item) => (
                  <div
                    key={item._id || item.id}
                    className="flex items-center gap-3 mb-4 border-b pb-2"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h3 className="text-sm font-medium text-[var(--rdbRoyal)]">
                        {item.name}
                      </h3>
                      <p className="text-xs text-gray-500">
                        ₹{item.price.toLocaleString("en-IN")}
                      </p>
                      <div className="flex items-center gap-2 mt-1">
                        <button
                          onClick={() =>
                            updateQuantity(item._id || item.id, item.quantity - 1)
                          }
                          className="px-2 text-gray-500 hover:text-[var(--rdbRoyal)]"
                        >
                          -
                        </button>
                        <span className="text-sm">{item.quantity}</span>
                        <button
                          onClick={() =>
                            updateQuantity(item._id || item.id, item.quantity + 1)
                          }
                          className="px-2 text-gray-500 hover:text-[var(--rdbRoyal)]"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <button
                      onClick={() => removeFromCart(item._id || item.id)}
                      className="text-gray-400 hover:text-red-500 text-sm"
                    >
                      Remove
                    </button>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            <div className="p-4 border-t bg-[var(--rdbIvory)]">
              <div className="flex justify-between font-medium text-[var(--rdbRoyal)] mb-3">
                <span>Total:</span>
                <span>₹{total.toLocaleString("en-IN")}</span>
              </div>
              <button
                onClick={onClose}
                className="w-full bg-[var(--rdbRoyal)] text-white py-2 rounded-lg hover:bg-[var(--rdbGold)] transition"
              >
                Checkout
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
