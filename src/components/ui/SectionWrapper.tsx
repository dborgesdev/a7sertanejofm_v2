import type { HTMLAttributes, ReactNode } from "react";

type Props = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
  tone?: "dark" | "medium" | "light";
  glow?: boolean;
};

const toneMap = {
  dark: "bg-[#090705]",
  medium: "bg-[#110d08]",
  light: "bg-[#1a130c]",
};

export function SectionWrapper({
  children,
  className = "",
  tone = "dark",
  glow = false,
  ...rest
}: Props) {
  return (
    <section
      {...rest}
      className={`relative overflow-hidden ${toneMap[tone]} py-20 md:py-28 ${className}`}
    >
      {glow && (
        <div
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{
            background:
              "radial-gradient(circle at 20% 30%, rgba(229,169,60,0.08), transparent 55%), radial-gradient(circle at 80% 70%, rgba(255,215,0,0.06), transparent 55%)",
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
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow && (
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-[#e5a93c]">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight">
        <span className="text-gold-gradient">{title}</span>
      </h2>
      {subtitle && (
        <p className="mt-6 text-base md:text-lg text-[#a89f91] leading-relaxed">{subtitle}</p>
      )}
    </div>
  );
}
