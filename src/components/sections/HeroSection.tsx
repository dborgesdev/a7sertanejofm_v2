import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MagneticButton } from "../ui/MagneticButton";
import hero1 from "@/assets/hero-1.webp";
import hero2 from "@/assets/hero-2.webp";
import hero3 from "@/assets/hero-3.webp";
import hero4 from "@/assets/hero-4.webp";
import hero5 from "@/assets/hero-5.webp";
import hero6 from "@/assets/hero-6.webp";
import mhero1 from "@/assets/hero-1m.webp";
import mhero2 from "@/assets/hero-2m.webp";
import mhero3 from "@/assets/hero-3m.webp";
import mhero4 from "@/assets/hero-4m.webp";
import mhero5 from "@/assets/hero-5m.webp";
import mhero6 from "@/assets/hero-6m.webp";

const slides = [hero1, hero2, hero3, hero4, hero5, hero6];
const mSlides = [mhero1, mhero2, mhero3, mhero4, mhero5, mhero6];

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
    <section id="top" className="relative min-h-screen w-full pt-32 overflow-hidden">
      <div className="md:hidden">
        {mSlides.map((src, idx) => (
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
      </div>
      <div className="hidden md:block">
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
      </div>
      {/* 1. Camada de escurecimento uniforme sobre a imagem */}
      {/* <div className="absolute inset-0 bg-black/45" /> */}

      {/* 2. Radial Vignette direcionado para o centro */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(9,7,5,0.5)_0%,rgba(9,7,5,0.1)_70%,rgba(9,7,5,0.8)_100%)]" />

      {/* Degradê inferior de transição */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-coffee-dark via-coffee-dark/20 to-transparent" />

      {/* Hero copy */}
      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-88px)] max-w-6xl flex-col items-center justify-center px-4 pb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-[rgba(229,169,60,0.5)] bg-coffee-dark/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-cream backdrop-blur-md shadow-lg"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-red-400" />
          </span>
          AO VIVO
        </motion.div>

        {/* 3. Aplicação de drop-shadow intenso nos textos para garantir contraste em qualquer imagem */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.9 }}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] max-w-5xl drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]"
        >
          <span className="text-gold-gradient block drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
            A7 Sertanejo FM
          </span>
          <span className="block mt-3 text-3xl sm:text-4xl md:text-5xl text-cream drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            A Rádio Sertaneja 24 Horas
          </span>
          <span className="block text-2xl sm:text-3xl md:text-4xl text-[#d0c7b7] font-sans font-light tracking-normal mt-2 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            On-line do Brasil para o Mundo
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.9 }}
          className="mt-8 max-w-2xl text-base md:text-lg text-[#f0eadd] leading-relaxed drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)] font-normal"
        >
          A frequência que conecta tradição, grandes sucessos e a melhor companhia do seu dia. Onde
          o modão e os novos lançamentos se encontram sem interrupções.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.8 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <MagneticButton onClick={() => scrollTo("#player")}>🔊 Ouça Agora</MagneticButton>
        </motion.div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.4em] text-taupe/80 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
          Deslize para tocar
        </div>
      </div>
    </section>
  );
}
