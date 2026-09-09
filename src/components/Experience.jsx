import { Clapperboard } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { creativeTools, experience } from "../data/portfolio";

const trackLabel = {
  dev: "Development",
  game: "Game",
  content: "Konten",
  creative: "Kreatif",
};

// Icon fallback untuk pengalaman yang tidak punya logo perusahaan
// (misalnya freelance). Import satu-satu supaya tetap tree-shakeable.
const EXPERIENCE_ICONS = {
  Clapperboard,
};

export default function Experience() {
  return (
    <section id="experience" className="section-green-atmosphere overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <Reveal>
        <SectionHeading
          index="03"
          title="Experience"
          description="Beragam pengalaman yang membentuk kemampuan saya di bidang teknologi, konten, dan kreativitas."
        />
        </Reveal>

        <ol className="relative border-l border-ink-700 pl-6 sm:pl-10">
        {experience.map((job, i) => (
          <li key={job.role + job.org} className="relative pb-12 last:pb-0">
            <span
              className={`absolute -left-[1.6rem] top-1.5 h-2.5 w-2.5 rounded-full sm:-left-[2.85rem] ${
                job.current ? "bg-signal" : "bg-ink-600"
              }`}
              aria-hidden="true"
            />
            <Reveal delay={i * 0.05}>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <h3 className="text-lg font-semibold text-mist-100">
                  {job.role}
                </h3>
                <span className="rounded-md border border-ink-700 px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-mist-500">
                  {trackLabel[job.track]}
                </span>
                {job.logo && !job.stats?.length && (
                  <img
                    src={job.logo}
                    alt={`Logo ${job.org}`}
                    className="h-7 w-7 shrink-0 rounded-md object-contain"
                  />
                )}
                {job.track === "creative" && (
                  <span className="flex items-center gap-1.5">
                    {creativeTools.map((tool) => (
                      <span
                        key={tool.name}
                        className="flex h-7 w-7 items-center justify-center rounded-md bg-ink-800 p-1.5"
                        title={tool.name}
                      >
                        <img
                          src={tool.logo}
                          alt={`Logo ${tool.name}`}
                          className="h-full w-full object-contain"
                        />
                      </span>
                    ))}
                  </span>
                )}
                {job.icon && job.track !== "creative" &&
                  (() => {
                    const Icon = EXPERIENCE_ICONS[job.icon];
                    return Icon ? (
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-ink-800 text-signal">
                        <Icon size={15} />
                      </span>
                    ) : null;
                  })()}
              </div>

              <p className="mt-1 text-sm text-mist-500">
                {job.org}
                <span className="mx-2 text-ink-600">/</span>
                <span className="font-mono text-xs">{job.period}</span>
              </p>

              <ul className="mt-4 space-y-2">
                {job.points.map((p) => (
                  <li
                    key={p}
                    className="flex gap-3 text-sm leading-relaxed text-mist-300"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink-600" />
                    {p}
                  </li>
                ))}
              </ul>

              {job.logo && job.stats?.length > 0 && (
                <div className="mt-5 flex items-center gap-4 rounded-xl border border-ink-700 bg-ink-900/60 p-4">
                  <img
                    src={job.logo}
                    alt={`Logo ${job.org}`}
                    className="h-10 w-10 shrink-0 rounded-lg object-contain"
                  />
                  <div className="flex flex-wrap gap-x-6 gap-y-1">
                    {job.stats.map((s) => (
                      <div key={s.label}>
                        <div className="font-mono text-base font-semibold text-signal">
                          {s.value}
                        </div>
                        <div className="text-xs text-mist-500">{s.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </Reveal>
          </li>
        ))}
        </ol>
      </div>
    </section>
  );
}
