import { Play, ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import AnimatedBlob from "./AnimatedBlob";
import { profile, contentSkills, featuredVideos } from "../data/portfolio";

export default function ContentCreation() {
  return (
    <section id="content" className="section-green-atmosphere relative overflow-hidden">
      <AnimatedBlob
        variant={2}
        duration={18}
        className="right-0 top-1/4 h-[380px] w-[380px] bg-ember/10"
      />

      <div className="relative mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <Reveal>
          <SectionHeading
            index="05"
            title="Content creation"
            description="Sisi lain dari pekerjaan saya: menulis, mengisi suara, dan merilis konten ke audiens sendiri."
          />
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:gap-14">
          <Reveal>
            <div className="rounded-3xl border border-ink-700 bg-gradient-to-b from-ink-800 to-ink-900 p-8">
              {profile.youtubeAvatar ? (
                <img
                  src={profile.youtubeAvatar}
                  alt="Logo channel YouTube Kepikiran Aja"
                  loading="lazy"
                  className="h-14 w-14 rounded-full border border-ink-600 object-cover"
                />
              ) : (
                <Play size={28} className="text-ember" />
              )}
              <p className="mt-6 font-mono text-5xl font-semibold text-mist-100">
                200K+
              </p>
              <p className="mt-2 text-sm text-mist-500">Subscriber di YouTube</p>

              <a
                href={profile.youtube}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full border border-ink-600 px-5 py-2.5 text-sm text-mist-100 transition-colors hover:border-ember hover:text-ember"
              >
                Kepikiran Aja <ArrowUpRight size={15} />
              </a>

              <ul className="mt-8 flex flex-wrap gap-2 border-t border-ink-700 pt-6">
                {contentSkills.map((s) => (
                  <li
                    key={s}
                    className="rounded-lg bg-ink-800 px-3 py-1.5 text-xs text-mist-300"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="grid gap-4 sm:grid-cols-3">
              {featuredVideos.map((video, i) => {
                const clickable = Boolean(video.url);
                const Wrap = clickable ? "a" : "div";
                const props = clickable
                  ? { href: video.url, target: "_blank", rel: "noreferrer" }
                  : {};
                return (
                  <Wrap
                    key={i}
                    {...props}
                    className="group block overflow-hidden rounded-xl border border-ink-700 bg-ink-900"
                  >
                    <div className="relative aspect-[9/16] bg-ink-800">
                      {video.image ? (
                        <img
                          src={video.image}
                          alt={video.title}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="grid-backdrop flex h-full flex-col items-center justify-center gap-2 text-mist-500">
                          <Play size={18} />
                          <span className="font-mono text-[10px] tracking-widest">
                            THUMBNAIL
                          </span>
                        </div>
                      )}
                    </div>
                    <p className="px-3 py-3 text-xs text-mist-500">
                      {video.title}
                    </p>
                  </Wrap>
                );
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
