import { useState, useEffect } from "react";
import Loader from "./components/Loader";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <Loader />}

      {!loading && (
        <>
          <Navbar />
          <Hero />
          <Projects />
          <Skills />
          <Contact />
          <Footer />
        </>
      )}
    </>
  );
}
