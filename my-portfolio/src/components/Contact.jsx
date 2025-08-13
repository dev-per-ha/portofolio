import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-6 max-w-4xl mx-auto text-center"
    >
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Get In Touch
      </motion.h2>

      <motion.p
        className="text-gray-600 max-w-2xl mx-auto mb-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
      >
        Have a project in mind or just want to connect? Feel free to reach out
        via the form below or through my social links.
      </motion.p>

      {/* Contact Form */}
      <motion.form
        action="https://formspree.io/f/your-form-id" // Replace with your Formspree form ID
        method="POST"
        className="grid gap-6 max-w-xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        viewport={{ once: true }}
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          required
          className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
        ></textarea>
        <button
          type="submit"
          className="bg-accent text-white px-6 py-3 rounded-lg hover:shadow-lg transition"
        >
          Send Message
        </button>
      </motion.form>

      {/* Social Links */}
      <motion.div
        className="flex justify-center gap-6 mt-10 text-2xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        viewport={{ once: true }}
      >
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-accent transition"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-accent transition"
        >
          <FaGithub />
        </a>
        <a
          href="mailto:youremail@example.com"
          className="text-gray-600 hover:text-accent transition"
        >
          <FaEnvelope />
        </a>
      </motion.div>
      <footer className="py-6 text-center text-gray-500 text-sm">
  © {new Date().getFullYear()} Dawit Hailemariyam. All rights reserved.
</footer>

    </section>
  );
}
