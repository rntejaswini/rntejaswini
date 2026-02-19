import React from "react";
import { motion } from "framer-motion";
import FloatingLogo from "./FloatingLogo";
import ThreeDPhoto from "./ThreeDPhoto";

import {
  FaReact,
  FaLinkedin,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaJava,
  FaPython,
  FaGithub,
  FaLeaf,
  FaBookOpen,
  FaFire,
} from "react-icons/fa";

import {
  SiLeetcode,
  SiCodechef,
  SiHackerrank,
  SiHackerearth,
  SiC,
} from "react-icons/si";

const About = () => {
  return (
    <div
      id="about"
      className="
        relative w-full min-h-screen
        bg-gradient-to-br from-black via-purple-900 to-black
        text-white
        flex flex-col md:flex-row
        items-center md:justify-around
        justify-start
        pt-28 md:pt-0
        px-6 md:px-8
        overflow-hidden
      "
    >
      {/* LEFT CONTENT */}
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="
          md:w-1/2 w-full
          flex flex-col gap-5
          text-center md:text-left
          z-10
        "
      >
        <h1 className="text-3xl md:text-5xl font-bold">
          Hi, I'm <span className="text-purple-400">Tejaswini RN</span>
        </h1>

        <p className="text-gray-300 text-base md:text-lg leading-relaxed">
          A passionate{" "}
          <span className="text-purple-300">Software Developer</span> and
          Information Science & Engineering student, focused on building
          modern, scalable, and user-centric web applications using
          <span className="text-purple-300">
            {" "}
            React, Java, Python, C, and Full Stack technologies
          </span>
          .
        </p>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-4">
          <a
            href="public\Tejaswini R N Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="
              px-6 py-2 rounded-lg
              border border-purple-600
              text-purple-300 hover:bg-purple-600 hover:text-white
              transition font-semibold
            "
          >
            View Resume
          </a>

          <a
            href="#contact"
            className="
              px-6 py-2 rounded-lg
              border border-purple-600
              text-purple-300 hover:bg-purple-600 hover:text-white
              transition font-semibold
            "
          >
            Contact Me
          </a>
        </div>

        {/* SOCIAL LINKS */}
        <div className="flex flex-wrap gap-5 justify-center md:justify-start mt-6">
          <a href="https://github.com/rntejaswini" target="_blank" rel="noreferrer">
            <FaGithub className="text-3xl hover:text-purple-400 transition" />
          </a>
          <a href="https://www.linkedin.com/in/tejaswini-rn" target="_blank" rel="noreferrer">
            <FaLinkedin className="text-3xl hover:text-purple-400 transition" />
          </a>
          <a href="https://leetcode.com/u/25lhI0ZXuQ/" target="_blank" rel="noreferrer">
            <SiLeetcode className="text-3xl hover:text-purple-400 transition" />
          </a>
          <a href="https://www.codechef.com/users/tejaswini_rn53" target="_blank" rel="noreferrer">
            <SiCodechef className="text-3xl hover:text-purple-400 transition" />
          </a>
          <a href="https://www.hackerrank.com/profile/rntejaswini03" target="_blank" rel="noreferrer">
            <SiHackerrank className="text-3xl hover:text-purple-400 transition" />
          </a>
          <a href="https://www.hackerearth.com/@rntejaswini03/" target="_blank" rel="noreferrer">
            <SiHackerearth className="text-3xl hover:text-purple-400 transition" />
          </a>
        </div>
      </motion.div>

      {/* RIGHT PHOTO */}
      <div className="md:w-1/2 w-full h-[320px] md:h-[420px] flex items-center justify-center mt-10 md:mt-0 z-10">
        <ThreeDPhoto />
      </div>

      {/* FLOATING BUTTONS (DESKTOP ONLY – unchanged) */}
      <motion.div
        onClick={() =>
          document.getElementById("social-impact")?.scrollIntoView({ behavior: "smooth" })
        }
        className="hidden md:flex absolute right-[5%] top-[60%] z-10 cursor-pointer"
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        whileHover={{ scale: 1.15 }}
      >
        <div className="flex items-center gap-3 px-5 py-3 rounded-full bg-black/40 backdrop-blur border border-purple-500">
          <FaLeaf className="text-2xl text-purple-400" />
          <span className="font-semibold text-purple-300">Social Impact</span>
        </div>
      </motion.div>

      <motion.div
        onClick={() =>
          document.getElementById("consistency")?.scrollIntoView({ behavior: "smooth" })
        }
        className="hidden md:flex absolute left-[30%] top-[62%] z-30 cursor-pointer"
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        whileHover={{ scale: 1.15 }}
      >
        <div className="flex items-center gap-19 px-5 py-3 rounded-full bg-black/40 backdrop-blur border border-purple-500">
          <FaFire className="text-2xl text-purple-400" />
          <span className="font-semibold text-purple-300">Consistency Engine</span>
        </div>
      </motion.div>

      <motion.div
        onClick={() =>
          document.getElementById("book-journey")?.scrollIntoView({ behavior: "smooth" })
        }
        className="hidden md:flex absolute right-[50%] top-[55%] z-10 cursor-pointer"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        whileHover={{ scale: 1.15 }}
      >
        <div className="flex items-center gap-3 px-5 py-3 rounded-full bg-black/40 backdrop-blur border border-purple-500">
          <FaBookOpen className="text-2xl text-purple-400" />
          <span className="font-semibold text-purple-300">Reader’s Mind</span>
        </div>
      </motion.div>

      {/* TECH ICONS – DESKTOP ONLY */}
      <div className="hidden md:block">
        <FloatingLogo icon={FaReact} label="React" style={{ top: "20%", left: "6%" }} />
        <FloatingLogo icon={FaJsSquare} label="JavaScript" style={{ top: "20%", right: "6%" }} />
        <FloatingLogo icon={FaHtml5} label="HTML5" style={{ bottom: "18%", left: "9%" }} />
        <FloatingLogo icon={FaCss3Alt} label="CSS3" style={{ bottom: "12%", right: "3%" }} />
        <FloatingLogo icon={FaJava} label="Java" style={{ top: "20%", left: "64%" }} />
        <FloatingLogo icon={FaPython} label="Python" style={{ top: "48%", right: "50%" }} />
        <FloatingLogo icon={SiC} label="C Programming" style={{ bottom: "5%", left: "40%" }} />
      </div>
    </div>
  );
};

export default About;
