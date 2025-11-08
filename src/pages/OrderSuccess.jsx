import React from "react";
import { useParams, Link } from "react-router-dom";

export default function OrderSuccess() {
  const { id } = useParams();

  return (
    <main className="max-w-2xl mx-auto text-center py-20">
      <h1 className="text-3xl font-serif text-[var(--rdbRoyal)] mb-4">
        🎉 Thank You for Your Order!
      </h1>
      <p className="text-gray-600 mb-6">
        Your order has been successfully placed. Your Order ID is:
      </p>
      <div className="bg-[var(--rdbIvory)] border border-[var(--rdbGold)] rounded p-3 mb-6">
        <span className="font-mono text-[var(--rdbRoyal)]">{id}</span>
      </div>
      <Link
        to="/shop"
        className="bg-[var(--rdbGold)] text-white px-5 py-2 rounded hover:bg-[var(--rdbRoyal)] transition"
      >
        Continue Shopping
      </Link>
    </main>
  );
}
