import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FaTelegramPlane, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import Magnetic from "./Magnetic.jsx";
import p from "../data/portfolio.js";

// Typewriter hook cycling through words
function useTyping(words) {
  const [i, setI] = useState(0), [text, setText] = useState(""), [del, setDel] = useState(false);
  useEffect(() => {
    const w = words[i];
    const t = setTimeout(() => {
      if (!del) { setText(w.slice(0, text.length + 1)); if (text.length + 1 === w.length) setTimeout(() => setDel(true), 1300); }
      else { setText(w.slice(0, text.length - 1)); if (text.length <= 1) { setDel(false); setI((i + 1) % words.length); } }
    }, del ? 40 : 90);
    return () => clearTimeout(t);
  }, [text, del, i, words]);
  return text;
}

function TiltCard() {
  const [failed, setFailed] = useState(false);
  const mx = useMotionValue(0), my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [12, -12]), { stiffness: 150, damping: 15 });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-12, 12]), { stiffness: 150, damping: 15 });
  const move = (e) => { const r = e.currentTarget.getBoundingClientRect(); mx.set((e.clientX - r.left) / r.width - 0.5); my.set((e.clientY - r.top) / r.height - 0.5); };
  const leave = () => { mx.set(0); my.set(0); };
  return (
    <div style={{ perspective: 1000 }} onMouseMove={move} onMouseLeave={leave} className="relative w-72 sm:w-80 mx-auto">
      <div aria-hidden="true" className="absolute -inset-1 rounded-3xl blur-xl opacity-70 animate-pulse" style={{ background: "linear-gradient(135deg,var(--purple),var(--cyan),var(--pink))" }} />
      <motion.div style={{ rotateX, rotateY, transformStyle: "preserve-3d" }} className="relative glass rounded-3xl p-3">
        <div className="rounded-2xl overflow-hidden aspect-[4/5] bg-gradient-to-br from-purple-700 to-cyan-600 grid place-items-center">
          {failed ? <span className="font-heading text-7xl font-bold text-white/90">ZB</span>
            : <img src={p.photo} alt="Zewde Bekele Biru" className="w-full h-full object-cover" onError={() => setFailed(true)} />}
        </div>
      </motion.div>
    </div>
  );
}

export default function Hero() {
  const typed = useTyping(p.typing);
  const socials = [
    { Icon: FaTelegramPlane, href: p.telegramHref, label: "Telegram" },
    { Icon: FaEnvelope, href: `mailto:${p.email}`, label: "Email" },
    { Icon: FaPhoneAlt, href: p.phoneHref, label: "Phone" },
  ];
  return (
    <section id="home" className="min-h-screen flex items-center pt-24 pb-16 px-5">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-center w-full">
        <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <p className="text-gray-400 mb-2">Hi, I'm</p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight grad-text">{p.name}</h1>
          <p className="mt-5 text-lg text-gray-300 max-w-xl">{p.role}</p>
          <p className="mt-4 text-2xl font-heading h-9 text-white" aria-live="off">{typed}<span className="text-brand-cyan animate-pulse">|</span></p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Magnetic><a href="#projects" className="inline-block px-7 py-3 rounded-xl grad-bg text-white font-semibold shadow-lg shadow-purple-500/30">View My Work</a></Magnetic>
            <Magnetic><a href={p.cv} download className="inline-block px-7 py-3 rounded-xl glass text-white font-semibold hover:border-white/30">Download CV</a></Magnetic>
          </div>
          <div className="mt-8 flex gap-3">
            {socials.map(({ Icon, href, label }) => (
              <a key={label} href={href} aria-label={label} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                className="glass glow-hover w-11 h-11 grid place-items-center rounded-full text-white"><Icon /></a>
            ))}
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}><TiltCard /></motion.div>
      </div>
    </section>
  );
}
