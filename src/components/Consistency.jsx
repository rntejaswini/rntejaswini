import React from "react";
import { motion } from "framer-motion";
import { FaFire, FaGithub, FaLinkedin, FaCode } from "react-icons/fa";
import { SiDuolingo } from "react-icons/si";

const habits = [
  {
    icon: <SiDuolingo />,
    title: "Duolingo Streak",
    desc: "Daily language learning habit",
    link: "https://www.duolingo.com/profile/Tejaswini_R_N",
  },
  {
    icon: <FaLinkedin />,
    title: "LinkedIn Blogger",
    desc: "Sharing learning, consistency & growth",
    link: "https://www.linkedin.com/in/tejaswini-rn",
  },
  {
    icon: <FaCode />,
    title: "Daily Coding",
    desc: "LeetCode • HackerRank • CodeChef • HackerEarth",
    link: "https://leetcode.com/u/25lhI0ZXuQ/",
  },
  {
    icon: <FaGithub />,
    title: "Daily GitHub Commits",
    desc: "Consistent daily pushes & clean history",
    link: "https://github.com/rntejaswini",
  },
];

const Consistency = () => {
  return (
    <section id="consistency" className="bg-black py-20 px-8">
      <h2 className="text-4xl text-center font-bold text-purple-400 mb-12">
        Consistency Engine 🔥
      </h2>

      {/* CARDS */}
      <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {habits.map((h, i) => (
          <motion.a
            key={i}
            href={h.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.08 }}
            className="
              glass rounded-xl p-6 text-center
              border border-purple-500/30
              cursor-pointer
              hover:border-purple-400
              transition
            "
          >
            <div className="text-4xl text-purple-400 mb-4 flex justify-center">
              {h.icon}
            </div>

            <h3 className="font-semibold text-purple-300">
              {h.title}
            </h3>

            <p className="text-gray-300 text-sm mt-2">
              {h.desc}
            </p>

            <FaFire className="mx-auto mt-4 text-purple-400" />
          </motion.a>
        ))}
      </div>

      {/* 🌟 FLOATING CONSISTENCY LINE */}
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
            Practiced <strong>every single day</strong> — no breaks, no excuses, only consistency.
          </span>
        </div>
      </motion.div>
    </section>
  );
};

export default Consistency;
