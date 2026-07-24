import { motion } from "framer-motion";
import { SectionHeader, SectionWrapper } from "../ui/SectionWrapper";
import { GlassCard } from "../ui/GlassCard";
import raiz from "../../assets/style-raiz.webp";
import univ from "../../assets/style-universitario.webp";
import estrada from "../../assets/style-estrada.webp";
import modao from "../../assets/style-modao.webp";

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
    <SectionWrapper id="estilos" tone="light" glow>
      <SectionHeader
        eyebrow="A Experiência Sonora"
        title="A Trilha Sonora Definitiva para Cada Momento do Seu Dia"
        subtitle="Curadoria musical refinada, desenvolvida por quem entende de paixão, campo, estrada e celebração."
      />

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
        {CARDS.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
          >
            <GlassCard
              tilt
              className="h-full p-0 overflow-hidden group border border-[rgba(229,169,60,0.25)] hover:border-gold-bright transition-all duration-500"
            >
              <div className="relative aspect-square rounded-2xl overflow-hidden">
                <img
                  src={c.img}
                  alt={c.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#0d0905] via-[#0d0905]/50 to-transparent" />
              </div>
              <div className="p-4 md:p-6 absolute bottom-0 bg-[#0d0905]">
                <h3 className="font-display text-lg sm:text-xl md:text-lg lg:text-xl tracking-wide text-cream group-hover:text-gold-bright transition-colors">
                  {c.title}
                </h3>
                <p className="mt-3 text-sm text-taupe leading-relaxed">{c.body}</p>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
