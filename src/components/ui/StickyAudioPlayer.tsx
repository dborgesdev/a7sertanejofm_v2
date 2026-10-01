import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Radio } from "lucide-react";
import { Equalizer } from "./Equalizer";
import { WhatsAppIcon } from "./BrandIcons";
import { SITE_DATA } from "../../config/siteData";

export function StickyAudioPlayer() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      const el = document.querySelector("#player");
      if (!el) return;
      const rect = (el as HTMLElement).getBoundingClientRect();
      setShow(rect.bottom < 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 22 }}
          className="fixed bottom-4 inset-x-3 md:inset-x-auto md:right-6 md:left-auto z-40 md:max-w-xl md:mx-auto"
          style={{ left: 0, right: 0, marginInline: "auto", maxWidth: 640 }}
        >
          <div className="glass-card rounded-full pl-2 pr-2 py-2 flex items-center gap-3 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.8)]">
            <button
              onClick={() => document.querySelector("#player")?.scrollIntoView({ behavior: "smooth" })}
              aria-label="Voltar para o player"
              className="shrink-0 grid h-10 w-10 place-items-center rounded-full bg-gold-gradient text-[#1a0f00]"
            >
              <Radio size={18} />
            </button>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-[#e5a93c]">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                </span>
                Ao vivo
              </div>
              <div className="overflow-hidden whitespace-nowrap text-sm text-[#f5f2eb]">
                <span className="inline-block">A7 Sertanejo FM — Transmissão 24h · A mais gostosa de ouvir!</span>
              </div>
            </div>
            <Equalizer bars={5} className="h-6 w-10 shrink-0" />
            <a
              href={SITE_DATA.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Pedir música no WhatsApp"
              className="shrink-0 grid h-10 w-10 place-items-center rounded-full border border-[rgba(229,169,60,0.5)] text-[#ffd700] hover:bg-[rgba(229,169,60,0.15)] transition-colors"
            >
              <WhatsAppIcon className="h-4 w-4" />
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
