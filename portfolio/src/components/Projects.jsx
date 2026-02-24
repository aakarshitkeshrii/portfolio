import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import { motion } from "framer-motion";

const projects = [
  {
    title: "Portfolio Website",
    description: "A modern personal portfolio built with React and Tailwind.",
    image: "https://via.placeholder.com/600x400",
    link: "#",
  },
  {
    title: "E‑Commerce UI",
    description: "A clean and responsive e‑commerce interface.",
    image: "https://via.placeholder.com/600x400",
    link: "#",
  },
  {
    title: "Weather App",
    description: "A weather forecasting app using real‑time APIs.",
    image: "https://via.placeholder.com/600x400",
    link: "#",
  },
];

export default function Projects() {
  const projectsRef = useRef(null);   // ✅ ADD IT RIGHT HERE

  useEffect(() => {
    const cards = projectsRef.current.querySelectorAll(".project-card");

    gsap.fromTo(
      cards,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: projectsRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section id="projects" className="px-10 md:px-20 py-20">
      <h2 className="text-4xl font-bold mb-10">Projects</h2>

      <div ref={projectsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <motion.a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card group block rounded-xl overflow-hidden bg-white/5 border border-white/10 hover:border-indigo-500/50 transition"
          >
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover group-hover:scale-110 transition duration-500"
              />
            </div>

            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-400 text-sm">{project.description}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
