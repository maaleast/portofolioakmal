import { motion } from "framer-motion";

// Blob cahaya blur yang melayang pelan di background section.
// "variant" cuma menentukan pola gerakannya biar tiap section tidak
// terasa gerak identik/serentak.
const MOVE_VARIANTS = [
  { x: [0, 40, -20, 0], y: [0, -30, 20, 0] },
  { x: [0, -50, 30, 0], y: [0, 25, -25, 0] },
  { x: [0, 30, -40, 0], y: [0, 35, -15, 0] },
];

export default function AnimatedBlob({
  className = "",
  variant = 0,
  duration = 22,
}) {
  const movement = MOVE_VARIANTS[variant % MOVE_VARIANTS.length];

  return (
    <motion.div
      aria-hidden="true"
      animate={{ ...movement, scale: [1, 1.12, 0.95, 1] }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut" }}
      className={`pointer-events-none absolute rounded-full blur-[130px] ${className}`}
    />
  );
}
