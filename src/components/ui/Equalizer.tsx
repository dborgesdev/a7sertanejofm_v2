export function Equalizer({ bars = 12, className = "" }: { bars?: number; className?: string }) {
  return (
    <div
      className={`flex items-end justify-center gap-1 h-10 ${className}`}
      aria-hidden="true"
    >
      {Array.from({ length: bars }).map((_, i) => (
        <span
          key={i}
          className="w-1 rounded-full bg-gold-gradient origin-bottom"
          style={{
            height: "100%",
            animation: `equalizer ${0.6 + (i % 5) * 0.15}s ease-in-out ${i * 0.06}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
