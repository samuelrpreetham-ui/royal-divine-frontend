import React, { useState } from "react";

export default function Custom() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: "Lehenga",
    sizeType: "standard",
    measurements: "",
    notes: "",
  });
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your custom stitching request has been submitted 💃");
  };

  return (
    <main className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-serif text-[var(--rdbRoyal)] mb-2">
        Custom Stitching & Made to Measure
      </h1>
      <p className="text-gray-600 mb-8">
        Upload your reference design, provide your measurements, and we’ll
        craft your perfect outfit.
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-6 space-y-6"
      >
        {/* Name & Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border rounded-md px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border rounded-md px-3 py-2"
            />
          </div>
        </div>

        {/* Category & Size Type */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Garment Category
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2"
            >
              <option>Lehenga</option>
              <option>Kurtis</option>
              <option>Anarkali</option>
              <option>Gown</option>
              <option>Kidswear</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Size Type</label>
            <select
              name="sizeType"
              value={formData.sizeType}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2"
            >
              <option value="standard">Standard Size</option>
              <option value="custom">Custom Measurements</option>
            </select>
          </div>
        </div>

        {/* Measurements */}
        {formData.sizeType === "custom" && (
          <div>
            <label className="block text-sm font-medium mb-1">
              Measurements (cm)
            </label>
            <textarea
              name="measurements"
              value={formData.measurements}
              onChange={handleChange}
              placeholder="Bust – …, Waist – …, Hip – …, Length – …"
              className="w-full border rounded-md px-3 py-2 h-24"
            ></textarea>
          </div>
        )}

        {/* Notes */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Personalization Notes
          </label>
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            placeholder="Describe embroidery, neckline, sleeve style, etc."
            className="w-full border rounded-md px-3 py-2 h-24"
          ></textarea>
        </div>

        {/* Image Upload */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Reference Design Image
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setFile(e.target.files[0])}
            className="w-full border rounded-md px-3 py-2"
          />
          {file && (
            <p className="text-xs text-gray-600 mt-1">
              Uploaded: {file.name}
            </p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="bg-[var(--rdbRoyal)] text-white px-6 py-2 rounded-md hover:bg-[var(--rdbGold)] transition"
        >
          Submit Request
        </button>
      </form>
    </main>
  );
}
