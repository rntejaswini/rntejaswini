import React from "react";
import { motion } from "framer-motion";

const FloatingLogo = ({ icon: Icon, label, link, style }) => {
  return (
    <motion.a
      href={link || "#"}
      target={link ? "_blank" : "_self"}
      rel="noopener noreferrer"
      className="absolute group cursor-pointer z-20"
      style={style}
      animate={{ y: ["0px", "-14px", "0px"] }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {/* ICON */}
      <Icon
        size={42}
        className="text-purple-400 hover:text-white transition duration-300"
      />

      {/* TOOLTIP */}
      <span
        className="
          pointer-events-none
          absolute -bottom-10 left-1/2 -translate-x-1/2
          bg-black/90 text-white text-xs px-3 py-1 rounded-md
          opacity-0 group-hover:opacity-100
          transition duration-200
          whitespace-nowrap shadow-lg
        "
      >
        {label}
      </span>
    </motion.a>
  );
};

export default FloatingLogo;
