import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import AnimatedBlob from "./AnimatedBlob";
import { developerTools } from "../data/portfolio";

export default function Developer() {
  return (
    <section id="developer" className="section-green-atmosphere relative overflow-hidden border-t border-ink-800">
      <AnimatedBlob
        variant={2}
        duration={21}
        className="-left-24 top-1/3 h-[340px] w-[340px] bg-signal/10"
      />

      <div className="relative mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <Reveal>
          <SectionHeading
            index="06"
            title="Developer"
            description="Teknologi yang paling sering saya gunakan untuk membangun aplikasi web, sistem server, dan game."
          />
        </Reveal>

        <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-5">
          {developerTools.map((tool, i) => (
            <Reveal key={tool.name} delay={i * 0.04}>
              <div className="flex h-full flex-col items-center gap-3 rounded-2xl border border-ink-700 bg-ink-900 p-5 text-center transition-colors hover:border-ink-600">
                <img
                  src={tool.logo}
                  alt={`Logo ${tool.name}`}
                  className={`h-9 w-9 object-contain ${
                    tool.name === "Express.js" ? "express-logo" : ""
                  }`}
                />
                <span className="text-xs font-medium text-mist-300">
                  {tool.name}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
