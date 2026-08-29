import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import AnimatedBlob from "./AnimatedBlob";
import { skillGroups } from "../data/portfolio";

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden border-t border-ink-800 bg-ink-900/40"
    >
      <AnimatedBlob
        variant={1}
        duration={23}
        className="-right-24 bottom-0 h-[320px] w-[320px] bg-ember/10"
      />

      <div className="relative mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <Reveal>
          <SectionHeading
            index="02"
            title="Keahlian"
            description="Dikelompokkan berdasarkan bidang, bukan berdasarkan seberapa sering saya memakainya."
          />
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={i * 0.06}>
              <div className="h-full rounded-2xl border border-ink-700 bg-ink-900 p-6 transition-colors hover:border-ink-600">
                <h3 className="mb-5 text-sm font-semibold tracking-wide text-mist-100">
                  {group.title}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-lg border border-ink-700 bg-ink-800/70 px-3 py-1.5 text-xs text-mist-300"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
