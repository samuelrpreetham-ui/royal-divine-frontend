import React, { useState } from "react";
import { motion } from "framer-motion";
import { Upload, Image as ImageIcon, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export default function TryOn() {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [selectedOutfit, setSelectedOutfit] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) setUploadedImage(URL.createObjectURL(file));
  };

  const handleOutfitSelect = (outfit) => {
    setSelectedOutfit(outfit);
  };

  const handleTryOn = () => {
    if (!uploadedImage || !selectedOutfit) return alert("Please upload your image and select an outfit!");
    alert("🪄 AI Try-On processing... (coming soon!)");
  };

  return (
    <main className="min-h-screen bg-[var(--rdbIvory)] text-gray-800 py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Header */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-serif text-[var(--rdbRoyal)] mb-4"
        >
          AI Virtual Try-On
        </motion.h1>

        <p className="text-gray-600 mb-10">
          Upload your photo and preview how you’ll look in our latest{" "}
          <span className="text-[var(--rdbGold)] font-medium">Anarkalis</span> and{" "}
          <span className="text-[var(--rdbGold)] font-medium">Lehengas</span>.
        </p>

        {/* Upload Section */}
        <div className="bg-white rounded-2xl shadow-soft p-8 border border-[var(--rdbGold)]/20 max-w-3xl mx-auto">
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center gap-6"
          >
            {uploadedImage ? (
              <div className="relative">
                <img
                  src={uploadedImage}
                  alt="Uploaded"
                  className="w-60 h-60 object-cover rounded-xl border-2 border-[var(--rdbGold)]"
                />
                <button
                  onClick={() => setUploadedImage(null)}
                  className="absolute -top-2 -right-2 bg-[var(--rdbRoyal)] text-white text-xs px-2 py-1 rounded-full shadow"
                >
                  ✕
                </button>
              </div>
            ) : (
              <label className="cursor-pointer flex flex-col items-center justify-center gap-3 border-2 border-dashed border-[var(--rdbGold)] rounded-xl p-10 w-60 h-60 bg-[var(--rdbBlush)] hover:bg-[var(--rdbGold)]/10 transition">
                <Upload className="text-[var(--rdbGold)] w-10 h-10" />
                <span className="text-sm text-[var(--rdbRoyal)] font-medium">
                  Upload Your Photo
                </span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </label>
            )}
          </motion.div>

          {/* Outfit Selector */}
          <div className="mt-10">
            <h2 className="text-xl font-serif text-[var(--rdbRoyal)] mb-4">
              Choose an Outfit
            </h2>
            <div className="flex justify-center gap-6 overflow-x-auto pb-4 scrollbar-thin">
              {[
                {
                  name: "Golden Royal Anarkali",
                  img: "https://images.unsplash.com/photo-1621681046870-9b1d02f3f47f?auto=format&fit=crop&w=600&q=80",
                },
                {
                  name: "Crimson Silk Lehenga",
                  img: "https://images.unsplash.com/photo-1609951653944-29f8f1cbfdf1?auto=format&fit=crop&w=600&q=80",
                },
                {
                  name: "Ivory Mirror Anarkali",
                  img: "https://images.unsplash.com/photo-1618245318763-d443cd95e1c5?auto=format&fit=crop&w=600&q=80",
                },
                {
                  name: "Emerald Velvet Gown",
                  img: "https://images.unsplash.com/photo-1604379583903-09a03f0a00b8?auto=format&fit=crop&w=600&q=80",
                },
              ].map((outfit, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => handleOutfitSelect(outfit)}
                  className={`min-w-[150px] rounded-lg overflow-hidden border-2 cursor-pointer transition ${
                    selectedOutfit?.name === outfit.name
                      ? "border-[var(--rdbGold)] shadow-gold"
                      : "border-[var(--rdbGold)]/20"
                  }`}
                >
                  <img
                    src={outfit.img}
                    alt={outfit.name}
                    className="w-full h-40 object-cover"
                  />
                  <div className="py-2 bg-white text-[var(--rdbRoyal)] text-sm font-medium">
                    {outfit.name}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Try On Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            onClick={handleTryOn}
            className="mt-8 px-8 py-3 bg-[var(--rdbGold)] text-[var(--rdbRoyal)] font-medium rounded-full shadow-soft hover:shadow-gold transition"
          >
            <Sparkles className="inline-block mr-2 w-4 h-4" />
            Try On Outfit
          </motion.button>
        </div>

        {/* Back to Shop */}
        <div className="mt-12">
          <Link
            to="/shop"
            className="text-[var(--rdbRoyal)] font-medium hover:text-[var(--rdbGold)] transition"
          >
            ← Back to Shop
          </Link>
        </div>
      </div>
    </main>
  );
}
