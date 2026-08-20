import { MapPin } from "lucide-react";
import { SITE_DATA } from "../../config/siteData";
import { InstagramIcon, WhatsAppIcon } from "../ui/BrandIcons";
import logo from "@/assets/sertanejo-fm-logo.webp";
import clubeLogo from "@/assets/cluberadios.webp";

export function FooterSection() {
  return (
    <footer className="bg-[#080604] pt-16 pb-10 relative">
      <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-gold to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="Sertanejo FM"
              className="h-26 w-auto object-contain drop-shadow-[0_0_15px_rgba(255,215,0,0.3)] transition-transform duration-300 hover:scale-105"
            />
          </div>
          <p className="mt-3 text-xs uppercase tracking-[0.3em] text-gold">{SITE_DATA.slogan}</p>
          <p className="mt-4 text-sm text-taupe max-w-sm leading-relaxed">
            A rádio sertaneja que traz a combinação perfeita entre os grandes clássicos da roça e os
            maiores lançamentos da atualidade.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h4 className="font-display text-lg tracking-widest text-cream mb-4">NAVEGAÇÃO</h4>
          <ul className="space-y-3 text-sm text-taupe">
            <li>
              <a href="#top" className="hover:text-gold-bright transition-colors">
                Início
              </a>
            </li>
            <li>
              <a href="#player" className="hover:text-gold-bright transition-colors">
                Ouça Agora
              </a>
            </li>
            <li>
              <a href="#estilos" className="hover:text-gold-bright transition-colors">
                Sobre a Rádio
              </a>
            </li>
            <li>
              <a href="#app" className="hover:text-gold-bright transition-colors">
                Aplicativo
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h4 className="font-display text-lg tracking-widest text-cream mb-4">REDES & CONTATO</h4>
          <ul className="space-y-3 text-sm text-taupe">
            <li>
              <a
                href={SITE_DATA.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-gold-bright transition-colors"
              >
                <InstagramIcon className="h-4 w-4" /> {SITE_DATA.instagramHandle}
              </a>
            </li>
            {/* <li className="inline-flex items-center gap-2">
              <MapPin size={16} className="text-gold" /> {SITE_DATA.location}
            </li> */}
          </ul>
          {/* <a
            href={SITE_DATA.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-gold-gradient px-5 py-2.5 text-sm font-semibold uppercase tracking-widest text-[#1a0f00] hover:shadow-[0_10px_30px_-5px_rgba(255,215,0,0.5)] transition-shadow"
          >
            <WhatsAppIcon className="h-4 w-4" /> Pedir Música
          </a> */}

          <div className="mt-4 flex flex-col items-center gap-4">
            <img alt="Clube de Rádios" className="h-16 w-auto" src={clubeLogo} />
            <img
              src="/radiosnet.webp"
              alt="RádiosNet"
              className="w-30 h-14 rounded-sm drop-shadow-[0_0_20px_rgba(0,210,255,0.4)]"
            />

            <img
              src="/radiobox.webp"
              alt="Online Radio Box"
              className="w-30 h-14 rounded-sm drop-shadow-[0_0_20px_rgba(0,210,255,0.4)]"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
