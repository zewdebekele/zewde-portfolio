import { motion } from "framer-motion";
// Slow-moving blurred colour blobs behind the whole page.
const blobs = [
  { c: "var(--purple)", s: "w-[34rem] h-[34rem]", p: "top-[-8rem] left-[-8rem]", a: { x: [0, 120, -40, 0], y: [0, 80, 140, 0] }, d: 28 },
  { c: "var(--cyan)", s: "w-[30rem] h-[30rem]", p: "top-1/3 right-[-8rem]", a: { x: [0, -140, 30, 0], y: [0, 100, -60, 0] }, d: 34 },
  { c: "var(--pink)", s: "w-[28rem] h-[28rem]", p: "bottom-[-8rem] left-1/3", a: { x: [0, 100, -100, 0], y: [0, -90, 40, 0] }, d: 31 },
];
export default function AuroraBackground() {
  return (
    <div aria-hidden="true" className="fixed inset-0 -z-10 overflow-hidden bg-base">
      {blobs.map((b, i) => (
        <motion.div key={i} className={`absolute rounded-full blur-3xl opacity-25 ${b.s} ${b.p}`} style={{ background: b.c }}
          animate={b.a} transition={{ duration: b.d, repeat: Infinity, ease: "easeInOut" }} />
      ))}
    </div>
  );
}
