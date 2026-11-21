import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
// Glowing dot + trailing ring. Disabled on touch / coarse pointers.
export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hover, setHover] = useState(false);
  const x = useMotionValue(-100), y = useMotionValue(-100);
  const rx = useSpring(x, { stiffness: 150, damping: 18 }), ry = useSpring(y, { stiffness: 150, damping: 18 });
  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    setEnabled(true);
    const move = (e) => { x.set(e.clientX); y.set(e.clientY); setHover(!!e.target.closest("a,button,input,textarea")); };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);
  if (!enabled) return null;
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[100]">
      <motion.div className="absolute w-2.5 h-2.5 -ml-[5px] -mt-[5px] rounded-full bg-white" style={{ x, y, boxShadow: "0 0 14px 4px var(--cyan)" }} />
      <motion.div className="absolute w-9 h-9 -ml-[18px] -mt-[18px] rounded-full border" style={{ x: rx, y: ry, borderColor: "var(--purple)" }}
        animate={{ scale: hover ? 1.6 : 1, opacity: hover ? 0.7 : 0.5 }} />
    </div>
  );
}
