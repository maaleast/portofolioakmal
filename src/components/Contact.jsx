import { ArrowUpRight, CirclePlay, Mail, MapPin } from "lucide-react";
import Reveal from "./Reveal";
import { profile } from "../data/portfolio";
import WhatsAppIcon from "./icons/WhatsAppIcon";
import AnimatedBlob from "./AnimatedBlob";

export default function Contact() {
  return (
    <section
      id="contact"
      className="section-green-atmosphere relative overflow-hidden border-t border-ink-800"
    >
      <AnimatedBlob
        variant={1}
        duration={24}
        className="bottom-0 left-1/2 ml-[-350px] h-[400px] w-[700px] bg-signal/10"
      />

      <div className="relative mx-auto max-w-6xl px-6 py-28 sm:py-36">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.25em] text-signal">
            LET'S CONNECT
          </p>
          <h2 className="mt-6 max-w-2xl text-4xl font-semibold leading-tight tracking-tight text-mist-100 sm:text-5xl">
            Have a project in mind?
          </h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-mist-300">
            I am open to full-time opportunities, freelance projects, and
            collaborations. Send me a message and I will get back to you soon.
          </p>

          <a
            href={profile.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="whatsapp-action mt-10 inline-flex items-center gap-3 rounded-full bg-[#25D366] px-7 py-4 text-sm font-semibold text-ink-950 transition-transform hover:-translate-y-0.5"
          >
            <WhatsAppIcon size={16} />
            Contact Me via WhatsApp
            <ArrowUpRight size={16} />
          </a>

          <ul className="mt-10 flex flex-wrap gap-2 text-sm text-mist-500">
            <li className="flex items-center gap-2 rounded-full border border-ink-600 bg-ink-950/75 px-4 py-2 text-mist-300">
              <MapPin size={15} /> {profile.location}
            </li>
            <li>
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-2 rounded-full border border-ink-600 bg-ink-950/75 px-4 py-2 text-mist-300 transition-colors hover:border-signal hover:text-mist-100"
              >
                <Mail size={15} /> {profile.email}
              </a>
            </li>
            <li>
              <a
                href={profile.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-full border border-ink-600 bg-ink-950/75 px-4 py-2 text-mist-300 transition-colors hover:border-signal hover:text-mist-100"
              >
                <WhatsAppIcon size={15} /> {profile.whatsapp}
              </a>
            </li>
            <li>
              <a
                href={profile.youtube}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-full border border-ink-600 bg-ink-950/75 px-4 py-2 text-mist-300 transition-colors hover:border-signal hover:text-mist-100"
              >
                <CirclePlay size={15} /> Kepikiran Aja
              </a>
            </li>
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
