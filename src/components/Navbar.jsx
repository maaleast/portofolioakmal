import { useEffect, useState } from "react";
import { Download, Menu, X } from "lucide-react";
import { navLinks, profile } from "../data/portfolio";
import { downloadFile } from "../lib/downloadFile";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a
          href="#top"
          className="font-mono text-sm tracking-tight text-mist-100 transition-colors hover:text-signal"
        >
          {profile.firstName.toLowerCase()}
          <span className="text-signal">.</span>
        </a>

        <div className="flex items-center gap-1.5 sm:gap-2">
          <a
            href={profile.cvDeveloperUrl}
            download="CV Akmal Farizky Hardhana - Developer.pdf"
            onClick={(e) => {
              e.preventDefault();
              downloadFile(
                profile.cvDeveloperUrl,
                "CV Akmal Farizky Hardhana - Developer.pdf"
              );
            }}
            className="flex items-center gap-1 whitespace-nowrap rounded-full border border-ink-600 px-2 py-1.5 text-[10px] font-medium tracking-wide text-mist-100 transition-colors hover:border-signal hover:text-signal sm:px-3 sm:text-xs"
          >
            <Download size={11} className="shrink-0" />
            CV Developer
          </a>
          <a
            href={profile.cvCreativeUrl}
            download="CV Akmal Farizky Hardhana - Creative.pdf"
            onClick={(e) => {
              e.preventDefault();
              downloadFile(
                profile.cvCreativeUrl,
                "CV Akmal Farizky Hardhana - Creative.pdf"
              );
            }}
            className="flex items-center gap-1 whitespace-nowrap rounded-full border border-ink-600 px-2 py-1.5 text-[10px] font-medium tracking-wide text-mist-100 transition-colors hover:border-signal hover:text-signal sm:px-3 sm:text-xs"
          >
            <Download size={11} className="shrink-0" />
            CV Creative
          </a>

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
      </nav>

      {open && (
        <div className="border-t border-ink-700 bg-ink-950/95 backdrop-blur-md">
          <ul className="mx-auto max-w-6xl px-6 py-4 sm:px-6">
            {navLinks.map((link, i) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block py-3 text-sm text-mist-300 transition-colors hover:text-signal ${
                    i < navLinks.length - 1 ? "border-b border-ink-800" : ""
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
