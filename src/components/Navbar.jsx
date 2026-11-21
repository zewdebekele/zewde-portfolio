import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import p from "../data/portfolio.js";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the section currently in view
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    p.nav.forEach((n) => { const el = document.getElementById(n.toLowerCase()); el && obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  const link = (n) => (
    <a key={n} href={`#${n.toLowerCase()}`} onClick={() => setOpen(false)}
      aria-current={active === n.toLowerCase() ? "page" : undefined}
      className={`text-sm font-medium transition-colors ${active === n.toLowerCase() ? "text-brand-cyan" : "text-gray-300 hover:text-white"}`}>{n}</a>
  );

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled || open ? "glass" : "bg-transparent"}`}>
      <nav aria-label="Main navigation" className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
        <a href="#home" aria-label="Home" className="w-10 h-10 grid place-items-center rounded-xl grad-bg font-heading font-bold text-white">ZB</a>
        <div className="hidden md:flex gap-8">{p.nav.map(link)}</div>
        <button className="md:hidden text-white p-2" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="md:hidden overflow-hidden">
            <div className="flex flex-col gap-4 px-5 pb-5">{p.nav.map(link)}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
