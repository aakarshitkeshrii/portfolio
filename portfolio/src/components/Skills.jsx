import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub } from "react-icons/fa";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" size={40} /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" size={40} /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" size={40} /> },
  { name: "React", icon: <FaReact className="text-cyan-400" size={40} /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" size={40} /> },
  { name: "GitHub", icon: <FaGithub className="text-white" size={40} /> },
];

export default function Skills() {
  return (
    <section id="skills" className="px-10 md:px-20 py-20">
      <h2 className="text-4xl font-bold mb-10">Skills</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-3 p-5 rounded-xl bg-white/5 border border-white/10 hover:border-indigo-500/40 transition"
          >
            {skill.icon}
            <p className="text-gray-300">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
