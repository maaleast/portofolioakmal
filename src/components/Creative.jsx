import { Clapperboard } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import AnimatedBlob from "./AnimatedBlob";
import { creativeTools } from "../data/portfolio";

export default function Creative() {
  return (
    <section
      id="editing"
      className="section-green-atmosphere relative overflow-hidden border-t border-ink-800 bg-ink-900/40"
    >
      <AnimatedBlob
        variant={0}
        duration={25}
        className="-right-24 top-0 h-[320px] w-[320px] bg-ember/10"
      />

      <div className="relative mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <Reveal>
          <SectionHeading
            index="07"
            title="Video editing"
            description="Melakukan editing secara profesional sejak 2020"
          />
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-3">
          {creativeTools.map((tool, i) => (
            <Reveal key={tool.name} delay={i * 0.07}>
              <div className="h-full rounded-2xl border border-ink-700 bg-ink-900 p-6 transition-colors hover:border-ink-600">
                {tool.logo ? (
                  <img
                    src={tool.logo}
                    alt={`Logo ${tool.name}`}
                    className="h-9 w-9 rounded-lg object-contain"
                  />
                ) : (
                  <Clapperboard size={20} className="text-ember" />
                )}
                <h3 className="mt-5 text-base font-semibold text-mist-100">
                  {tool.name}
                </h3>
                <p className="mt-2 text-sm text-mist-500">{tool.note}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
