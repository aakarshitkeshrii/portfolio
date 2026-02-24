import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="px-10 md:px-20 py-10 border-t border-white/10 mt-20">
      <div className="flex flex-col md:flex-row justify-between items-center gap-5">

        {/* Left side */}
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Aakarshit. All rights reserved.
        </p>

        {/* Right side - Social icons */}
        <div className="flex gap-6 text-gray-300">
          <a
            href="https://github.com/aakarshitkeshrii"
            target="_blank"
            className="hover:text-white transition"
          >
            <FaGithub size={22} />
          </a>

          <a
            href="https://www.linkedin.com/in/aakarshit-keshri/"
            target="_blank"
            className="hover:text-white transition"
          >
            <FaLinkedin size={22} />
          </a>
        </div>

      </div>
    </footer>
  );
}
