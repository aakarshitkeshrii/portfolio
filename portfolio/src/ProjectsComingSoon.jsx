import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function ProjectsComingSoon() {
  const containerRef = useRef(null);

  // COUNTDOWN TIMER (30 days from now)
  const [timeLeft, setTimeLeft] = useState({});
  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 30);

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({ expired: true });
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // FADE-IN ANIMATION
  useEffect(() => {
    gsap.fromTo(
      containerRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
    );
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-10 md:px-20 relative overflow-hidden">

      {/* ANIMATED GRADIENT BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/30 via-purple-600/30 to-pink-600/30 animate-gradientBlur"></div>


      <div
        ref={containerRef}
        className="text-center flex flex-col items-center gap-6 relative z-10"
      >
        {/* BOUNCING CONSTRUCTION ICON */}
        <div className="animate-bounce text-6xl">🚧</div>

        <h1 className="text-5xl md:text-6xl font-bold">Projects Coming Soon</h1>

        <p className="text-gray-300 text-lg md:text-xl max-w-xl">
          I’m currently building some exciting things.  
          Stay tuned — they’ll be live here very soon.
        </p>

        {/* COUNTDOWN TIMER */}
        {!timeLeft.expired && (
          <div className="flex gap-6 mt-4 text-white text-xl font-semibold">
            <div className="text-center">
              <div className="text-4xl">{timeLeft.days}</div>
              <div className="text-sm text-gray-400">Days</div>
            </div>
            <div className="text-center">
              <div className="text-4xl">{timeLeft.hours}</div>
              <div className="text-sm text-gray-400">Hours</div>
            </div>
            <div className="text-center">
              <div className="text-4xl">{timeLeft.minutes}</div>
              <div className="text-sm text-gray-400">Minutes</div>
            </div>
            <div className="text-center">
              <div className="text-4xl">{timeLeft.seconds}</div>
              <div className="text-sm text-gray-400">Seconds</div>
            </div>
          </div>
        )}

        {/* NOTIFY ME EMAIL BOX */}
        <div className="mt-8 flex flex-col md:flex-row items-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 transition rounded-lg text-white font-medium">
            Notify Me
          </button>
        </div>
      </div>
    </section>
  );
}
