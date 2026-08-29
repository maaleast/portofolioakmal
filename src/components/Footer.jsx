import { Mail } from "lucide-react";
import { profile } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-ink-800">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 text-xs text-mist-500 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <a
          href={`mailto:${profile.email}`}
          className="flex items-center gap-2 transition-colors hover:text-mist-100"
        >
          <Mail size={13} /> {profile.email}
        </a>
        <p className="font-mono">{profile.location}</p>
      </div>
    </footer>
  );
}
