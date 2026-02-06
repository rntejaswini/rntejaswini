import { useState } from "react";
import { motion } from "framer-motion";

function Research() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="research" className="py-24 px-8">
      <h2 className="text-4xl font-bold text-purple-400 mb-10">
        Research Work
      </h2>

      {/* Wrapper */}
      <motion.div
        initial="rest"
        animate={isOpen ? "hover" : "rest"}
        whileHover={{ scale: 1 }} // keep hover scaling
        className="relative max-w-4xl mx-auto cursor-pointer"
        onClick={() => setIsOpen(!isOpen)} // toggle on mobile
      >
        {/* Research Image */}
        <motion.img
          variants={{
            rest: { scale: 1 },
            hover: { scale: 1.05 },
          }}
          transition={{ duration: 0.4 }}
          src="/research.png" // put image in public folder
          alt="Research Work"
          className="w-full h-[500px] object-cover rounded-xl shadow-lg"
        />

        {/* Glass Card */}
        <motion.div
          variants={{
            rest: { y: 120, opacity: 0 },
            hover: { y: 0, opacity: 1 },
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="absolute inset-0 glass p-8 rounded-xl flex flex-col justify-center"
        >
          <h3 className="text-2xl font-semibold text-white">
            AI-Powered Healthcare System for Early Disease Detection
          </h3>

          <p className="mt-2 text-gray-300">
            <strong>Author:</strong> Tejaswini R N
          </p>

          <p className="text-gray-300">
            <strong>Journal:</strong> IJIRT
          </p>

          <p className="text-gray-300">
            <strong>Domain:</strong> AI, ML, Healthcare
          </p>

          <p className="mt-4 text-gray-200 leading-relaxed">
            This research began by identifying real-world healthcare challenges
            such as delayed diagnosis and fragmented digital care. Extensive
            analysis of national and international journals helped uncover
            research gaps. Based on these insights, machine learning models were
            designed, evaluated, and documented into a structured research paper
            that was successfully published.
          </p>

          <div className="flex gap-6 mt-6">
            <a
              href="https://ijirt.org/publishedpaper/IJIRT187915_PAPER.pdf"
              target="_blank"
              className="text-purple-400 hover:underline"
            >
              View Publication →
            </a>

            <a
              href="https://github.com/rntejaswini/AI-Powered-Healthcare-system-for-early-disease-detection"
              target="_blank"
              className="text-green-400 hover:underline"
            >
              GitHub Repository →
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Research;
