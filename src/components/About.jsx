import { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";
import Reveal from "./Reveal.jsx";
import p from "../data/portfolio.js";

// Counts from 0 to `value` when scrolled into view
function Counter({ value, suffix }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (!inView) return;
    const c = animate(0, value, { duration: 1.8, ease: "easeOut", onUpdate: (v) => { if (ref.current) ref.current.textContent = Math.round(v) + suffix; } });
    return () => c.stop();
  }, [inView, value, suffix]);
  return <span ref={ref}>0{suffix}</span>;
}

export default function About() {
  return (
    <section id="about" className="py-24 px-5">
      <div className="max-w-6xl mx-auto">
        <Reveal><h2 className="text-4xl font-bold mb-10">About <span className="grad-text">Me</span></h2></Reveal>
        <div className="grid lg:grid-cols-2 gap-10">
          <Reveal className="glass rounded-2xl p-7">
            <p className="text-gray-300 leading-relaxed text-lg">{p.bio}</p>
            <h3 className="mt-7 mb-3 text-sm uppercase tracking-widest text-gray-400">Currently Learning</h3>
            <ul className="flex flex-wrap gap-2">
              {p.learning.map((l) => (
                <li key={l} className="px-3 py-1.5 rounded-full text-sm border border-brand-cyan/40 text-brand-cyan flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse" />{l}
                </li>
              ))}
            </ul>
          </Reveal>
          <div className="grid grid-cols-3 gap-4">
            {p.stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.12} className="glass glow-hover rounded-2xl p-5 text-center flex flex-col justify-center">
                <div className="text-4xl font-heading font-bold grad-text"><Counter value={s.value} suffix={s.suffix} /></div>
                <div className="mt-2 text-sm text-gray-400">{s.label}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
