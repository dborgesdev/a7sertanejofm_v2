import type { HTMLAttributes, ReactNode } from "react";

type Props = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
  tone?: "dark" | "medium" | "light";
  glow?: boolean;
  divider?: boolean;
};

// Amplitude aumentada para garantir contraste visual claro entre as seções
const toneMap = {
  dark: "bg-[#080604]",
  medium: "bg-[#120e09]",
  light: "bg-[#1c150e]",
};

export function SectionWrapper({
  children,
  className = "",
  tone = "dark",
  glow = false,
  divider = true,
  ...rest
}: Props) {
  return (
    <section
      {...rest}
      className={`relative overflow-hidden ${toneMap[tone]} py-16 md:py-24 ${className}`}
    >
      {/* Divisor Metálico com Ponto de Luz Central */}
      {divider && (
        <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-gold-bright/40 to-transparent pointer-events-none" />
      )}

      {/* Glow Reforçado para Criar Volumetria Visual */}
      {glow && (
        <div
          className="pointer-events-none absolute inset-0 opacity-100"
          style={{
            background:
              "radial-gradient(circle at 50% 0%, rgba(229,169,60,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255,215,0,0.05) 0%, transparent 40%)",
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
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-4xl text-center" : "max-w-3xl"}>
      {eyebrow && (
        <div className="inline-block mb-3 px-3 py-1 rounded-full bg-gold-bright/5 border border-gold-bright/20 backdrop-blur-md">
          <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-gold drop-shadow-[0_0_8px_rgba(229,169,60,0.4)]">
            {eyebrow}
          </p>
        </div>
      )}

      {/* text-balance resolve as quebras estranhas e harmoniza o bloco */}
      <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-wide text-balance">
        <span className="text-gold-gradient">{title}</span>
      </h2>

      {subtitle && (
        <p className="mt-4 text-sm md:text-base text-[#f0eadd] leading-relaxed font-normal max-w-2xl mx-auto text-balance opacity-90">
          {subtitle}
        </p>
      )}
    </div>
  );
}
