// src/components/SocialImpactModal.jsx
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const SocialImpactModal = ({ impact, close, startIndex = 0 }) => {
  const [currentIndex, setCurrentIndex] = useState(startIndex);

  useEffect(() => {
    setCurrentIndex(startIndex);
  }, [startIndex]);

  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? impact.documentation.length - 1 : prev - 1
    );
  };

  const nextImage = () => {
    setCurrentIndex((prev) =>
      prev === impact.documentation.length - 1 ? 0 : prev + 1
    );
  };

  const swipeConfidenceThreshold = 10000;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* MODAL BOX */}
        <motion.div
          className="relative w-full max-w-3xl bg-black/60 border border-white/20 rounded-2xl p-6"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.8 }}
          transition={{ type: "spring", stiffness: 260 }}
        >
          {/* CLOSE BUTTON (fixed position inside modal) */}
          <button
            onClick={close}
            className="absolute top-4 right-4 text-2xl text-purple-400 hover:text-purple-300"
          >
            ✕
          </button>

          {/* IMAGE AREA */}
          <div className="relative flex items-center justify-center">
            {/* LEFT */}
            <button
              onClick={prevImage}
              className="absolute left-0 text-2xl text-purple-400 hover:text-purple-300 hidden md:flex"
            >
              <FaChevronLeft />
            </button>

            {/* IMAGE */}
            <motion.img
              key={impact.documentation[currentIndex]}
              src={impact.documentation[currentIndex]}
              alt={`${impact.title} ${currentIndex + 1}`}
              className="w-full max-w-xl max-h-[60vh] object-contain rounded-xl border border-white/20"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = Math.abs(offset.x) * velocity.x;
                if (swipe < -swipeConfidenceThreshold) nextImage();
                else if (swipe > swipeConfidenceThreshold) prevImage();
              }}
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -80 }}
              transition={{ duration: 0.4 }}
            />

            {/* RIGHT */}
            <button
              onClick={nextImage}
              className="absolute right-0 text-2xl text-purple-400 hover:text-purple-300 hidden md:flex"
            >
              <FaChevronRight />
            </button>
          </div>

          {/* TEXT */}
          <h2 className="text-purple-400 text-xl font-bold mt-4 text-center">
            {impact.title}
          </h2>

          <p className="text-gray-300 mt-2 text-center text-sm px-2">
            {impact.details}
          </p>

          <p className="text-gray-400 text-sm mt-1 text-center">
            {currentIndex + 1} / {impact.documentation.length}
          </p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default SocialImpactModal;
