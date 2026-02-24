import { motion } from "framer-motion";
import { FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="px-10 md:px-20 py-20">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl font-bold mb-6"
      >
        Contact
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-gray-400 max-w-xl mb-10"
      >
        Have a project in mind or want to collaborate?  
        I’d love to hear from you. Feel free to reach out anytime.
      </motion.p>

      <motion.a
        href="mailto:your-aakarshit.keshri@gmail.com"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="inline-flex items-center gap-3 bg-indigo-600 hover:bg-indigo-700 transition text-white px-6 py-3 rounded-lg font-medium"
      >
        <FaEnvelope size={20} />
        Send me an email
      </motion.a>
    </section>
  );
}
