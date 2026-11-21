import { motion } from "framer-motion";
import Reveal from "./Reveal.jsx";
import icons from "../icons.js";
import p from "../data/portfolio.js";

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-5">
      <div className="max-w-6xl mx-auto">
        <Reveal><h2 className="text-4xl font-bold mb-10">My <span className="grad-text">Skills</span></h2></Reveal>
        <div className="grid md:grid-cols-3 gap-6">
          {p.skills.map((cat, i) => (
            <Reveal key={cat.category} delay={i * 0.15} className="glass glow-hover rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-5">{cat.category}</h3>
              <ul className="flex flex-wrap gap-3">
                {cat.items.map((s, j) => {
                  const Icon = icons[s.icon];
                  return (
                    <motion.li key={s.name} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
                      transition={{ delay: 0.2 + j * 0.06 }} whileHover={{ scale: 1.08, boxShadow: "0 0 20px rgba(6,182,212,.45)" }}
                      className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-sm">
                      <Icon className="text-brand-cyan" aria-hidden="true" />{s.name}
                    </motion.li>
                  );
                })}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
