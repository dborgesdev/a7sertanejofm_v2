import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_ITEMS, SITE_DATA } from "@/config/siteData";
import logo from "@/assets/a7-sertanejo-fm-logo.webp";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Bloqueia o scroll da página atrás quando o menu mobile está aberto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const scrollTo = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      {/* Header FIXO no topo da tela */}
      <header className="fixed top-0 inset-x-0 z-50 bg-coffee-dark/80 backdrop-blur-md border-b border-[rgba(229,169,60,0.15)]">
        <nav className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-28 flex items-center justify-between">
          {/* Esquerda: Badge Ao Vivo (Desktop) */}
          <div className="hidden md:flex items-center gap-2 rounded-full border border-[rgba(229,169,60,0.4)] bg-[rgba(255,215,0,0.08)] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-cream">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-red-400" />
            </span>
            Ao vivo
          </div>

          {/* CENTRO ABSOLUTO: Logotipo centralizado em MOBILE e DESKTOP */}
          <a
            href="#top"
            onClick={() => scrollTo("#top")}
            className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center focus:outline-none"
          >
            <img
              src={logo}
              alt="Sertanejo FM"
              className="h-26 w-auto object-contain drop-shadow-[0_0_15px_rgba(255,215,0,0.3)] transition-transform duration-300 hover:scale-105"
            />
          </a>

          {/* Direita: Menus Desktop */}
          <div className="hidden md:flex items-center gap-6">
            <ul className="flex items-center gap-6 text-sm text-[#d9d2c4]">
              {NAV_ITEMS.map((n) => (
                <li key={n.href}>
                  <button
                    onClick={() => scrollTo(n.href)}
                    className="hover:text-gold-bright transition-colors font-medium tracking-wide"
                  >
                    {n.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Direita Mobile: Botão Hambúrguer */}
          <div className="md:hidden ml-auto">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Fechar Menu" : "Abrir Menu"}
              className="relative z-50 p-2 rounded-xl border border-[rgba(229,169,60,0.4)] bg-[#0d0905]/90 text-gold-bright focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Menu Overlay Mobile Fullscreen */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-40 flex flex-col justify-between bg-coffee-dark/98 backdrop-blur-2xl px-6 pt-28 pb-10 md:hidden"
          >
            {/* Brilho radial de fundo */}
            <div className="pointer-events-none absolute inset-0 bg-radial-gold opacity-30" />

            {/* Links do Menu */}
            <ul className="relative z-10 flex flex-col items-center gap-8 text-center mt-6">
              {NAV_ITEMS.map((n) => (
                <motion.li
                  key={n.href}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <button
                    onClick={() => scrollTo(n.href)}
                    className="font-display text-2xl tracking-widest text-cream hover:text-gold-bright transition-colors"
                  >
                    {n.label}
                  </button>
                </motion.li>
              ))}
            </ul>

            {/* Rodapé do Menu Mobile */}
            {/* <div className="relative z-10 flex flex-col items-center gap-4 text-center border-t border-[rgba(229,169,60,0.2)] pt-6">
              <a
                href={SITE_DATA.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-gold-gradient px-8 py-3 text-sm font-semibold uppercase tracking-widest text-[#1a0f00] shadow-[0_0_20px_rgba(255,215,0,0.4)]"
              >
                Pedir Música
              </a>
            </div> */}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
