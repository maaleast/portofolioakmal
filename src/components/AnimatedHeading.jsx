import { motion } from "framer-motion";

const wordVariants = {
  hidden: { opacity: 0, y: "100%" },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

// Memecah teks jadi kata dan menampilkannya satu per satu dengan animasi
// slide-up saat halaman dimuat. Setelah muncul, tiap kata lanjut melayang
// naik-turun pelan terus-menerus (delay-nya beda per kata biar jadi efek
// gelombang, bukan bergerak barengan).
// Spasi antar kata dibuat lewat flex "gap", bukan karakter spasi di dalam
// elemen inline-block — kalau pakai karakter spasi, browser akan
// menghilangkannya di ujung box inline-block sehingga kata jadi nempel.
export default function AnimatedHeading({ text, className = "", wordDelay = 0.08, block = false }) {
  const words = text.split(" ");
  const entranceDuration = 0.7;

  return (
    <span
      className={`${block ? "flex" : "inline-flex"} flex-wrap items-baseline gap-x-[0.28em] gap-y-1 ${className}`}
    >
      {words.map((word, i) => {
        const entranceDelay = i * wordDelay;
        return (
          <span key={i} className="overflow-hidden pb-1">
            <motion.span
              variants={wordVariants}
              transition={{
                duration: entranceDuration,
                ease: [0.22, 1, 0.36, 1],
                delay: entranceDelay,
              }}
              className="inline-block"
            >
              <motion.span
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: entranceDelay + entranceDuration + i * 0.15,
                }}
                className="inline-block"
              >
                {word}
              </motion.span>
            </motion.span>
          </span>
        );
      })}
    </span>
  );
}
