import { SectionWrapper } from "../ui/SectionWrapper";
import { InstagramIcon } from "../ui/BrandIcons";
import { SITE_DATA } from "../../config/siteData";

export function InstagramSection() {
  return (
    <SectionWrapper tone="dark" glow>
      <div className="mx-auto max-w-2xl text-center rounded-3xl glass-card p-10 md:p-14 relative overflow-hidden">
        <div className="absolute inset-0 bg-radial-gold opacity-60 pointer-events-none" />
        <div className="relative">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-gold">
            Conexão Social
          </p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl">
            <span className="text-gold-gradient">Siga a Rádio Sertanejo FM</span>
          </h2>
          <p className="mt-4 text-taupe">
            Fique por dentro dos bastidores, novidades e lançamentos no nosso perfil oficial.
          </p>

          <a
            href={SITE_DATA.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-8 inline-flex items-center gap-3 rounded-full border border-[rgba(229,169,60,0.5)] bg-[rgba(255,215,0,0.05)] px-6 py-3 text-sm font-semibold uppercase tracking-widest text-cream hover:text-[#1a0f00] transition-colors relative overflow-hidden"
          >
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 bg-gold-gradient" />
            <InstagramIcon className="relative h-5 w-5" />
            <span className="relative">📸 {SITE_DATA.instagramHandle}</span>
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
}
