import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import AnimatedBlob from "./AnimatedBlob";
import { skillGroups } from "../data/portfolio";

export default function Skills() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoRotate, setAutoRotate] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const activeGroup = skillGroups[activeIndex];

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!autoRotate || !isVisible) return undefined;

    const intervalId = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % skillGroups.length);
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, [autoRotate, isVisible]);

  const selectGroup = (index) => {
    setActiveIndex(index);
    setAutoRotate(false);
  };

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="section-green-atmosphere relative overflow-hidden border-t border-ink-800 bg-ink-900/40"
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
            title="Skills & Expertise"
            description="Dikelompokkan berdasarkan bidang keahlian, bukan berdasarkan seberapa sering saya memakainya."
          />
        </Reveal>

        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Skill categories">
          {skillGroups.map((group, index) => (
            <button
              key={group.title}
              type="button"
              role="tab"
              aria-selected={activeIndex === index}
              onClick={() => selectGroup(index)}
              className={`rounded-full border px-4 py-2 text-xs font-medium transition-colors ${
                activeIndex === index
                  ? "border-signal bg-signal/10 text-signal"
                  : "border-ink-700 text-mist-500 hover:border-ink-600 hover:text-mist-300"
              }`}
            >
              {group.title}
            </button>
          ))}
        </div>

        <Reveal key={activeGroup.title}>
          <div className="skill-breathe-card mt-5 rounded-2xl border border-ink-700 bg-ink-900 p-6 transition-colors hover:border-ink-600">
            <h3 className="mb-5 text-sm font-semibold tracking-wide text-mist-100">
              {activeGroup.title}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {activeGroup.items.map((item) => (
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
      </div>
    </section>
  );
}
