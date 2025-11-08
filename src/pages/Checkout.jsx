import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const { cartItems, total, clearCart } = useCart();
  const [customer, setCustomer] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handlePlaceOrder = async () => {
    if (!customer.name || !customer.email || !customer.address) {
      alert("Please fill all required fields!");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: cartItems.map((i) => ({
            productId: i._id,
            name: i.name,
            image: i.image,
            price: i.price,
            quantity: i.quantity,
          })),
          customer,
          total,
        }),
      });

      const data = await res.json();
      if (res.ok) {
        clearCart();
        navigate(`/order-success/${data.order._id}`);
      } else {
        alert(data.message || "Order failed");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong while placing your order.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-serif text-[var(--rdbRoyal)] mb-4">Checkout</h1>

      <div className="space-y-3 mb-6">
        <input
          type="text"
          placeholder="Full Name"
          value={customer.name}
          onChange={(e) => setCustomer({ ...customer, name: e.target.value })}
          className="w-full border p-2 rounded"
        />
        <input
          type="email"
          placeholder="Email"
          value={customer.email}
          onChange={(e) => setCustomer({ ...customer, email: e.target.value })}
          className="w-full border p-2 rounded"
        />
        <input
          type="tel"
          placeholder="Phone"
          value={customer.phone}
          onChange={(e) => setCustomer({ ...customer, phone: e.target.value })}
          className="w-full border p-2 rounded"
        />
        <textarea
          placeholder="Full Address"
          value={customer.address}
          onChange={(e) => setCustomer({ ...customer, address: e.target.value })}
          className="w-full border p-2 rounded"
        />
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-medium text-[var(--rdbRoyal)]">Order Summary</h2>
        {cartItems.map((item) => (
          <div key={item._id} className="flex justify-between border-b py-2">
            <span>{item.name}</span>
            <span>₹{item.price * item.quantity}</span>
          </div>
        ))}
        <div className="flex justify-between font-bold mt-3">
          <span>Total:</span>
          <span>₹{total.toLocaleString("en-IN")}</span>
        </div>
      </div>

      <button
        onClick={handlePlaceOrder}
        disabled={loading}
        className="w-full bg-[var(--rdbRoyal)] text-white py-3 rounded-md hover:bg-[var(--rdbGold)] transition"
      >
        {loading ? "Placing your order..." : "Place Order"}
      </button>
    </main>
  );
}
