import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <main className="min-h-screen bg-[var(--rdbIvory)] text-gray-800 py-16">
      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* ===== Header ===== */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-serif text-[var(--rdbRoyal)] mb-6"
        >
          About Royal Divine Boutique
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-gray-600 leading-relaxed max-w-3xl mx-auto mb-12"
        >
          Royal Divine Boutique is a modern celebration of Indian elegance —
          created for today’s women who value both tradition and trend.  
          Founded with a passion for craftsmanship, our boutique blends classic
          Indian aesthetics with a contemporary edge, delivering outfits that
          empower confidence and grace for every occasion.
        </motion.p>

        {/* ===== Craftsmanship Section ===== */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-2xl font-serif text-[var(--rdbRoyal)] mb-4">
            Our Craftsmanship
          </h2>
          <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Though we’re a first-generation brand, every piece at Royal Divine Boutique
            is built on dedication, artistry, and an obsession with detail.  
            Our team of skilled artisans and designers bring creativity to life —  
            weaving modern silhouettes, fine embroidery, and high-quality fabrics
            into collections that reflect the essence of Indian femininity and
            celebration.  
          </p>
        </motion.section>

        {/* ===== Design Philosophy Section ===== */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-2xl font-serif text-[var(--rdbRoyal)] mb-4">
            Our Design Philosophy
          </h2>
          <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
            We don’t just follow trends — we interpret them through a Royal Divine lens.  
            Our collections capture a fusion of timeless Indian heritage and
            modern silhouettes, designed to make every woman feel elegant, radiant,
            and distinctly herself.
          </p>
        </motion.section>

        {/* ===== Values Section ===== */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-2xl font-serif text-[var(--rdbRoyal)] mb-4">
            What We Stand For
          </h2>
          <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
        
            At Royal Divine Boutique- our mission is to create quality, beauty, and confidence through design.
            We believe in empowering individuality, offering made-to-measure
            experiences, and giving our customers the freedom to express themselves
            through personalized fashion.
          </p>
        </motion.section>

        {/* ===== Closing Statement ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white p-8 rounded-xl shadow-soft border border-[var(--rdbGold)]/20 max-w-3xl mx-auto"
        >
          <h3 className="text-xl font-serif text-[var(--rdbRoyal)] mb-3">
            The Royal Divine Promise
          </h3>
          <p className="text-gray-700 leading-relaxed">
            We’re not a legacy brand — we’re the beginning of one.  
            Every outfit is a symbol of modern craftsmanship, elegance, and
            originality. With Royal Divine Boutique, you don’t just wear fashion —
            you wear your own story.
          </p>
        </motion.div>
      </div>
    </main>
  );
}
