import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../data/projects";
import { useState } from "react";
import ProjectModal from "./ProjectModal";

const PAGE_SIZE = 4;

const Projects = () => {
  const [active, setActive] = useState(null);
  const [page, setPage] = useState(0);

  const totalPages = Math.ceil(projects.length / PAGE_SIZE);

  const visibleProjects = projects.slice(
    page * PAGE_SIZE,
    page * PAGE_SIZE + PAGE_SIZE
  );

  return (
    <section id="projects" className="py-24 px-8 overflow-hidden">
      <h2 className="text-4xl font-bold mb-10 text-purple-400">
        Projects
      </h2>

      {/* PROJECTS VIEW */}
      <div className="relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {visibleProjects.map((p, i) => (
              <ProjectCard
                key={i}
                project={p}
                setActive={setActive}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* CONTROLS */}
      <div className="flex justify-center gap-6 mt-12">
        <button
          onClick={() => setPage((p) => Math.max(p - 1, 0))}
          disabled={page === 0}
          className="px-6 py-3 rounded-full border border-purple-400 text-purple-400 disabled:opacity-40"
        >
          ◀ 
        </button>


        <button
          onClick={() => setPage((p) => Math.min(p + 1, totalPages - 1))}
          disabled={page === totalPages - 1}
          className="px-6 py-3 rounded-full border border-purple-400 text-purple-400 disabled:opacity-40"
        >
           ▶
        </button>
      </div>

      {active && (
        <ProjectModal
          project={active}
          close={() => setActive(null)}
        />
      )}
    </section>
  );
};

const ProjectCard = ({ project, setActive }) => (
  <motion.div
    className="glass rounded-xl p-4 cursor-pointer hover:scale-105 transition"
    onClick={() => setActive(project)}
    whileHover={{ y: -6 }}
  >
    <img
      src={project.image}
      alt={project.title}
      className="rounded-lg mb-3 h-40 w-full object-cover"
    />
    <h3 className="text-xl font-semibold">{project.title}</h3>
    <p className="text-sm text-gray-300">{project.desc}</p>
  </motion.div>
);

export default Projects;
