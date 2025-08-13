import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 px-6 max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12"
    >
      {/* Profile Image */}
      <motion.img
        src="https://via.placeholder.com/300" // Replace with your image
        alt="Dawit Hailemariyam"
        className="w-64 h-64 object-cover rounded-2xl shadow-lg"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      />

      {/* Text Section */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex-1"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
        <p className="text-gray-600 leading-relaxed mb-6">
          I’m <span className="font-semibold">Dawit Hailemariyam</span>, a
          passionate Full Stack Web Developer who crafts modern, high-quality
          digital experiences.  
          With expertise in both frontend and backend technologies, I bring
          ideas to life by building scalable, responsive, and user-friendly
          applications.
        </p>

        <p className="text-gray-600 leading-relaxed">
          My toolkit includes <span className="font-mono">React</span>,{" "}
          <span className="font-mono">Node.js</span>,{" "}
          <span className="font-mono">Express</span>,{" "}
          <span className="font-mono">MongoDB</span>, and{" "}
          <span className="font-mono">Tailwind CSS</span>.  
          I’m constantly learning new tools and trends to stay ahead in the
          ever-evolving web landscape.
        </p>
      </motion.div>
    </section>
  );
}
