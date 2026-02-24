export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full backdrop-blur-md bg-black/30 border-b border-white/10 z-50">
      <div className="max-w-7xl mx-auto px-10 md:px-20 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold">Aakarshit</h1>

        {/* Navigation Links */}
        <div className="flex items-center gap-8 text-gray-300">

          {/* ⭐ Upgraded Resume Button */}
          <a
            href="/resume"
            className="relative px-5 py-2 font-medium text-white group"
          >
            <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform translate-x-1 translate-y-1 bg-indigo-600 group-hover:-translate-x-0 group-hover:-translate-y-0 rounded-lg"></span>
            <span className="absolute inset-0 w-full h-full bg-transparent border border-indigo-500 rounded-lg"></span>
            <span className="relative">Resume</span>
          </a>

          {/* Other Links */}
          <a href="/projects" className="hover:text-white transition">
            Projects
          </a>

          <a href="#skills" className="hover:text-white transition">
            Skills
          </a>

          <a href="#contact" className="hover:text-white transition">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
