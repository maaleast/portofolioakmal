/**
 * Judul section dengan nomor urut dan garis tipis.
 */
export default function SectionHeading({ index, title, description }) {
  return (
    <div className="mb-12 max-w-2xl">
      <div className="mb-4 flex items-center gap-4">
        <span className="font-mono text-xs tracking-[0.25em] text-signal">
          {index}
        </span>
        <span className="h-px flex-1 bg-ink-600" />
      </div>
      <h2 className="text-3xl font-semibold tracking-tight text-mist-100 sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-mist-500">{description}</p>
      )}
    </div>
  );
}
