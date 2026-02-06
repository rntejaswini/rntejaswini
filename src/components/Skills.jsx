import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 85 },
    { name: "JavaScript", level: 80 },
    { name: "React", level: 80 },
    { name: "Python", level: 75 },
    { name: "Java", level: 80 },
    { name: "AI / ML", level: 85 },
    { name: "Deep Learning", level: 80 },
    { name: "Big Data Analytics", level: 80 },
    { name: "Power BI", level: 85 },
    { name: "Information & Network Security", level: 60 },
    { name: "DSA", level: 85 },
  ];

  return (
    <section id="skills" className="py-20 px-8">
      <h2 className="text-3xl font-semibold text-purple-400 mb-10">
       Technical Skills
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            className="group glass rounded-lg px-4 py-3 cursor-pointer"
            whileHover={{ scale: 1.02 }}
          >
            {/* Skill Name */}
            <p className="text-sm font-medium text-gray-200">
              {skill.name}
            </p>

            {/* Hover Reveal */}
            <div className="mt-2 opacity-0 group-hover:opacity-100 transition duration-200">
              <div className="flex justify-between text-xs text-purple-300 mb-1">
                <span>Proficiency</span>
                <span>{skill.level}%</span>
              </div>

              <div className="w-full h-1.5 bg-black/40 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-purple-500"
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 0.6 }}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
