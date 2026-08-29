import { motion } from "framer-motion";
import { ArrowDown, MapPin, CirclePlay, Mail } from "lucide-react";
import { profile } from "../data/portfolio";
import WhatsAppIcon from "./icons/WhatsAppIcon";
import AnimatedHeading from "./AnimatedHeading";
import TypewriterText from "./TypewriterText";
import AnimatedBlob from "./AnimatedBlob";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pt-16"
    >
      <div className="grid-backdrop absolute inset-0 opacity-60" />
      <AnimatedBlob
        variant={0}
        duration={20}
        className="-top-40 left-1/2 ml-[-360px] h-[420px] w-[720px] bg-signal/10"
      />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p
            variants={item}
            className="mb-6 flex items-center gap-2 font-mono text-xs tracking-[0.2em] text-signal"
          >
            <motion.span
              animate={{ opacity: [1, 0.4, 1], scale: [1, 1.3, 1] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              className="inline-block h-1.5 w-1.5 rounded-full bg-signal"
            />
            <motion.span
              animate={{ opacity: [1, 0.55, 1] }}
              transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
            >
              TERSEDIA UNTUK KERJA SAMA
            </motion.span>
          </motion.p>

          <motion.h1
            variants={item}
            className="max-w-3xl text-4xl font-semibold leading-[1.1] tracking-tight text-mist-100 sm:text-6xl lg:text-7xl"
          >
            <AnimatedHeading text={`Hi, saya ${profile.firstName}.`} />
            <AnimatedHeading
              text={profile.role}
              className="mt-2 text-mist-500"
              wordDelay={0.06}
              block
            />
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-8 max-w-xl text-base leading-relaxed text-mist-300 sm:text-lg"
          >
            <TypewriterText text={profile.tagline} />
          </motion.p>

          <motion.div variants={item} className="mt-10 grid grid-cols-2 gap-3">
            <motion.a
              href="#projects"
              animate={{ scale: [1, 1.045, 1] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: 0 }}
              className="rounded-full bg-signal px-6 py-3 text-center text-sm font-semibold text-ink-950 transition-transform hover:-translate-y-0.5"
            >
              Lihat Project
            </motion.a>
            <motion.a
              href={profile.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              animate={{ scale: [1, 1.045, 1] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: 0.15 }}
              className="flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-ink-950 transition-transform hover:-translate-y-0.5"
            >
              <WhatsAppIcon size={16} />
              Hubungi Saya
            </motion.a>
            <motion.a
              href={profile.cvDeveloperUrl}
              download="CV Akmal Farizky Hardhana - Developer.pdf"
              animate={{ scale: [1, 1.045, 1] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
              className="rounded-full border border-ink-600 px-6 py-3 text-center text-sm font-medium text-mist-100 transition-colors hover:border-mist-500"
            >
              Download CV Developer
            </motion.a>
            <motion.a
              href={profile.cvCreativeUrl}
              download="CV Akmal Farizky Hardhana - Creative.pdf"
              animate={{ scale: [1, 1.045, 1] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: 0.45 }}
              className="rounded-full border border-ink-600 px-6 py-3 text-center text-sm font-medium text-mist-100 transition-colors hover:border-mist-500"
            >
              Download CV Creative
            </motion.a>
          </motion.div>

          <motion.ul
            variants={item}
            className="mt-14 flex flex-wrap items-center gap-2 text-sm text-mist-500"
          >
            <li className="flex items-center gap-2 rounded-full border border-ink-700 px-4 py-2">
              <MapPin size={15} /> {profile.location}
            </li>
            <li>
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-2 rounded-full border border-ink-700 px-4 py-2 transition-colors hover:border-ink-600 hover:text-mist-100"
              >
                <Mail size={15} /> {profile.email}
              </a>
            </li>
            <li>
              <a
                href={profile.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-full border border-ink-700 px-4 py-2 transition-colors hover:border-ink-600 hover:text-mist-100"
              >
                <WhatsAppIcon size={15} /> {profile.whatsapp}
              </a>
            </li>
            <li>
              <a
                href={profile.youtube}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-full border border-ink-700 px-4 py-2 transition-colors hover:border-ink-600 hover:text-mist-100"
              >
                <CirclePlay size={15} /> Kepikiran Aja
              </a>
            </li>
          </motion.ul>
        </motion.div>

        {profile.photoUrl && (
          <motion.img
            src={profile.photoUrl}
            alt={profile.name}
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: [0, -16, 0] }}
            transition={{
              opacity: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
              y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.8 },
            }}
            className="mx-auto w-full max-w-sm object-contain lg:max-w-none"
          />
        )}
      </div>

      <a
        href="#about"
        aria-label="Gulir ke bawah"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-mist-500 transition-colors hover:text-signal"
      >
        <ArrowDown size={18} className="animate-bounce" />
      </a>
    </section>
  );
}
