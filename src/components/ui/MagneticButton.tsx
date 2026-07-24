import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { forwardRef, useRef, type ButtonHTMLAttributes, type ReactNode } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: "primary" | "ghost";
};

export const MagneticButton = forwardRef<HTMLButtonElement, Props>(
  ({ children, className = "", variant = "primary", onMouseMove, onMouseLeave, ...rest }, _ref) => {
    const inner = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const sx = useSpring(x, { stiffness: 200, damping: 15 });
    const sy = useSpring(y, { stiffness: 200, damping: 15 });
    const tx = useTransform(sx, (v) => v);
    const ty = useTransform(sy, (v) => v);

    const handleMove = (e: React.MouseEvent<HTMLButtonElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      x.set((e.clientX - rect.left - rect.width / 2) * 0.35);
      y.set((e.clientY - rect.top - rect.height / 2) * 0.35);
      onMouseMove?.(e);
    };
    const handleLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
      x.set(0);
      y.set(0);
      onMouseLeave?.(e);
    };

    const base =
      variant === "primary"
        ? "relative inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-sm md:text-base font-semibold uppercase tracking-widest text-[#1a0f00] bg-gold-gradient shadow-[0_10px_40px_-10px_rgba(255,215,0,0.6)] hover:shadow-[0_15px_60px_-10px_rgba(255,215,0,0.8)] transition-shadow overflow-hidden"
        : "relative inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-sm md:text-base font-semibold uppercase tracking-widest text-[#f5f2eb] border border-[rgba(229,169,60,0.5)] hover:border-[#ffd700] hover:bg-[rgba(229,169,60,0.08)] transition-colors overflow-hidden";

    return (
      <motion.button
        {...(rest as React.ComponentProps<typeof motion.button>)}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        style={{ x: tx, y: ty }}
        className={`${base} ${className}`}
      >
        <div ref={inner} className="relative z-10 flex items-center gap-2">
          {children}
        </div>
        <span className="pointer-events-none absolute inset-0 -translate-x-full bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.4),transparent)] transition-transform duration-700 hover:translate-x-full" />
      </motion.button>
    );
  }
);
MagneticButton.displayName = "MagneticButton";
