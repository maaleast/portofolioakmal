import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Lock,
  Sparkles,
  Heart,
  WandSparkles,
  Gamepad2,
  Mountain,
  Clapperboard,
  Scissors,
} from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { projects, projectCategories } from "../data/portfolio";

const PAGE_SIZE = 3;

function shuffle(list) {
  const result = [...list];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

// Game / Konten / Developer (semua kategori web development lain).
function bucketOf(project) {
  if (project.category === "Game") return "game";
  if (project.category === "Video & Konten") return "content";
  return "dev";
}

// Untuk tab "Semua": halaman pertama diacak berisi 1 project Game,
// 1 Developer, 1 Konten. Sisanya diacak juga untuk halaman berikutnya.
// Diacak ulang tiap kali komponen di-mount (refresh halaman).
function buildRandomOrder(list) {
  const buckets = { game: [], dev: [], content: [] };
  list.forEach((p) => buckets[bucketOf(p)].push(p));

  const shuffledGame = shuffle(buckets.game);
  const shuffledDev = shuffle(buckets.dev);
  const shuffledContent = shuffle(buckets.content);

  const featured = [shuffledGame[0], shuffledDev[0], shuffledContent[0]].filter(
    Boolean
  );
  const featuredTitles = new Set(featured.map((p) => p.title));
  const rest = shuffle(list.filter((p) => !featuredTitles.has(p.title)));

  return [...featured, ...rest];
}

// Daftar icon yang boleh dipakai lewat field "icon" di portfolio.js.
// Import satu-satu (bukan `* as icons`) supaya bundler bisa tree-shake
// dan tidak menyeret seluruh 1500+ icon lucide ke dalam bundle.
const PROJECT_ICONS = {
  Lock,
  Sparkles,
  Heart,
  WandSparkles,
  Gamepad2,
  Mountain,
  Clapperboard,
  Scissors,
};

// Beberapa varian animasi supaya tiap icon tidak bergerak identik.
const ICON_MOTION = [
  { animate: { y: [0, -8, 0] }, transition: { duration: 3, repeat: Infinity, ease: "easeInOut" } },
  { animate: { rotate: [0, -10, 10, 0] }, transition: { duration: 4, repeat: Infinity, ease: "easeInOut" } },
  { animate: { scale: [1, 1.14, 1] }, transition: { duration: 2.4, repeat: Infinity, ease: "easeInOut" } },
  { animate: { x: [0, 6, -6, 0], rotate: [0, 4, -4, 0] }, transition: { duration: 4.5, repeat: Infinity, ease: "easeInOut" } },
];

function ProjectCard({ project, index }) {
  const clickable = !project.private && Boolean(project.url);

  const Icon = PROJECT_ICONS[project.icon] || Sparkles;
  const motionProps = ICON_MOTION[index % ICON_MOTION.length];

  return (
    <div
      className={`group flex h-full flex-col overflow-hidden rounded-2xl border border-ink-700 bg-ink-900 transition-all duration-300 ${
        clickable ? "hover:-translate-y-1 hover:border-signal-dim" : ""
      }`}
    >
      <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden bg-ink-800">
        {!project.private && project.image && (
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}

        {!project.image && <div className="grid-backdrop absolute inset-0" />}

        {project.private ? (
          <div className="relative flex flex-col items-center gap-2 text-mist-500">
            <motion.div
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
              className="rounded-full border border-ink-600 bg-ink-900 p-3 text-mist-300"
            >
              <Lock size={22} />
            </motion.div>
            <span className="font-mono text-[10px] uppercase tracking-widest">
              Private Project
            </span>
          </div>
        ) : (
          !project.image && (
            <motion.div
              {...motionProps}
              className="relative rounded-full border border-ink-600 bg-ink-900 p-4 text-signal"
            >
              <Icon size={26} />
            </motion.div>
          )
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <span className="font-mono text-[10px] uppercase tracking-widest text-signal">
          {project.category}
        </span>
        <h3 className="mt-2 text-base font-semibold text-mist-100">
          {project.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-mist-500">
          {project.description}
        </p>

        {project.private && (
          <p className="mt-3 flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-mist-500">
            <Lock size={11} />
            Proyek privat{project.company ? ` — ${project.company}` : ""}, tidak dapat dibuka publik
          </p>
        )}

        {project.tech?.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-1.5 pt-1">
            {project.tech.map((t) => (
              <li
                key={t}
                className="rounded border border-ink-700 px-2 py-1 font-mono text-[10px] text-mist-500"
              >
                {t}
              </li>
            ))}
          </ul>
        )}

        {clickable && (
          <a
            href={project.url}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex items-center justify-center gap-1.5 rounded-full border border-ink-700 px-4 py-2 text-xs font-medium text-mist-100 transition-colors hover:border-signal hover:bg-signal/10 hover:text-signal focus-visible:border-signal focus-visible:bg-signal/10 focus-visible:text-signal"
          >
            Lihat Projek
            <ArrowUpRight size={14} />
          </a>
        )}
      </div>
    </div>
  );
}

export default function ProjectGallery() {
  const [active, setActive] = useState("Semua");
  const [page, setPage] = useState(0);

  const ordered = useMemo(() => {
    const filtered =
      active === "Semua"
        ? projects
        : projects.filter((p) => p.category === active);

    return active === "Semua" ? buildRandomOrder(filtered) : shuffle(filtered);
  }, [active]);

  const totalPages = Math.max(1, Math.ceil(ordered.length / PAGE_SIZE));
  const visible = ordered.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE);

  return (
    <section id="projects" className="border-t border-ink-800 bg-ink-900/40">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <Reveal>
          <SectionHeading
            index="04"
            title="Project"
            description="Semua yang pernah saya bangun, dari aplikasi web sampai game dan konten."
          />
        </Reveal>

        <Reveal>
          <div className="mb-10 flex flex-wrap gap-2">
            {projectCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  setActive(cat);
                  setPage(0);
                }}
                className={`rounded-full border px-4 py-2 text-xs font-medium transition-colors ${
                  active === cat
                    ? "border-signal bg-signal/10 text-signal"
                    : "border-ink-700 text-mist-500 hover:border-ink-600 hover:text-mist-300"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </Reveal>

        <motion.div
          layout
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {visible.map((project, i) => (
            <Reveal key={project.title + page} delay={i * 0.06} className="h-full">
              <ProjectCard project={project} index={i} />
            </Reveal>
          ))}
        </motion.div>

        {ordered.length === 0 && (
          <p className="py-12 text-center text-sm text-mist-500">
            Belum ada project di kategori ini.
          </p>
        )}

        {ordered.length > PAGE_SIZE && (
          <div className="mt-10 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => setPage((p) => Math.max(0, p - 1))}
              disabled={page === 0}
              aria-label="Halaman sebelumnya"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-ink-700 text-mist-500 transition-colors hover:border-signal hover:text-signal disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-ink-700 disabled:hover:text-mist-500"
            >
              <ChevronLeft size={16} />
            </button>

            <span className="font-mono text-xs text-mist-500">
              {page + 1} / {totalPages}
            </span>

            <button
              type="button"
              onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
              disabled={page >= totalPages - 1}
              aria-label="Halaman berikutnya"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-ink-700 text-mist-500 transition-colors hover:border-signal hover:text-signal disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-ink-700 disabled:hover:text-mist-500"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
