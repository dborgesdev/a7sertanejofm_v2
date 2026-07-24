import { motion } from "framer-motion";
import { SectionWrapper } from "../ui/SectionWrapper";
import { AppleIcon, PlayStoreIcon, WindowsIcon } from "../ui/BrandIcons";
import phone from "../../assets/phone-mockup.png";

const BADGES = [
  { icon: PlayStoreIcon, label: "Disponível no", strong: "Google Play" },
  { icon: AppleIcon, label: "Baixar na", strong: "App Store" },
  { icon: WindowsIcon, label: "Disponível para", strong: "Windows" },
];

export function AppEcosystemSection() {
  return (
    <SectionWrapper id="app" tone="medium" glow>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#e5a93c]">
            Aplicativo Oficial
          </p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl lg:text-6xl leading-tight">
            <span className="text-gold-gradient">Sertanejo FM em Todos</span>
            <br />
            <span className="text-[#f5f2eb]">os Seus Dispositivos</span>
          </h2>
          <p className="mt-6 text-[#a89f91] leading-relaxed">
            Sem complicações. A Sertanejo FM foi desenvolvida para rodar com alta fidelidade sonora e
            estabilidade em qualquer tela. Onde tiver internet, a nossa frequência está com você.
          </p>

          <div className="mt-8 rounded-2xl glass-card p-5">
            <p className="text-sm text-[#f5f2eb]">
              <span className="text-[#ffd700] font-semibold">Baixe agora</span> o aplicativo oficial da
              Sertanejo FM — <span className="italic text-[#a89f91]">A mais gostosa de ouvir!</span>
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {BADGES.map(({ icon: Icon, label, strong }) => (
              <button
                key={strong}
                className="group relative flex items-center gap-3 rounded-xl border border-[rgba(229,169,60,0.4)] bg-[#0a0805] px-4 py-3 text-left hover:border-[#ffd700] transition-colors overflow-hidden"
              >
                <Icon className="h-7 w-7 text-[#f5f2eb] group-hover:text-[#ffd700] transition-colors" />
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-[#a89f91]">{label}</div>
                  <div className="text-sm font-semibold text-[#f5f2eb]">{strong}</div>
                </div>
                <span className="pointer-events-none absolute inset-0 -translate-x-full bg-[linear-gradient(110deg,transparent,rgba(255,215,0,0.2),transparent)] group-hover:translate-x-full transition-transform duration-700" />
              </button>
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
