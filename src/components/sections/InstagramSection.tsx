import { SectionWrapper } from "../ui/SectionWrapper";
import { InstagramIcon } from "../ui/BrandIcons";
import { SITE_DATA } from "../../config/siteData";

export function InstagramSection() {
  return (
    <SectionWrapper tone="champagne" divider>
      <div className="mx-auto max-w-2xl text-center rounded-3xl bg-white/90 border border-[rgba(179,123,20,0.25)] p-10 md:p-14 relative overflow-hidden shadow-[0_15px_40px_rgba(26,19,12,0.06)]">
        {/* Soft Glow Champagne Background */}
        <div className="absolute inset-0 bg-radial-gold opacity-30 pointer-events-none" />

        <div className="relative z-10">
          <p className="text-xs font-bold uppercase tracking-[0.4em] text-gold-deep">
            Conexão Social
          </p>

          <h2 className="mt-3 font-display text-4xl md:text-5xl">
            Siga a Rádio <span className="text-gold-gradient-dark">A7 Sertanejo FM</span>
          </h2>

          <p className="mt-4 text-[#4a3e31] font-medium">
            Fique por dentro dos bastidores, novidades e lançamentos no nosso perfil oficial.
          </p>

          <a
            href={SITE_DATA.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-8 inline-flex items-center gap-3 rounded-full border border-[rgba(179,123,20,0.4)] bg-coffee-medium px-7 py-3.5 text-sm font-semibold uppercase tracking-widest text-cream hover:text-coffee-medium transition-all shadow-md relative overflow-hidden"
          >
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 bg-gold-gradient" />
            <InstagramIcon className="relative h-5 w-5" />
            <span className="relative">{SITE_DATA.instagramHandle}</span>
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
}
