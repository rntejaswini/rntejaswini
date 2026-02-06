import React, { useState } from "react";
import { achievementsData, confettiEmojis } from "../data/achievementsData";

export default function Achievements() {
  const [selectedAchievement, setSelectedAchievement] = useState(null);
  const [confetti, setConfetti] = useState([]);

  const triggerConfetti = (id) => {
    const newConfetti = confettiEmojis.map((emoji, index) => ({
      id: `${id}-${index}-${Date.now()}`,
      emoji,
      left: Math.random() * 80 + "%",
      animationDuration: Math.random() * 1 + 1.5 + "s",
    }));
    setConfetti(newConfetti);
    setTimeout(() => setConfetti([]), 2000);
  };

  return (
    <section
      id="achievements"
      className="p-8 bg-black/80 relative overflow-hidden"
    >
      <h2 className="text-4xl font-bold text-purple-400 mb-6">
        Achievements 🏆
      </h2>

      {/* HORIZONTAL SCROLL CARDS */}
      <div className="flex gap-6 overflow-x-auto pb-6 achievements-scroll">
        {achievementsData.map((ach) => (
          <div
            key={ach.id}
            className="
              min-w-[260px] glass rounded-xl cursor-pointer p-4
              shadow-lg hover:shadow-2xl transition-all duration-300
              relative overflow-hidden
            "
            onClick={() => setSelectedAchievement(ach)}
            onMouseEnter={() => triggerConfetti(ach.id)}
          >
            <img
              src={ach.image}
              alt={ach.title}
              className="rounded-md mb-4 h-40 w-full object-cover shadow-md"
            />

            <h3 className="text-xl font-semibold text-purple-300 mb-2">
              {ach.title}
            </h3>

            <p className="text-gray-300 text-sm">
              {ach.shortDesc}
            </p>

            {/* CONFETTI */}
            {confetti.map((c) => (
              <span
                key={c.id}
                className="absolute text-xl animate-fall pointer-events-none"
                style={{
                  left: c.left,
                  animationDuration: c.animationDuration,
                  top: "-2rem",
                }}
              >
                {c.emoji}
              </span>
            ))}
          </div>
        ))}
      </div>

      {/* MODAL */}
      {selectedAchievement && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="glass p-6 rounded-xl max-w-lg w-full relative shadow-2xl animate-fadeIn">
            <button
              className="absolute top-4 right-4 text-purple-300 hover:text-purple-400 text-xl font-bold"
              onClick={() => setSelectedAchievement(null)}
            >
              ✕
            </button>

            <img
              src={selectedAchievement.image}
              alt={selectedAchievement.title}
              className="rounded-lg mb-4 w-full object-cover h-52 shadow-md"
            />

            <h3 className="text-2xl text-purple-400 font-bold mb-2">
              {selectedAchievement.title}
            </h3>

            <p className="text-gray-300 mb-2">
              {selectedAchievement.details}
            </p>

            {selectedAchievement.team?.length > 0 && (
              <p className="text-gray-300 mb-1">
                <strong>Team:</strong>{" "}
                {selectedAchievement.team.join(", ")}
              </p>
            )}

            {selectedAchievement.guide && (
              <p className="text-gray-300 mb-1">
                <strong>Guide:</strong>{" "}
                {selectedAchievement.guide}
              </p>
            )}

            <p className="text-gray-300 mb-4">
              <strong>Department:</strong>{" "}
              {selectedAchievement.dept}
            </p>

            <a
              href={selectedAchievement.certificate}
              target="_blank"
              rel="noreferrer"
              className="
                inline-block bg-purple-400 hover:bg-purple-300
                text-black px-4 py-2 rounded-lg transition
              "
            >
              View Certificate 📄
            </a>
          </div>
        </div>
      )}

      {/* STYLES */}
      <style>{`
        /* CONFETTI */
        @keyframes fall {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(120px) rotate(360deg);
            opacity: 0;
          }
        }

        .animate-fall {
          animation-name: fall;
          animation-timing-function: ease-out;
          animation-fill-mode: forwards;
        }

        /* MODAL */
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: scale(0.95);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-in-out;
        }

        /* CUSTOM SCROLLBAR */
        .achievements-scroll::-webkit-scrollbar {
          height: 8px;
        }

        .achievements-scroll::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.08);
          border-radius: 999px;
        }

        .achievements-scroll::-webkit-scrollbar-thumb {
          background: linear-gradient(90deg, #a855f7, #7c3aed);
          border-radius: 999px;
        }

        .achievements-scroll {
          scrollbar-width: thin;
          scrollbar-color: #a855f7 rgba(255, 255, 255, 0.08);
        }
      `}</style>
    </section>
  );
}
