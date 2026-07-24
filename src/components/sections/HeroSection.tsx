import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MagneticButton } from "../ui/MagneticButton";
import { NAV_ITEMS, SITE_DATA } from "../../config/siteData";
import hero1 from "../../assets/hero-1.jpg";
import hero2 from "../../assets/hero-2.jpg";
import hero3 from "../../assets/hero-3.jpg";

const slides = [hero1, hero2, hero3];

export function HeroSection() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % slides.length), 6000);
    return () => clearInterval(t);
  }, []);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header id="top" className="relative min-h-screen w-full overflow-hidden">
      {/* Ken Burns bg */}
      {slides.map((src, idx) => (
        <motion.div
          key={src}
          initial={false}
          animate={{ opacity: idx === i ? 1 : 0, scale: idx === i ? 1.08 : 1 }}
          transition={{ opacity: { duration: 1.4 }, scale: { duration: 8, ease: "linear" } }}
          className="absolute inset-0"
        >
          <img
            src={src}
            alt=""
            aria-hidden
            className="h-full w-full object-cover"
            loading={idx === 0 ? "eager" : "lazy"}
          />
        </motion.div>
      ))}
      {/* Vignettes */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,transparent_0%,rgba(9,7,5,0.65)_60%,rgba(9,7,5,0.95)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#090705] via-[#090705]/70 to-transparent" />

      {/* Nav */}
      <nav className="relative z-20 flex items-center justify-between px-4 sm:px-6 lg:px-10 py-5">
        <a href="#top" className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-full bg-gold-gradient shadow-[0_0_20px_rgba(255,215,0,0.5)]">
            <span className="font-display text-lg text-[#1a0f00]">S</span>
          </div>
          <span className="font-display text-xl tracking-widest text-[#f5f2eb]">
            SERTANEJO<span className="text-[#e5a93c]">FM</span>
          </span>
        </a>
        <div className="hidden md:flex items-center gap-3">
          <div className="flex items-center gap-2 rounded-full border border-[rgba(229,169,60,0.4)] bg-[rgba(255,215,0,0.08)] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-[#f5f2eb]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Ao vivo
          </div>
          <ul className="flex items-center gap-6 text-sm text-[#d9d2c4]">
            {NAV_ITEMS.map((n) => (
              <li key={n.href}>
                <button
                  onClick={() => scrollTo(n.href)}
                  className="hover:text-[#ffd700] transition-colors"
                >
                  {n.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Hero copy */}
      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-88px)] max-w-6xl flex-col items-center justify-center px-4 pb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-[rgba(229,169,60,0.4)] bg-[rgba(255,215,0,0.08)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#f5f2eb]"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          ● AO VIVO
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.9 }}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] max-w-5xl"
        >
          <span className="text-gold-gradient">
            Sertanejo FM
          </span>
          <span className="block mt-3 text-3xl sm:text-4xl md:text-5xl text-[#f5f2eb]">
            A Rádio Sertaneja 24 Horas
          </span>
          <span className="block text-2xl sm:text-3xl md:text-4xl text-[#a89f91] font-sans font-light tracking-normal mt-2">
            On-line do Brasil para o Mundo
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.9 }}
          className="mt-8 max-w-2xl text-base md:text-lg text-[#d9d2c4] leading-relaxed"
        >
          A frequência que conecta tradição, grandes sucessos e a melhor companhia do seu dia. Onde o
          modão e os novos lançamentos se encontram sem interrupções.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.8 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <MagneticButton onClick={() => scrollTo("#player")}>🔊 Ouça Agora</MagneticButton>
          <a
            href={SITE_DATA.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm uppercase tracking-widest text-[#a89f91] hover:text-[#ffd700] transition-colors"
          >
            Pedir música →
          </a>
        </motion.div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.4em] text-[#a89f91]/60">
          Role para tocar
        </div>
      </div>
    </header>
  );
}
