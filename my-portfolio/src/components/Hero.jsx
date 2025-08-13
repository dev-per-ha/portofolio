import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl md:text-7xl font-extrabold"
      >
        Dawit Hailemariyam
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="mt-4 text-2xl md:text-3xl text-gray-600"
      >
        Full Stack Web Developer
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="mt-6 max-w-2xl text-gray-500"
      >
        I build modern, high-performance web applications with clean UI and
        seamless user experiences.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="mt-8 flex gap-4"
      >
        <a
          href="#projects"
          className="bg-accent text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="border border-accent text-accent px-6 py-3 rounded-lg hover:bg-accent hover:text-white transition"
        >
          Contact Me
        </a>
      </motion.div>
    </section>
  );
}
