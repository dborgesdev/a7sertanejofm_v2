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
    <SectionWrapper id="app" tone="light" glow>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-gold">
            Aplicativo Oficial
          </p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl lg:text-6xl leading-tight">
            <span className="text-gold-gradient">Sertanejo FM em Todos</span>{" "}
            <span className="text-cream">os Seus Dispositivos</span>
          </h2>
          <p className="mt-6 text-taupe leading-relaxed">
            Sem complicações. A Sertanejo FM foi desenvolvida para rodar com alta fidelidade sonora
            e estabilidade em qualquer tela. Onde tiver internet, a nossa frequência está com você.
          </p>

          <div className="mt-8 rounded-2xl glass-card p-5">
            <p className="text-sm text-cream">
              <span className="text-gold-bright font-semibold">Baixe agora</span> o aplicativo
              oficial da Sertanejo FM —{" "}
              <span className="italic text-taupe">A mais gostosa de ouvir!</span>
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {BADGES.map(({ icon: Icon, label, strong }) => (
              <a
                href={SITE_DATA.appUrl}
                target="_blank"
                rel="noopener noreferrer"
                key={strong}
                className="group relative flex items-center gap-3 rounded-xl border border-[rgba(229,169,60,0.4)] bg-[#0a0805] px-4 py-3 text-left hover:border-gold-bright transition-colors overflow-hidden"
              >
                <Icon className="h-7 w-7 text-cream group-hover:text-gold-bright transition-colors" />
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-taupe">{label}</div>
                  <div className="text-sm font-semibold text-cream">{strong}</div>
                </div>
                <span className="pointer-events-none absolute inset-0 -translate-x-full bg-[linear-gradient(110deg,transparent,rgba(255,215,0,0.2),transparent)] group-hover:translate-x-full transition-transform duration-700" />
              </a>
            ))}
          </div>
        </div>

        <motion.div
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="relative mx-auto"
        >
          <div className="absolute inset-0 bg-radial-gold blur-3xl opacity-70" />
          <img
            src={phone}
            alt="App Sertanejo FM"
            loading="lazy"
            className="relative w-full max-w-md drop-shadow-[0_40px_60px_rgba(0,0,0,0.6)]"
          />
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
