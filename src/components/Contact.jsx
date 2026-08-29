import { ArrowUpRight, CirclePlay } from "lucide-react";
import Reveal from "./Reveal";
import { profile } from "../data/portfolio";
import WhatsAppIcon from "./icons/WhatsAppIcon";
import AnimatedBlob from "./AnimatedBlob";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-ink-800"
    >
      <AnimatedBlob
        variant={1}
        duration={24}
        className="bottom-0 left-1/2 ml-[-350px] h-[400px] w-[700px] bg-signal/10"
      />

      <div className="relative mx-auto max-w-6xl px-6 py-28 sm:py-36">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.25em] text-signal">
            KONTAK
          </p>
          <h2 className="mt-6 max-w-2xl text-4xl font-semibold leading-tight tracking-tight text-mist-100 sm:text-5xl">
            Punya project yang ingin dikerjakan?
          </h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-mist-300">
            Terbuka untuk peluang kerja penuh waktu, project freelance, maupun
            kolaborasi. Kirim pesan dan saya akan balas.
          </p>

          <a
            href={profile.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#25D366] px-7 py-4 text-sm font-semibold text-ink-950 transition-transform hover:-translate-y-0.5"
          >
            <WhatsAppIcon size={16} />
            Hubungi Saya melalui WhatsApp
            <ArrowUpRight size={16} />
          </a>

          <div className="mt-10 flex flex-wrap gap-6 text-sm text-mist-500">
            <a
              href={profile.youtube}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 transition-colors hover:text-mist-100"
            >
              <CirclePlay size={15} /> Kepikiran Aja
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
