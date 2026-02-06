// src/components/CertificateModal.jsx
import { motion } from "framer-motion";

const CertificateModal = ({ cert, close }) => {
  if (!cert) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
      <motion.div
        initial={{ scale: 0.85 }}
        animate={{ scale: 1 }}
        className="glass p-6 rounded-2xl w-[90%] max-w-2xl relative"
      >
        <button
          onClick={close}
          className="absolute top-3 right-4 text-xl text-gray-300 hover:text-white"
        >
          ✕
        </button>

        <iframe
          src={cert.file}
          title={cert.title}
          className="w-full h-[400px] rounded-xl mb-4"
        />

        <h3 className="text-2xl text-purple-400 font-semibold">{cert.title}</h3>
        <p className="text-gray-300 mt-2">
          Issued by <span className="text-purple-300">{cert.issuedBy}</span>
        </p>

        <button
          onClick={() => window.open(cert.file, "_blank")}
          className="inline-block mt-5 px-5 py-2 rounded-lg border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black transition"
        >
          Open in New Tab →
        </button>
      </motion.div>
    </div>
  );
};

export default CertificateModal;
