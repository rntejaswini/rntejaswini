import { motion } from "framer-motion";

const ThreeDPhoto = () => {
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex items-center justify-center relative"
    >
      {/* Rotating Gradient Ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        className="
          absolute
          w-80 h-80 md:w-96 md:h-96
          rounded-full
          border-4
          border-gradient-to-tr from-purple-400 via-pink-400 to-indigo-400
          p-1
        "
      ></motion.div>

      {/* Profile Image with floating effect */}
      <motion.div
        animate={{
          y: [0, -10, 0, 10, 0], // float up and down
          x: [0, 5, 0, -5, 0],   // subtle horizontal shift
          rotate: [0, 2, 0, -2, 0], // slight rotation for 3D feel
        }}
        transition={{
          repeat: Infinity,
          duration: 6,
          ease: "easeInOut",
        }}
        whileHover={{ scale: 1.05 }}
        className="
          w-72 h-72 md:w-80 md:h-80
          rounded-full
          overflow-hidden
          border-2 border-white/20
          bg-purple-900/50
          relative
        "
      >
        <img
          src="/profile.jpg"
          alt="Tejaswini RN"
          className="w-full h-full object-cover rounded-full"
        />
      </motion.div>

      
    </motion.div>
  );
};

export default ThreeDPhoto;
