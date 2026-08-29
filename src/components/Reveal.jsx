import { motion } from "framer-motion";

/**
 * Pembungkus animasi: isinya muncul perlahan saat masuk viewport.
 * Pakai <Reveal delay={0.1}>...</Reveal> di mana pun.
 */
export default function Reveal({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
