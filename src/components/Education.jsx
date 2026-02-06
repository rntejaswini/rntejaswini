// src/components/Education.jsx
import React, { useState } from "react";

const educationData = [
  {
    degree: "BE - Information Science & Engineering",
    institute: "Kalpataru Institute Of Technology, Tiptur",
    university: "Visvesvaraya Technological University",
    year: "2022-2026",
    cgpa: "9.17/10",
    image: "/college.png", // Place your image in public folder
    website: "https://www.kittiptur.ac.in/", // College website
  },
  // Add more entries if needed
];

export default function Education() {
  const [activeEdu, setActiveEdu] = useState(null);

  return (
    <section id="education" className="py-24 px-8">
      <h2 className="text-4xl font-bold text-purple-400 mb-8">
        Education 🎓
      </h2>

      <div className="flex flex-col gap-6">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className="glass p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
          >
            <h3 className="text-2xl font-semibold text-purple-400 mb-1">
              {edu.degree}
            </h3>

            {/* College name clickable */}
            <p
              className="text-purple-300 mb-2 underline hover:text-purple-400 transition"
              onClick={() => setActiveEdu(edu)}
            >
              {edu.institute}
            </p>

            <div className="flex justify-between items-center text-gray-300">
              <span className="font-medium">{edu.cgpa && `CGPA: ${edu.cgpa}`}</span>
              <span className="text-purple-300 font-semibold">{edu.year}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {activeEdu && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="glass p-6 rounded-xl max-w-lg w-full relative shadow-2xl animate-fadeIn">
            <button
              className="absolute top-4 right-4 text-purple-300 hover:text-purple-400 text-xl font-bold"
              onClick={() => setActiveEdu(null)}
            >
              ✕
            </button>

            <img
              src={activeEdu.image}
              alt={activeEdu.institute}
              className="rounded-lg mb-4 w-full object-cover h-52 shadow-md"
            />

            <h3 className="text-2xl text-purple-400 font-bold mb-2">{activeEdu.institute}</h3>
            <p className="text-gray-300 mb-2">
              University: {activeEdu.university}
            </p>

            <a
              href={activeEdu.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-purple-400 hover:bg-purple-300 text-black px-4 py-2 rounded-lg transition"
            >
              Visit College Website 🌐
            </a>
          </div>
        </div>
      )}

      <style >{`
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
      `}</style>
    </section>
  );
}
