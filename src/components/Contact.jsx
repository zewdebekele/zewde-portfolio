import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaTelegramPlane, FaCheckCircle } from "react-icons/fa";
import Reveal from "./Reveal.jsx";
import p from "../data/portfolio.js";

const validate = (v) => {
  const e = {};
  if (v.name.trim().length < 2) e.name = "Please enter your name.";
  if (!/^\S+@\S+\.\S+$/.test(v.email)) e.email = "Please enter a valid email.";
  if (v.message.trim().length < 10) e.message = "Message should be at least 10 characters.";
  return e;
};

export default function Contact() {
  const [v, setV] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [toast, setToast] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    const err = validate(v);
    setErrors(err);
    if (Object.keys(err).length) return;
    // Simulated send — no backend
    setV({ name: "", email: "", message: "" });
    setToast(true);
    setTimeout(() => setToast(false), 3500);
  };

  const field = "w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-gray-500 focus:border-brand-purple outline-none";
  const info = [
    { Icon: FaPhoneAlt, label: "Phone", value: p.phone, href: p.phoneHref },
    { Icon: FaEnvelope, label: "Email", value: p.email, href: `mailto:${p.email}` },
    { Icon: FaTelegramPlane, label: "Telegram", value: p.telegram, href: p.telegramHref },
  ];

  return (
    <section id="contact" className="py-24 px-5">
      <div className="max-w-6xl mx-auto">
        <Reveal><h2 className="text-4xl font-bold mb-10">Get In <span className="grad-text">Touch</span></h2></Reveal>
        <div className="grid lg:grid-cols-2 gap-8">
          <Reveal>
            <form onSubmit={submit} noValidate className="glass rounded-2xl p-7 space-y-5">
              {[["name", "Name", "text"], ["email", "Email", "email"]].map(([k, l, t]) => (
                <div key={k}>
                  <label htmlFor={k} className="block text-sm mb-1.5 text-gray-300">{l}</label>
                  <input id={k} type={t} value={v[k]} onChange={(e) => setV({ ...v, [k]: e.target.value })} className={field} placeholder={`Your ${l.toLowerCase()}`}
                    aria-invalid={!!errors[k]} aria-describedby={errors[k] ? `${k}-err` : undefined} />
                  {errors[k] && <p id={`${k}-err`} role="alert" className="text-sm text-pink-400 mt-1">{errors[k]}</p>}
                </div>
              ))}
              <div>
                <label htmlFor="message" className="block text-sm mb-1.5 text-gray-300">Message</label>
                <textarea id="message" rows="5" value={v.message} onChange={(e) => setV({ ...v, message: e.target.value })} className={field} placeholder="How can I help?"
                  aria-invalid={!!errors.message} aria-describedby={errors.message ? "message-err" : undefined} />
                {errors.message && <p id="message-err" role="alert" className="text-sm text-pink-400 mt-1">{errors.message}</p>}
              </div>
              <button type="submit" className="w-full py-3 rounded-xl grad-bg text-white font-semibold hover:opacity-90 transition">Send Message</button>
            </form>
          </Reveal>
          <div className="space-y-5">
            {info.map(({ Icon, label, value, href }, i) => (
              <Reveal key={label} delay={i * 0.12}>
                <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="glass glow-hover rounded-2xl p-5 flex items-center gap-4">
                  <span className="w-12 h-12 grid place-items-center rounded-xl grad-bg text-white"><Icon /></span>
                  <span><span className="block text-sm text-gray-400">{label}</span><span className="font-medium text-white break-all">{value}</span></span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
      <AnimatePresence>
        {toast && (
          <motion.div role="status" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 40 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 glass rounded-xl px-5 py-3 flex items-center gap-3 text-white">
            <FaCheckCircle className="text-emerald-400" /> Message sent! I'll get back to you soon.
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
