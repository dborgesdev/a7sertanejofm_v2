import { motion } from "framer-motion";
import { SITE_DATA } from "../../config/siteData";
import { Equalizer } from "../ui/Equalizer";
import { SectionWrapper } from "../ui/SectionWrapper";

export function PlayerSection() {
  return (
    <SectionWrapper id="player" tone="dark" glow className="pt-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-4xl text-center"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#e5a93c]">
          RÁDIO AO VIVO
        </p>
        <h2 className="mt-3 font-display text-4xl md:text-6xl">
          <span className="text-gold-gradient">Rádio Sertanejo FM</span>
        </h2>
        <p className="mt-4 text-base md:text-lg text-[#a89f91]">
          Música sem interrupções. 24h de pura emoção e sintonia perfeita.
        </p>

        <div className="mt-10 relative mx-auto max-w-3xl">
          {/* Glowing frame */}
          <div className="absolute -inset-6 rounded-3xl bg-radial-gold blur-2xl opacity-70" />
          <div
            className="relative rounded-3xl p-[2px]"
            style={{
              background:
                "linear-gradient(135deg, #b37b14 0%, #ffd700 45%, #b37b14 100%)",
            }}
          >
            <div className="rounded-[calc(1.5rem-2px)] bg-[#0a0805] p-4 md:p-6 shadow-[0_0_50px_rgba(229,169,60,0.2)]">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="relative flex h-3 w-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-400" />
                  </span>
                  <span className="text-xs uppercase tracking-widest text-[#f5f2eb]">
                    Transmitindo agora
                  </span>
                </div>
                <Equalizer bars={12} className="w-28" />
              </div>

              <div className="relative overflow-hidden rounded-xl bg-black">
                <iframe
                  src={SITE_DATA.streamIframeUrl}
                  title="Player Sertanejo FM Ao Vivo"
                  className="w-full"
                  style={{ height: 180, border: 0 }}
                  allow="autoplay"
                />
              </div>

              <p className="mt-4 text-[11px] uppercase tracking-[0.3em] text-[#a89f91]">
                {SITE_DATA.slogan}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
