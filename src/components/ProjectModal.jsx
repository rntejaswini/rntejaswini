import { motion } from "framer-motion";

const ProjectModal = ({ project, close }) => (
  <motion.div
    className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
  >
    <motion.div
      className="glass max-w-2xl p-6 rounded-xl relative"
      initial={{ scale: 0.8 }}
      animate={{ scale: 1 }}
    >
      <button onClick={close} className="absolute top-3 right-4 text-xl">✕</button>

      <h2 className="text-3xl text-purple-400">{project.title}</h2>

      <p className="mt-3"><b>Problem:</b> {project.problem}</p>
      <p><b>Solution:</b> {project.solution}</p>

      <ul className="list-disc ml-5 mt-2">
        {project.features.map((f, i) => <li key={i}>{f}</li>)}
      </ul>

      <p className="mt-2 text-sm text-purple-300">
        Tech: {project.tech.join(", ")}
      </p>

      <div className="flex gap-4 mt-4">
        <a href={project.demo} target="_blank" className="btn">Live Demo</a>
        <a href={project.github} target="_blank" className="btn-outline">GitHub</a>
      </div>
    </motion.div>
  </motion.div>
);

export default ProjectModal;
