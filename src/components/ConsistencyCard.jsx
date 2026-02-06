import React from "react";
import { motion } from "framer-motion";

const ConsistencyCard = ({ title, icon: Icon, value, subtitle }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.08 }}
      className="
        bg-black/40 backdrop-blur
        border border-purple-600
        rounded-xl p-6
        flex flex-col items-center gap-3
        text-center
        hover:shadow-purple-500/40
        transition
      "
    >
      <Icon className="text-4xl text-purple-400" />

      <h3 className="text-lg font-semibold text-purple-300">
        {title}
      </h3>

      <p className="text-3xl font-bold text-white">
        {value}
      </p>

      {subtitle && (
        <p className="text-sm text-gray-400">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default ConsistencyCard;
