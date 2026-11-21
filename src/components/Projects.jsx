import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Reveal from "./Reveal.jsx";
import p from "../data/portfolio.js";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-5">
      <div className="max-w-6xl mx-auto">
        <Reveal><h2 className="text-4xl font-bold mb-10">Featured <span className="grad-text">Projects</span></h2></Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {p.projects.map((pr, i) => (
            <Reveal key={pr.title} delay={i * 0.12} className="h-full">
              <article className="group glass glow-hover rounded-2xl overflow-hidden h-full flex flex-col">
                {/* Gradient placeholder; the image covers it once the file exists */}
                <div className={`relative h-44 bg-gradient-to-br ${pr.gradient}`}>
                  <img src={pr.image} alt={`${pr.title} screenshot`} loading="lazy" className="absolute inset-0 w-full h-full object-cover" onError={(e) => (e.currentTarget.style.display = "none")} />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-xl font-semibold">{pr.title}</h3>
                  <p className="mt-2 text-sm text-gray-400 flex-1">{pr.description}</p>
                  {/* Tags + buttons slide up on hover (always visible on touch / keyboard focus) */}
                  <div className="mt-4 transition-all duration-300 md:translate-y-3 md:opacity-70 group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100">
                    <ul className="flex flex-wrap gap-2">
                      {pr.tags.map((t) => <li key={t} className="text-xs px-2.5 py-1 rounded-full bg-white/10 text-brand-cyan">{t}</li>)}
                    </ul>
                    <div className="mt-4 flex gap-3">
                      <a href={pr.github} target="_blank" rel="noopener noreferrer" aria-label={`${pr.title} GitHub repository`} className="flex items-center gap-2 text-sm px-3 py-1.5 rounded-lg border border-white/15 hover:bg-white/10"><FaGithub />GitHub</a>
                      <a href={pr.live} target="_blank" rel="noopener noreferrer" aria-label={`${pr.title} live demo`} className="flex items-center gap-2 text-sm px-3 py-1.5 rounded-lg grad-bg text-white"><FaExternalLinkAlt size={12} />Live</a>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
