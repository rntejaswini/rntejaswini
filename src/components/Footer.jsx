import { FaGithub, FaLinkedin, FaEnvelope, FaReact } from "react-icons/fa";

const Footer = () => (
  <footer className="bg-gradient-to-r from-purple-900 via-black to-purple-900 text-gray-300 py-8 px-6">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      
      {/* LEFT: COPYRIGHT */}
      <p className="text-sm md:text-base text-gray-400">
        © {new Date().getFullYear()} <strong>Tejaswini RN</strong> · CS & Software Enthusiast
      </p>

      {/* CENTER: TECH ICON */}
      <div className="flex items-center gap-2 text-purple-400">
        <FaReact className="animate-spin-slow text-xl" />
        <span className="text-sm md:text-base">React & Web Dev Portfolio</span>
      </div>

      {/* RIGHT: SOCIAL LINKS */}
      <div className="flex gap-4 text-gray-300">
        <a href="https://github.com/rntejaswini" target="_blank" rel="noreferrer" className="hover:text-purple-400 transition">
          <FaGithub className="text-xl" />
        </a>
        <a href="https://www.linkedin.com/in/tejaswini-rn" target="_blank" rel="noreferrer" className="hover:text-purple-400 transition">
          <FaLinkedin className="text-xl" />
        </a>
        <a href="mailto:rntejaswini03@gmail.com" className="hover:text-purple-400 transition">
          <FaEnvelope className="text-xl" />
        </a>
      </div>
    </div>

    
  </footer>
);

export default Footer;
