import { useEffect, useMemo, useState } from "react";
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
  Utensils,
  CloudSun,
  Search,
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

function getProjectThumbnail(url) {
  if (!url) return null;

  const youtubeMatch = url.match(/(?:shorts\/|watch\?v=|youtu\.be\/)([^?&/]+)/);
  if (youtubeMatch) {
    return `https://i.ytimg.com/vi/${youtubeMatch[1]}/hqdefault.jpg`;
  }

  return null;
}

// Game / Konten / Developer (semua kategori web development lain).
function bucketOf(project) {
  if (project.category === "Game") return "game";
  if (project.category === "Video & Content") return "content";
  return "dev";
}

function isSoftwareProject(project) {
  const softwareCategories = [
    "Fullstack Web Development",
    "Frontend Web Development",
  ];

  return (
    softwareCategories.includes(project.category) ||
    project.categories?.some((category) => softwareCategories.includes(category))
  );
}

function displayCategory(project) {
  return isSoftwareProject(project) ? "IT & Software Development" : project.category;
}

function orderGameProjects(list) {
  return [...list].sort((first, second) => {
    const firstIsRoblox = first.tech?.includes("Roblox Studio") ? 0 : 1;
    const secondIsRoblox = second.tech?.includes("Roblox Studio") ? 0 : 1;
    return firstIsRoblox - secondIsRoblox;
  });
}

// Untuk tab "Semua": halaman pertama diacak berisi 1 project Game,
// 1 Developer, 1 Konten. Sisanya diacak juga untuk halaman berikutnya.
// Diacak ulang tiap kali komponen di-mount (refresh halaman).
function buildRandomOrder(list) {
  const buckets = { game: [], dev: [], content: [] };
  list.forEach((p) => buckets[bucketOf(p)].push(p));

  const shuffledGame = shuffle(buckets.game);
  const shuffledDev = shuffle(buckets.dev.filter((project) => !project.private));
  const shuffledContent = shuffle(buckets.content);

  const preferredGame = shuffledGame.find(
    (project) => project.title === "Ikuti Kata Budi!"
  );
  const preferredContent = shuffledContent.find(
    (project) => project.title === "Konten Motion Graphics & Video Editing"
  );

  const featured = [
    preferredContent || shuffledContent[0],
    preferredGame || shuffledGame[0],
    shuffledDev[0],
  ].filter(Boolean);
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
  Utensils,
  CloudSun,
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
  const projectImage = project.image || getProjectThumbnail(project.url);

  const Icon = PROJECT_ICONS[project.icon] || Sparkles;
  const motionProps = ICON_MOTION[index % ICON_MOTION.length];

  return (
    <div
      className={`group flex h-full flex-col overflow-hidden rounded-2xl border border-ink-700 bg-ink-900 transition-all duration-300 ${
        clickable ? "hover:-translate-y-1 hover:border-signal-dim" : ""
      }`}
    >
      <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden bg-ink-800">
        {!project.private && projectImage && (
          <img
            src={projectImage}
            alt={project.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}

        {!projectImage && <div className="grid-backdrop absolute inset-0" />}

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
          !projectImage && (
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
          {displayCategory(project)}
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

        {project.notice && (
          <p className="mt-3 rounded-md border border-yellow-500/40 bg-yellow-500/10 px-3 py-2 font-mono text-[10px] leading-relaxed text-yellow-300">
            {project.notice}
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
  const [active, setActive] = useState("All Projects");
  const [page, setPage] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setPage(0);
  }, [active, searchQuery]);

  const ordered = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase();
    const filtered = projects.filter((project) => {
      const matchesCategory =
        active === "All Projects" ||
        (active === "IT & Software Development" && isSoftwareProject(project)) ||
        project.category === active ||
        project.categories?.includes(active);
      const searchableText = [
        project.title,
        project.description,
        displayCategory(project),
        ...(project.tech || []),
      ]
        .join(" ")
        .toLowerCase();

      return matchesCategory && (!normalizedQuery || searchableText.includes(normalizedQuery));
    });

    if (active === "Game") return orderGameProjects(filtered);

    return active === "All Projects" && !normalizedQuery
      ? buildRandomOrder(filtered)
      : shuffle(filtered);
  }, [active, searchQuery]);

  const totalPages = Math.max(1, Math.ceil(ordered.length / PAGE_SIZE));
  const visible = ordered.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE);

  const pagination = ordered.length > PAGE_SIZE ? (
    <div className="flex flex-wrap items-center justify-between gap-3 border-y border-ink-700 py-3">
      <span className="text-xs text-mist-500">
        Showing {page * PAGE_SIZE + 1}-{Math.min((page + 1) * PAGE_SIZE, ordered.length)} of {ordered.length} projects
      </span>
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => setPage((current) => Math.max(0, current - 1))}
          disabled={page === 0}
          aria-label="Previous page"
          className="flex h-8 items-center gap-1 rounded-md border border-ink-700 px-2.5 text-xs text-mist-300 transition-colors hover:border-signal hover:text-signal disabled:cursor-not-allowed disabled:opacity-30"
        >
          <ChevronLeft size={14} /> Previous
        </button>
        <span className="min-w-16 text-center font-mono text-xs text-mist-300">
          Page {page + 1} / {totalPages}
        </span>
        <button
          type="button"
          onClick={() => setPage((current) => Math.min(totalPages - 1, current + 1))}
          disabled={page >= totalPages - 1}
          aria-label="Next page"
          className="flex h-8 items-center gap-1 rounded-md border border-ink-700 px-2.5 text-xs text-mist-300 transition-colors hover:border-signal hover:text-signal disabled:cursor-not-allowed disabled:opacity-30"
        >
          Next <ChevronRight size={14} />
        </button>
      </div>
    </div>
  ) : null;

  return (
    <section id="projects" className="section-green-atmosphere border-t border-ink-800 bg-ink-900/40">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <Reveal>
          <SectionHeading
            index="04"
            title="Projects"
            description="Kumpulan karya dan proyek yang merepresentasikan pengalaman, kreativitas, dan keahlian saya di berbagai bidang."
          />
        </Reveal>

        <Reveal>
          <div className="mb-5 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap gap-2">
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
            <label className="relative block w-full lg:max-w-xs">
              <Search size={15} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-mist-500" />
              <input
                type="search"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Search projects..."
                aria-label="Search projects"
                className="w-full rounded-full border border-ink-700 bg-ink-900/80 py-2 pl-9 pr-4 text-xs text-mist-100 outline-none transition-colors placeholder:text-mist-500 focus:border-signal"
              />
            </label>
          </div>
        </Reveal>

        {pagination && <div className="mb-5">{pagination}</div>}

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

        {pagination && <div className="mt-5">{pagination}</div>}
      </div>
    </section>
  );
}
