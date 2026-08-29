import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Mengetik teks karakter demi karakter, lalu menyisakan kursor
// yang berkedip pelan di akhir kalimat.
export default function TypewriterText({ text, className = "", speed = 18, startDelay = 0.9 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let i = 0;
    let intervalId;
    const timeoutId = setTimeout(() => {
      intervalId = setInterval(() => {
        i += 1;
        setCount(i);
        if (i >= text.length) clearInterval(intervalId);
      }, speed);
    }, startDelay * 1000);

    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, [text, speed, startDelay]);

  const done = count >= text.length;

  return (
    <span className={className}>
      {text.slice(0, count)}
      <motion.span
        animate={{ opacity: done ? [1, 0, 1] : 1 }}
        transition={{ duration: 1, repeat: done ? Infinity : 0, ease: "easeInOut" }}
        className="ml-0.5 inline-block w-[2px] translate-y-[2px] bg-signal align-middle"
        style={{ height: "1em" }}
      />
    </span>
  );
}
