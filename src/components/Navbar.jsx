import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [hovered, setHovered] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const logoVideo = "/logotn.mp4";

  const navItems = [
    "About",
    "Skills",
    "Projects",
    "Certificates",
    "Achievements",
    "Research",
  ];

  return (
    <nav
      className="fixed top-0 w-full z-50
      bg-gradient-to-r from-black via-purple-950 to-black
      backdrop-blur-md border-b border-purple-800/40
      text-white px-6 md:px-8 py-4 flex justify-between items-center"
    >
      {/* LOGO */}
      <div className="relative flex items-center gap-3">
        <video
          src={logoVideo}
          className="w-16 h-16 md:w-20 md:h-20 object-cover rounded-full cursor-pointer"
          loop
          autoPlay
          muted
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        />

        {hovered && (
          <div className="absolute top-12 left-0 z-50 hidden md:block">
            <video
              src={logoVideo}
              className="w-56 h-56 object-cover rounded-full shadow-lg border border-purple-700"
              autoPlay
              loop
              muted
            />
          </div>
        )}

        <h1 className="text-lg md:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-300 to-white">
          Tejaswini RN
        </h1>
      </div>

      {/* DESKTOP MENU */}
      <ul className="hidden md:flex gap-6 text-sm md:text-base">
        {navItems.map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              className="hover:text-purple-400 transition"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>

      {/* MOBILE MENU ICON */}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <FaTimes className="text-2xl" />
          ) : (
            <FaBars className="text-2xl" />
          )}
        </button>
      </div>

      {/* MOBILE DROPDOWN */}
    {menuOpen && (
  <div
    className="
      absolute top-full left-0 w-full
      bg-gradient-to-b -950  to-black
      backdrop-blur-md
      border-t border-purple-700/50
      md:hidden
    "
  >
    <ul className="flex flex-col items-center gap-6 py-8">
      {navItems.map((item) => (
        <li key={item}>
          <a
            href={`#${item.toLowerCase()}`}
            onClick={() => setMenuOpen(false)}
            className="
              text-lg font-medium
              text-purple-200
              hover:text-purple-400
              transition
            "
          >
            {item}
          </a>
        </li>
      ))}
    </ul>
  </div>
)}

    </nav>
  );
};

export default Navbar;
