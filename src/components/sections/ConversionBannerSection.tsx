import confetti from "canvas-confetti";
import { MagneticButton } from "../ui/MagneticButton";

export function ConversionBannerSection() {
  const handleClick = () => {
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.7 },
      colors: ["#ffd700", "#e5a93c", "#b37b14", "#fff3b0"],
    });
    setTimeout(() => {
      document.querySelector("#player")?.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };
  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-coffee-dark">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div
          className="relative rounded-3xl p-0.5"
          style={{
            background: "linear-gradient(135deg, #b37b14 0%, #ffd700 50%, #b37b14 100%)",
          }}
        >
          <div
            className="rounded-[calc(1.5rem-2px)] px-8 py-14 md:px-14 md:py-20 text-center relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #2A1B0E 0%, #1A1108 50%, #2A1B0E 100%)",
              boxShadow:
                "inset 0 1px 0 rgba(255,215,0,0.25), inset 0 -1px 0 rgba(0,0,0,0.6), 0 40px 80px -30px rgba(0,0,0,0.9)",
            }}
          >
            <div className="absolute inset-0 bg-radial-gold opacity-50 pointer-events-none" />
            <div className="relative max-w-2xl mx-auto">
              <h2 className="font-display text-4xl md:text-6xl leading-tight">
                <span className="text-gold-gradient">Aumente o Volume</span>
                <br />
                <span className="text-cream">da Rádio Mais Gostosa de Ouvir</span>
              </h2>
              <p className="mt-5 text-[#d9d2c4] max-w-2xl mx-auto">
                Junte-se a milhares de ouvintes diários em uma transmissão contínua que não para
                nunca.
              </p>
              <div className="mt-10">
                <MagneticButton onClick={handleClick}>📻 Ouça Agora!</MagneticButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
