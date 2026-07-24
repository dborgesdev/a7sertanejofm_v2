import { motion } from "framer-motion";
import { Radio, Mic, Smartphone } from "lucide-react";
import { SectionWrapper } from "../ui/SectionWrapper";
import { MagneticButton } from "../ui/MagneticButton";
import studio from "@/assets/hero-4m.webp";

const CARDS = [
  {
    icon: Radio,
    title: "Transmissão 100% Estável",
    body: "Áudio contínuo e sem travamentos, otimizado inclusive para conexões móveis.",
  },
  {
    icon: Mic,
    title: "Curadoria Humana",
    body: "Programação viva e inteligente, pensada no ritmo e no sentimento do ouvinte.",
  },
  {
    icon: Smartphone,
    title: "Conectividade Total",
    body: "Acesse direto pelo navegador em qualquer dispositivo ou através do nosso aplicativo leve e otimizado.",
  },
];

export function LiveRadioSection() {
  const scrollTo = () => document.querySelector("#player")?.scrollIntoView({ behavior: "smooth" });

  return (
    <SectionWrapper tone="champagne" divider>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        {/* Imagem do Estúdio */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-radial-gold blur-2xl opacity-40" />
          <div className="relative aspect-4/5 rounded-3xl overflow-hidden border border-[rgba(179,123,20,0.3)] shadow-[0_20px_50px_rgba(26,19,12,0.12)]">
            <img
              src={studio}
              alt="Estúdio da Sertanejo FM"
              loading="lazy"
              className="w-full h-full object-cover brightness-105 contrast-105"
            />
            {/* Marcadores de Canto Dourados */}
            <span className="absolute top-3 left-3 h-6 w-6 border-t-2 border-l-2 border-gold-deep" />
            <span className="absolute top-3 right-3 h-6 w-6 border-t-2 border-r-2 border-gold-deep" />
            <span className="absolute bottom-3 left-3 h-6 w-6 border-b-2 border-l-2 border-gold-deep" />
            <span className="absolute bottom-3 right-3 h-6 w-6 border-b-2 border-r-2 border-gold-deep" />
          </div>
        </motion.div>

        {/* Conteúdo Institucional */}
        <div className="relative">
          <div className="hidden lg:block absolute -left-10 top-0 h-full w-px bg-linear-to-b from-transparent via-gold-deep/40 to-transparent" />

          <p className="inline-flex items-center gap-2 rounded-full border border-[rgba(26,19,12,0.25)] bg-[rgba(26,19,12,0.06)] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#8c5e14] mb-4 backdrop-blur-md">
            24 horas no ar
          </p>

          <h2 className="mt-3 font-display text-4xl md:text-5xl lg:text-6xl leading-tight">
            <span className="text-gold-gradient-dark">Companhia de Verdade,</span>
            <br />
            <span className="text-coffee-medium">24 Horas no Ar</span>
          </h2>

          <p className="mt-6 text-[#4a3e31] leading-relaxed text-base font-normal">
            A Sertanejo FM opera sem interrupções com transmissão digital de altíssima fidelidade.
            Unimos tecnologia de streaming de baixa latência a uma curadoria musical contínua para
            entregar um áudio limpo, cristalino e envolvente a qualquer hora do dia — no Brasil ou
            em qualquer lugar do mundo.
          </p>

          {/* Lista de Cards Claros */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.15 } } }}
            className="mt-8 space-y-4"
          >
            {CARDS.map(({ icon: Icon, title, body }) => (
              <motion.div
                key={title}
                variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
                className="flex items-start gap-4 rounded-2xl bg-white/90 border border-[rgba(179,123,20,0.2)] p-4 shadow-sm transition-all hover:shadow-md hover:border-[rgba(179,123,20,0.5)]"
              >
                <div className="shrink-0 grid h-12 w-12 place-items-center rounded-xl bg-[rgba(229,169,60,0.15)] border border-[rgba(229,169,60,0.3)] text-gold-deep">
                  <Icon size={22} />
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-coffee-medium text-base">{title}</h3>
                  <p className="text-sm text-[#5c4f40] mt-1 leading-snug">{body}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-10 flex items-center justify-start">
            <MagneticButton onClick={scrollTo}>🔊 Ouça Agora</MagneticButton>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
