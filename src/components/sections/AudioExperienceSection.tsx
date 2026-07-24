import { motion } from "framer-motion";
import { SectionHeader, SectionWrapper } from "../ui/SectionWrapper";
import { GlassCard } from "../ui/GlassCard";
import raiz from "../../assets/style-raiz.jpg";
import univ from "../../assets/style-universitario.jpg";
import estrada from "../../assets/style-estrada.jpg";
import modao from "../../assets/style-modao.jpg";

const CARDS = [
  {
    img: raiz,
    title: "O Melhor do Sertanejo Raiz",
    body: "Os clássicos inesquecíveis que marcaram gerações. A verdadeira essência da viola caipira e dos grandes modões.",
  },
  {
    img: univ,
    title: "Hits do Sertanejo Universitário",
    body: "Os ritmos mais tocados do Brasil, lançamentos exclusivos e as faixas que dominam o topo das paradas.",
  },
  {
    img: estrada,
    title: "Ronda das Estradas",
    body: "A companhia ideal para quem vive em movimento, trazendo energia, ritmo marcante e presença constante.",
  },
  {
    img: modao,
    title: "Modão de Fim de Tarde",
    body: "O descanso merecido ao som das maiores composições e duetos marcantes da música sertaneja.",
  },
];

export function AudioExperienceSection() {
  return (
    <SectionWrapper id="estilos" tone="medium" glow>
      <SectionHeader
        eyebrow="A Experiência Sonora"
        title="A Trilha Sonora Definitiva para Cada Momento do Seu Dia"
        subtitle="Curadoria musical refinada, desenvolvida por quem entende de paixão, campo, estrada e celebração."
      />

      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {CARDS.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
          >
            <GlassCard tilt className="h-full p-0 overflow-hidden">
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={c.img}
                  alt={c.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0805] via-[#0a0805]/60 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl tracking-wide text-[#f5f2eb]">{c.title}</h3>
                <p className="mt-3 text-sm text-[#a89f91] leading-relaxed">{c.body}</p>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
