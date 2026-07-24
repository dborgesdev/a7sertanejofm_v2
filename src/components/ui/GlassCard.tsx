import type { HTMLAttributes, ReactNode } from "react";
import { motion } from "framer-motion";

type Props = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  tilt?: boolean;
};

export function GlassCard({ children, className = "", tilt = false, ...rest }: Props) {
  const base =
    "group relative rounded-2xl glass-card p-6 transition-all duration-500 hover:border-[rgba(255,215,0,0.6)] hover:shadow-[0_20px_60px_-15px_rgba(255,215,0,0.25)]";

  if (tilt) {
    return (
      <motion.div
        whileHover={{ y: -6, rotateX: 2, rotateY: -2 }}
        transition={{ type: "spring", stiffness: 200, damping: 18 }}
        style={{ transformStyle: "preserve-3d" }}
        className={`${base} ${className}`}
      >
        <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity bg-radial-gold" />
        <div className="relative">{children}</div>
      </motion.div>
    );
  }
  return (
    <div className={`${base} ${className}`} {...rest}>
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity bg-radial-gold" />
      <div className="relative">{children}</div>
    </div>
  );
}
