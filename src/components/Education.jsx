import { GraduationCap, Award, MapPin } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { education, certifications } from "../data/portfolio";

export default function Education() {
  return (
    <section className="section-green-atmosphere overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <Reveal>
        <SectionHeading index="08" title="Education & Certifications" />
        </Reveal>

        <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
        <Reveal>
          <div className="education-card-breathe rounded-2xl border border-ink-700 bg-ink-900 p-6">
            {education.logo ? (
              <img
                src={education.logo}
                alt={`Logo ${education.school}`}
                className="h-10 w-10 rounded-lg object-contain"
              />
            ) : (
              <GraduationCap size={20} className="text-signal" />
            )}
            <h3 className="mt-5 text-lg font-semibold text-mist-100">
              {education.degree}
            </h3>
            <p className="mt-1 text-sm text-mist-500">{education.school}</p>

            {education.location && (
              <div className="mt-3 flex items-center gap-2">
                {education.locationLogo ? (
                  <img
                    src={education.locationLogo}
                    alt={`Logo ${education.location}`}
                    className="h-5 w-5 object-contain"
                  />
                ) : (
                  <MapPin size={14} className="text-mist-500" />
                )}
                <span className="text-xs text-mist-500">
                  {education.location}
                </span>
              </div>
            )}

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <span className="font-mono text-xs text-mist-500">
                {education.period}
              </span>
              <span className="education-gpa rounded-md border border-signal-dim/45 bg-signal/5 px-2.5 py-1.5 font-mono text-xs font-medium text-signal">
                {education.detail}
              </span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <ul className="divide-y divide-ink-800 border-y border-ink-800">
            {certifications.map((c) => (
              <li key={c.name} className="flex gap-4 py-5">
                <Award size={16} className="mt-1 shrink-0 text-mist-500" />
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-mist-100">{c.name}</p>
                  <p className="mt-1 text-xs text-mist-500">{c.issuer}</p>
                </div>
                <span className="shrink-0 font-mono text-xs text-mist-500">
                  {c.year}
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
