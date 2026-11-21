import { motion } from "framer-motion";
// Fades/slides children in when they enter the viewport.
export default function Reveal({ children, delay = 0, className = "", y = 30 }) {
  return (
    <motion.div className={className} initial={{ opacity: 0, y }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6, delay, ease: "easeOut" }}>
      {children}
    </motion.div>
  );
}
