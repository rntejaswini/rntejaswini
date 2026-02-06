// src/components/Certificates.jsx
import { motion } from "framer-motion";
import { 
  Award, 
  ShieldCheck, 
  Cloud, 
  Code2, 
  GraduationCap, 
  BookOpen, 
  Network, 
  Timer 
} from "lucide-react";

import { certificates } from "../data/certificates";

// Map certificate keywords to icons
const ICON_MAP = {
  Python: Code2,
  Cloud: Cloud,
  Time: Timer,
  Hacker: ShieldCheck,
  Communication: Award,
  Networking: Network,
  Machine: GraduationCap,
  Basics: BookOpen,
  Big: Network,
  AI: Code2,
  LaTeX: BookOpen,
  Work: Award,
  Web: Cloud,
  Supervised: GraduationCap,
  C: Code2,
  Speed: Timer,
  English: BookOpen,
};

const Certificates = () => {
  return (
    <section id="certificates" className="py-24 px-8">
      <h2 className="text-4xl font-bold text-purple-400 mb-10">
        Certifications 📜
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {certificates.map((cert, i) => {
          const Icon =
            Object.entries(ICON_MAP).find(([key]) =>
              cert.title.includes(key)
            )?.[1] || Award;

          return (
            <motion.div
              key={i}
              whileHover={{ y: -6, scale: 1.05 }}
              className="relative group glass p-6 rounded-xl border border-white/10 overflow-hidden"
            >
              {/* DEFAULT VIEW */}
              <div className="flex flex-col items-center text-center gap-3 group-hover:opacity-0 transition">
                <Icon size={30} className="text-purple-400" />
                <p className="text-sm font-medium text-gray-200">{cert.title}</p>
              </div>

              {/* HOVER OVERLAY */}
              <div className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition pointer-events-none">
                <p className="text-sm text-gray-300 text-center px-3">
                  Issued by{" "}
                  <span className="text-purple-300">{cert.issuedBy}</span>
                </p>

                <a
                  href={cert.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pointer-events-auto px-5 py-2 text-sm rounded-lg border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black transition"
                >
                  View Certificate →
                </a>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Certificates;
