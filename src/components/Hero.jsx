import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { profile } from "../data/portfolio";
import WhatsAppIcon from "./icons/WhatsAppIcon";
import AnimatedHeading from "./AnimatedHeading";
import TypewriterText from "./TypewriterText";
import AnimatedBlob from "./AnimatedBlob";
import { downloadFile } from "../lib/downloadFile";

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
      className="hero-intro relative flex min-h-screen items-center overflow-hidden pt-16"
    >
      <div className="grid-backdrop absolute inset-0 opacity-60" />
      <div className="hero-atmosphere" aria-hidden="true" />
      <div className="hero-green-glow hero-green-glow-left" aria-hidden="true" />
      <div className="hero-green-glow hero-green-glow-center" aria-hidden="true" />
      <div className="hero-green-glow hero-green-glow-right" aria-hidden="true" />
      <AnimatedBlob
        variant={0}
        duration={20}
        className="-top-40 left-1/2 ml-[-360px] h-[420px] w-[720px] bg-signal/10 opacity-40"
      />

      <div className="relative mx-auto w-full max-w-5xl px-6 py-20 text-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mx-auto flex max-w-4xl flex-col items-center"
        >
          <motion.p
            variants={item}
            className="mb-7 flex items-center justify-center"
          >
            {profile.photoUrl && (
              <img
                src={profile.photoUrl}
                alt={profile.name}
                className="h-24 w-24 rounded-full border-2 border-signal/60 object-cover object-[center_20%] shadow-lg shadow-signal/20"
              />
            )}
          </motion.p>

          <motion.h1
            variants={item}
            className="max-w-4xl text-4xl font-semibold leading-[1.08] tracking-tight text-mist-100 sm:text-6xl lg:text-7xl"
          >
            <AnimatedHeading
              text={`Hi, I'm ${profile.firstName}.`}
              className="w-full justify-center"
            />
            <AnimatedHeading
              text={profile.role}
              className="mt-2 w-full justify-center text-mist-500"
              wordDelay={0.06}
              block
            />
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-7 max-w-2xl text-base leading-relaxed text-mist-300 sm:text-lg"
          >
            <TypewriterText text={profile.tagline} />
          </motion.p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mx-auto mt-10 max-w-3xl border-t border-ink-700/80 pt-8"
        >
          <motion.div variants={item} className="mx-auto grid max-w-2xl grid-cols-2 gap-3">
            <motion.a
              href="#projects"
              animate={{ scale: [1, 1.045, 1] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: 0 }}
              className="rounded-full bg-signal px-6 py-3 text-center text-sm font-semibold text-ink-950 transition-transform hover:-translate-y-0.5"
            >
              View Projects
            </motion.a>
            <motion.a
              href="#contact"
              animate={{ scale: [1, 1.045, 1] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: 0.15 }}
              className="whatsapp-action flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-ink-950 transition-transform hover:-translate-y-0.5"
            >
              <WhatsAppIcon size={16} />
              Contact Me
            </motion.a>
            <motion.a
              href={profile.cvDeveloperUrl}
              download="CV Akmal Farizky Hardhana - Developer.pdf"
              onClick={(e) => {
                e.preventDefault();
                downloadFile(
                  profile.cvDeveloperUrl,
                  "CV Akmal Farizky Hardhana - Developer.pdf"
                );
              }}
              animate={{ scale: [1, 1.045, 1] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
              className="rounded-full border border-signal-dim bg-ink-950/85 px-6 py-3 text-center text-sm font-medium text-mist-100 shadow-lg shadow-ink-950/30 transition-colors hover:border-signal hover:bg-ink-900"
            >
              Download CV Developer
            </motion.a>
            <motion.a
              href={profile.cvCreativeUrl}
              download="CV Akmal Farizky Hardhana - Creative.pdf"
              onClick={(e) => {
                e.preventDefault();
                downloadFile(
                  profile.cvCreativeUrl,
                  "CV Akmal Farizky Hardhana - Creative.pdf"
                );
              }}
              animate={{ scale: [1, 1.045, 1] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: 0.45 }}
              className="rounded-full border border-signal-dim bg-ink-950/85 px-6 py-3 text-center text-sm font-medium text-mist-100 shadow-lg shadow-ink-950/30 transition-colors hover:border-signal hover:bg-ink-900"
            >
              Download CV Creative
            </motion.a>
          </motion.div>

        </motion.div>

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
