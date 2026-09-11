export default function AnimatedHeading({ text, className = "", block = false }) {
  const words = text.split(" ");

  return (
    <span
      className={`${block ? "flex" : "inline-flex"} flex-wrap items-baseline gap-x-[0.28em] gap-y-1 ${className}`}
    >
      {words.map((word, i) => (
        <span key={i} className="inline-block pb-1">
          {word}
        </span>
      ))}
    </span>
  );
}
