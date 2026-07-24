import { MapPin } from "lucide-react";
import { SITE_DATA } from "../../config/siteData";
import { InstagramIcon, WhatsAppIcon } from "../ui/BrandIcons";

export function FooterSection() {
  return (
    <footer className="bg-[#080604] pt-16 pb-10 relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#e5a93c] to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-full bg-gold-gradient">
              <span className="font-display text-lg text-[#1a0f00]">S</span>
            </div>
            <span className="font-display text-xl tracking-widest text-[#f5f2eb]">
              SERTANEJO<span className="text-[#e5a93c]">FM</span>
            </span>
          </div>
          <p className="mt-3 text-xs uppercase tracking-[0.3em] text-[#e5a93c]">
            {SITE_DATA.slogan}
          </p>
          <p className="mt-4 text-sm text-[#a89f91] max-w-sm leading-relaxed">
            A rádio sertaneja que traz a combinação perfeita entre os grandes clássicos da roça e os
            maiores lançamentos da atualidade.
          </p>
        </div>

        <div>
          <h4 className="font-display text-lg tracking-widest text-[#f5f2eb] mb-4">
            NAVEGAÇÃO
          </h4>
          <ul className="space-y-3 text-sm text-[#a89f91]">
            <li><a href="#top" className="hover:text-[#ffd700] transition-colors">Início</a></li>
            <li><a href="#player" className="hover:text-[#ffd700] transition-colors">Ouça Agora</a></li>
            <li><a href="#estilos" className="hover:text-[#ffd700] transition-colors">Sobre a Rádio</a></li>
            <li><a href="#app" className="hover:text-[#ffd700] transition-colors">Aplicativo</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg tracking-widest text-[#f5f2eb] mb-4">
            REDES & CONTATO
          </h4>
          <ul className="space-y-3 text-sm text-[#a89f91]">
            <li>
              <a
                href={SITE_DATA.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-[#ffd700] transition-colors"
              >
                <InstagramIcon className="h-4 w-4" /> {SITE_DATA.instagramHandle}
              </a>
            </li>
            <li className="inline-flex items-center gap-2">
              <MapPin size={16} className="text-[#e5a93c]" /> {SITE_DATA.location}
            </li>
          </ul>
          <a
            href={SITE_DATA.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-gold-gradient px-5 py-2.5 text-sm font-semibold uppercase tracking-widest text-[#1a0f00] hover:shadow-[0_10px_30px_-5px_rgba(255,215,0,0.5)] transition-shadow"
          >
            <WhatsAppIcon className="h-4 w-4" /> Pedir Música
          </a>
        </div>
      </div>
    </footer>
  );
}
