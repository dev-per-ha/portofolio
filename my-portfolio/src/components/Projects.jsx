import { motion } from "framer-motion";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce web app with secure checkout.",
    tech: ["React", "Node.js", "MongoDB", "Tailwind"],
    image: "https://via.placeholder.com/500x300", // Replace with project screenshot
    link: "#",
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio showcasing projects and skills.",
    tech: ["Next.js", "Framer Motion", "Tailwind"],
    image: "https://via.placeholder.com/500x300",
    link: "#",
  },
  {
    title: "Learning Management System",
    description: "An online platform for courses and quizzes.",
    tech: ["MERN Stack", "Cloudinary", "JWT Auth"],
    image: "https://via.placeholder.com/500x300",
    link: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Selected Projects
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Project Image */}
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover transform hover:scale-105 transition duration-300"
              />
            </div>

            {/* Project Info */}
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-sm bg-gray-100 px-3 py-1 rounded-full text-gray-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline font-medium"
              >
                View Project →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
