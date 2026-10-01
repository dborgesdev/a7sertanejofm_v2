import { motion } from "framer-motion";
import { SectionWrapper } from "../ui/SectionWrapper";
import { AppleIcon, PlayStoreIcon, WindowsIcon } from "../ui/BrandIcons";
import phone from "../../assets/phone-mockup.webp";
import { SITE_DATA } from "@/config/siteData";

const BADGES = [
  { icon: PlayStoreIcon, label: "Disponível no", strong: "Google Play" },
  { icon: AppleIcon, label: "Baixar na", strong: "App Store" },
  { icon: WindowsIcon, label: "Disponível para", strong: "Windows" },
];

export function AppEcosystemSection() {
  return (
    <SectionWrapper id="app" tone="wood" glow>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-[rgba(26,19,12,0.25)] bg-[rgba(26,19,12,0.06)] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#8c5e14] mb-4 backdrop-blur-md">
            Aplicativo Oficial
          </p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl lg:text-6xl leading-tight text-coffee-medium font-bold">
            <span className="text-gold-gradient-dark">A7 Sertanejo FM</span>{" "}
            <span>em Todos os Seus Dispositivos</span>
          </h2>
          <p className="mt-6 text-[#4a3e31] font-medium leading-relaxed">
            Sem complicações. A A7 Sertanejo FM foi desenvolvida para rodar com alta fidelidade sonora
            e estabilidade em qualquer tela. Onde tiver internet, a nossa frequência está com você.
          </p>

          {/* Subcard com Contraste no Fundo Claro */}
          <div className="mt-8 rounded-2xl border border-[rgba(26,19,12,0.2)] bg-[rgba(255,255,255,0.45)] backdrop-blur-md p-5 shadow-sm">
            <p className="text-sm text-coffee-medium">
              <span className="text-[#8c5e14] font-bold">Baixe agora</span> o aplicativo oficial da
              A7 Sertanejo FM —{" "}
              <span className="italic text-[#4a3e31] font-medium">A mais gostosa de ouvir!</span>
            </p>
          </div>

          {/* Botões do App em Café Escuro (Alto Contraste) */}
          <div className="mt-6 flex flex-wrap gap-3">
            {BADGES.map(({ icon: Icon, label, strong }) => (
              <a
                href={SITE_DATA.appUrl}
                target="_blank"
                rel="noopener noreferrer"
                key={strong}
                className="group relative flex items-center gap-3 rounded-xl border border-[rgba(26,19,12,0.2)] bg-coffee-medium px-4 py-3 text-left hover:border-gold-bright hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <Icon className="h-7 w-7 text-cream group-hover:text-gold-bright transition-colors" />
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-taupe opacity-80">
                    {label}
                  </div>
                  <div className="text-sm font-semibold text-cream group-hover:text-gold-bright transition-colors">
                    {strong}
                  </div>
                </div>
                <span className="pointer-events-none absolute inset-0 -translate-x-full bg-[linear-gradient(110deg,transparent,rgba(255,215,0,0.2),transparent)] group-hover:translate-x-full transition-transform duration-700" />
              </a>
            ))}
          </div>
        </div>

        {/* Smartphone Flutuante com Sombra de Profundidade */}
        <motion.div
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="relative mx-auto"
        >
          <div className="absolute inset-0 bg-[#8c5e14]/20 blur-3xl rounded-full opacity-60" />
          <img
            src={phone}
            alt="App A7 Sertanejo FM"
            loading="lazy"
            className="relative w-full max-w-md drop-shadow-[0_30px_45px_rgba(26,19,12,0.35)]"
          />
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
