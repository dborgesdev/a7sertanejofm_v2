import { motion } from "framer-motion";
import { SectionHeader, SectionWrapper } from "../ui/SectionWrapper";
import work from "../../assets/moment-work.jpg";
import rest from "../../assets/moment-rest.jpg";
import bbq from "../../assets/moment-bbq.jpg";
import road from "../../assets/moment-road.jpg";
import city from "../../assets/moment-city.jpg";
import field from "../../assets/moment-field.jpg";

const ITEMS = [
  { img: work, title: "No Trabalho", body: "Foco, produtividade e o fundo musical perfeito para o seu expediente." },
  { img: rest, title: "No Descanso", body: "Relaxamento com as melodias mais marcantes para os momentos de pausa." },
  { img: bbq, title: "No Churrasco", body: "A energia certa para reunir a família, os amigos e celebrar a vida." },
  { img: road, title: "Na Estrada", body: "A parceria indispensável em cada quilômetro da sua viagem." },
  { img: city, title: "Na Cidade", body: "O ritmo dinâmico para acompanhar o movimento do seu dia a dia urbano." },
  { img: field, title: "No Campo", body: "A conexão autêntica com as nossas raízes e com a vida na terra." },
];

export function MomentsGridSection() {
  return (
    <SectionWrapper tone="light">
      <SectionHeader
        eyebrow="Momentos"
        title="A Maior Paixão do Brasil"
        subtitle="O ritmo que acompanha e move o dia a dia de milhares de ouvintes."
      />
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {ITEMS.map((it, i) => (
          <motion.article
            key={it.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
            whileHover={{ y: -6 }}
            className="group relative overflow-hidden rounded-2xl border border-transparent hover:border-[rgba(255,215,0,0.5)] transition-colors aspect-[4/5]"
          >
            <img src={it.img} alt={it.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <h3 className="font-display text-3xl tracking-wide text-[#f5f2eb] group-hover:text-[#ffd700] transition-colors">
                {it.title}
              </h3>
              <p className="mt-2 text-sm text-[#d9d2c4] opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 max-w-xs">
                {it.body}
              </p>
            </div>
          </motion.article>
        ))}
      </div>
    </SectionWrapper>
  );
}
