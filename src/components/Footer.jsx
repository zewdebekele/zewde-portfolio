import { FaArrowUp } from "react-icons/fa";
import p from "../data/portfolio.js";
export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8 px-5">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-400">
        <p>Designed &amp; built by {p.name} © 2025</p>
        <a href="#home" aria-label="Back to top" className="glass glow-hover w-11 h-11 grid place-items-center rounded-full text-white"><FaArrowUp /></a>
      </div>
    </footer>
  );
}
