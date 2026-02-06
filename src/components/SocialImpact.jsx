import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaFire } from "react-icons/fa";
import { socialImpacts } from "../data/socialImpactData";
import SocialImpactModal from "./SocialImpactModal";

const SocialImpact = () => {
  const [active, setActive] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const openModalAt = (impact, index) => {
    setActive(impact);
    setActiveImageIndex(index);
  };

  return (
    <section id="social-impact" className="py-24 px-6 overflow-hidden bg-black">
      <h1 className="text-4xl font-bold mb-12 text-center text-purple-400 animate-pulse">
        Social Impact Activites 🌍
      </h1>

      {/* CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {socialImpacts.map((impact, idx) => (
          <motion.div
            key={idx}
            className="glass rounded-2xl p-6 cursor-pointer border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-500"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-2 text-purple-400">
              {impact.title}
            </h2>

            <p className="text-gray-300 mb-2">
              {impact.shortDesc}
            </p>

            <div className="flex gap-3 py-2 overflow-x-hidden no-scrollbar">
              {impact.documentation.map((img, i) => (
                <motion.img
                  key={i}
                  src={img}
                  alt=""
                  className="w-32 h-28 object-cover rounded-lg border border-white/20 cursor-pointer"
                  whileHover={{ scale: 1.1 }}
                  onClick={() => openModalAt(impact, i)}
                />
              ))}
            </div>

            <motion.button
              className="mt-3 text-purple-400 hover:underline font-semibold"
              onClick={() => openModalAt(impact, 0)}
            >
              View Documentation
            </motion.button>
          </motion.div>
        ))}
      </div>

      {/* 🌟 QUOTE — SAME EFFECT AS CONSISTENCY */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-14 flex justify-center"
      >
        <div
          className="
            px-6 py-3 rounded-full
            bg-purple-900/20 backdrop-blur
            border border-purple-500/30
            text-purple-200 text-sm md:text-base
            flex items-center gap-2
          "
        >
          <FaFire className="text-purple-400" />
          <span>
            Real change happens when <strong>skills meet service</strong> — learning by giving back.
          </span>
        </div>
      </motion.div>

      {/* MODAL */}
      <AnimatePresence>
        {active && (
          <SocialImpactModal
            impact={active}
            close={() => setActive(null)}
            startIndex={activeImageIndex}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default SocialImpact;
