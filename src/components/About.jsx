import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import AnimatedBlob from "./AnimatedBlob";
import { about } from "../data/portfolio";

export default function About() {
  return (
    <section id="about" className="section-green-atmosphere relative overflow-hidden">
      <AnimatedBlob
        variant={0}
        duration={26}
        className="-left-32 top-0 h-[350px] w-[350px] bg-signal/10"
      />

      <div className="relative mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <Reveal>
          <SectionHeading index="01" title="About Me" />
        </Reveal>

        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <Reveal>
            <div className="space-y-5">
              {about.paragraphs.map((p) => (
                <p key={p} className="text-base leading-relaxed text-mist-300">
                  {p}
                </p>
              ))}
            </div>

            <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {about.stats.map((s) => (
                <div
                  key={s.label}
                  className="stat-breathe-card rounded-xl border border-ink-700 bg-ink-900/60 p-4"
                >
                  <div className="font-mono text-xl font-semibold text-signal">
                    {s.value}
                  </div>
                  <div className="mt-1 text-xs leading-snug text-mist-500">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <ul className="space-y-px overflow-hidden rounded-2xl border border-ink-700">
              {about.highlights.map((h) => (
                <li
                  key={h.label}
                  className="about-highlight-breathe group flex items-baseline justify-between gap-6 bg-ink-900/60 px-5 py-5 transition-colors hover:bg-ink-800"
                >
                  <span className="text-sm font-medium text-mist-100">
                    {h.label}
                  </span>
                  <span className="text-right text-xs text-mist-500">
                    {h.detail}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
