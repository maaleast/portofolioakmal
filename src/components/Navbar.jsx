import { useEffect, useState } from "react";
import { Download, Menu, X } from "lucide-react";
import { navLinks, profile } from "../data/portfolio";
import { downloadFile } from "../lib/downloadFile";

const primaryNavLabels = [
  "Tentang",
  "Pengalaman",
  "Keahlian",
  "Project",
  "Contact",
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const primaryLinks = navLinks.filter((link) =>
    primaryNavLabels.includes(link.label)
  );
  const secondaryLinks = navLinks.filter(
    (link) => !primaryNavLabels.includes(link.label)
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-ink-700 bg-ink-950/80 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          <a
            href="#top"
            className="font-mono text-sm tracking-tight text-mist-100 transition-colors hover:text-signal"
          >
            {profile.firstName.toLowerCase()}
            <span className="text-signal">.</span>
          </a>

          <div className="flex items-center gap-1.5 sm:gap-2">
            <div className="hidden items-center gap-4 lg:flex">
              {primaryLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-xs text-mist-300 transition-colors hover:text-signal"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Tutup menu" : "Buka menu"}
              aria-expanded={open}
              className="shrink-0 rounded-md p-2 text-mist-100 transition-colors hover:text-signal"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between gap-3 overflow-x-auto border-t border-ink-800 py-2 lg:hidden">
          {primaryLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="shrink-0 text-[11px] text-mist-300 transition-colors hover:text-signal"
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>

      {open && (
        <div className="border-t border-ink-700 bg-ink-950/95 backdrop-blur-md">
          <ul className="mx-auto max-w-6xl px-6 py-4 sm:px-6">
            {[...primaryLinks, ...secondaryLinks].map((link, i, links) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block py-3 text-sm text-mist-300 transition-colors hover:text-signal ${
                    i < links.length + 1 ? "border-b border-ink-800" : ""
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={profile.cvDeveloperUrl}
                download="CV Akmal Farizky Hardhana - Developer.pdf"
                onClick={(e) => {
                  e.preventDefault();
                  downloadFile(
                    profile.cvDeveloperUrl,
                    "CV Akmal Farizky Hardhana - Developer.pdf"
                  );
                  setOpen(false);
                }}
                className="flex items-center gap-2 border-b border-ink-800 py-3 text-sm text-mist-300 transition-colors hover:text-signal"
              >
                <Download size={15} />
                CV Developer
              </a>
            </li>
            <li>
              <a
                href={profile.cvCreativeUrl}
                download="CV Akmal Farizky Hardhana - Creative.pdf"
                onClick={(e) => {
                  e.preventDefault();
                  downloadFile(
                    profile.cvCreativeUrl,
                    "CV Akmal Farizky Hardhana - Creative.pdf"
                  );
                  setOpen(false);
                }}
                className="flex items-center gap-2 py-3 text-sm text-mist-300 transition-colors hover:text-signal"
              >
                <Download size={15} />
                CV Creative
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
