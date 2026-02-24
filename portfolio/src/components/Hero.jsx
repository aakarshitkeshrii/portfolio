import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef(null);
  const titleMaskRef = useRef(null);

  useEffect(() => {
    const el = heroRef.current;

    // Parallax movement for the whole hero section
    gsap.to(el, {
      yPercent: 20,
      ease: "none",
      scrollTrigger: {
        trigger: el,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    // TEXT REVEAL MASKING for "Hi, I'm Aakarshit"
    gsap.fromTo(
      titleMaskRef.current,
      { clipPath: "inset(0 100% 0 0)" },
      {
        clipPath: "inset(0 0% 0 0)",
        duration: 2.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
        },
      }
    );

    // Subtitle fade-in
    gsap.fromTo(
      el.querySelector(".hero-subtitle"),
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1.4,
        delay: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-16 px-10 md:px-20"
    >
      {/* LEFT SIDE — PROFILE IMAGE */}
      <div className="w-56 h-56 md:w-72 md:h-72 rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(99,102,241,0.3)] border border-white/10">
        <img
          src="/myphoto.jpeg"  // <-- Put your image inside public/myphoto.jpg
          alt="Aakarshit"
          className="w-full h-full object-cover"
        />
      </div>

      {/* RIGHT SIDE — TEXT */}
      <div className="flex flex-col">
        <h1
          ref={titleMaskRef}
          className="hero-title text-5xl md:text-7xl font-bold leading-tight overflow-hidden inline-block"
          style={{ display: "inline-block" }}
        >
          Hi, I'm <span className="text-indigo-500">Aakarshit</span>
        </h1>

        <p className="hero-subtitle text-gray-400 mt-4 text-xl md:text-2xl max-w-2xl">
          I’m currently pursuing an MSc in International Business Management (Marketing) at Heriot-Watt University Dubai,
          and hold a B.Tech degree in Computer Science. I combine marketing strategy with technical and
           AI skills to create data-driven campaigns, focusing on performance optimization, customer engagement,
            and impactful brand solutions.
        </p>
      </div>
    </section>
  );
}
