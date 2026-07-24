import { motion } from "framer-motion";
import { Radio, Mic, Smartphone } from "lucide-react";
import { SectionWrapper } from "../ui/SectionWrapper";
import { MagneticButton } from "../ui/MagneticButton";
import studio from "../../assets/studio.jpg";

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
    <SectionWrapper tone="light">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-radial-gold blur-3xl opacity-60" />
          <div className="relative rounded-3xl overflow-hidden border border-[rgba(229,169,60,0.3)] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)]">
            <img src={studio} alt="Estúdio da Sertanejo FM" loading="lazy" className="w-full h-full object-cover" />
            {/* corner marks */}
            <span className="absolute top-3 left-3 h-6 w-6 border-t-2 border-l-2 border-[#ffd700]" />
            <span className="absolute top-3 right-3 h-6 w-6 border-t-2 border-r-2 border-[#ffd700]" />
            <span className="absolute bottom-3 left-3 h-6 w-6 border-b-2 border-l-2 border-[#ffd700]" />
            <span className="absolute bottom-3 right-3 h-6 w-6 border-b-2 border-r-2 border-[#ffd700]" />
          </div>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute -left-10 top-0 h-full w-px bg-gradient-to-b from-transparent via-[#e5a93c]/50 to-transparent" />
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#e5a93c]">
            24 horas no ar
          </p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl lg:text-6xl leading-tight">
            <span className="text-gold-gradient">Companhia de Verdade,</span>
            <br />
            <span className="text-[#f5f2eb]">24 Horas no Ar</span>
          </h2>
          <p className="mt-6 text-[#a89f91] leading-relaxed">
            A Sertanejo FM opera sem interrupções com transmissão digital de altíssima fidelidade.
            Unimos tecnologia de streaming de baixa latência a uma curadoria musical contínua para
            entregar um áudio limpo, cristalino e envolvente a qualquer hora do dia — no Brasil ou em
            qualquer lugar do mundo.
          </p>

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
                className="flex items-start gap-4 rounded-2xl glass-card p-4 transition-colors hover:border-[rgba(255,215,0,0.5)]"
              >
                <div className="shrink-0 grid h-12 w-12 place-items-center rounded-xl bg-[rgba(229,169,60,0.12)] border border-[rgba(229,169,60,0.3)] text-[#ffd700] shadow-[0_0_20px_rgba(255,215,0,0.15)]">
                  <Icon size={22} />
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-[#f5f2eb]">{title}</h3>
                  <p className="text-sm text-[#a89f91] mt-1">{body}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-10">
            <MagneticButton onClick={scrollTo}>🔊 Ouça Agora</MagneticButton>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
