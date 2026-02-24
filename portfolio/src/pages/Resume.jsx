export default function Resume() {
  return (
    <section className="min-h-screen px-10 md:px-20 py-20">
      <h1 className="text-4xl font-bold mb-10">Resume</h1>

      <div className="w-full h-[80vh] border border-white/10 rounded-xl overflow-hidden">
        <iframe
          src="/Aakarshit Resume.pdf"
          className="w-full h-full"
          title="Resume PDF"
        ></iframe>
      </div>

      <div className="mt-8">
        <a
          href="/Aakarshit Resume.pdf"
          download
          className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 transition rounded-lg text-white font-medium"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}
