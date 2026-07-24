import type { HTMLAttributes, ReactNode } from "react";

type Props = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
  tone?: "dark" | "wood" | "amberTransition" | "champagne";
  glow?: boolean;
  divider?: boolean;
};

// Tons em escala progressiva de luz:
const toneStyles = {
  // Level 0: Fundo Escuro de Impacto
  dark: "bg-[#140f0a] text-[#fbf8f3]",

  // Level 1: Transição Levemente Mais Quente (Player / App)
  wood: "bg-[#e2d1b3] text-[#1a130c]",

  // Level 2: O Tom "Ponte" (Aproximação do Champanhe)
  amberTransition: "bg-gradient-to-b from-[#1c150e] via-[#2a1d12] to-[#362618] text-[#fbf8f3]",

  // Level 3: Luz Total (Champanhe)
  champagne: "bg-[#f8f5ee] text-[#1a130c]",
};

export function SectionWrapper({
  children,
  className = "",
  tone = "dark",
  glow = false,
  divider = true,
  ...rest
}: Props) {
  const isLight = tone === "champagne";

  return (
    <section
      {...rest}
      className={`relative overflow-hidden ${toneStyles[tone]} py-16 md:py-24 ${className}`}
    >
      {/* Divisor Metálico Ajustado ao Tom */}
      {divider && (
        <div
          className={`absolute top-0 inset-x-0 h-px ${
            isLight
              ? "bg-linear-to-r from-transparent via-gold-deep/30 to-transparent"
              : "bg-linear-to-r from-transparent via-gold-bright/40 to-transparent"
          } pointer-events-none`}
        />
      )}

      {/* Spotlights de Luz de Fundo para Seções Escuras */}
      {glow && !isLight && (
        <div
          className="pointer-events-none absolute inset-0 opacity-100"
          style={{
            background:
              tone === "amberTransition"
                ? "radial-gradient(circle at 20% 30%, rgba(255,180,50,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(229,169,60,0.12) 0%, transparent 50%)"
                : "radial-gradient(circle at 50% 0%, rgba(255,215,0,0.15) 0%, transparent 60%)",
          }}
        />
      )}

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  center = true,
  isLight = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  center?: boolean;
  isLight?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-4xl text-center" : "max-w-3xl"}>
      {eyebrow && (
        <div
          className={`inline-block mb-3 px-3.5 py-1 rounded-full backdrop-blur-md ${
            isLight
              ? "bg-[rgba(179,123,20,0.1)] border border-[rgba(179,123,20,0.3)]"
              : "bg-[rgba(255,215,0,0.08)] border border-[rgba(255,215,0,0.3)]"
          }`}
        >
          <p
            className={`text-[11px] font-bold uppercase tracking-[0.3em] ${
              isLight ? "text-[#8c5e14]" : "text-gold-bright"
            }`}
          >
            {eyebrow}
          </p>
        </div>
      )}

      <h2
        className={`font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-wide text-balance ${
          isLight ? "text-coffee-medium" : "text-cream"
        }`}
      >
        <span className={isLight ? "text-gold-gradient-dark" : "text-gold-gradient"}>{title}</span>
      </h2>

      {subtitle && (
        <p
          className={`mt-4 text-sm md:text-base leading-relaxed font-normal max-w-2xl mx-auto text-balance ${
            isLight ? "text-[#4a3e31]" : "text-taupe"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
