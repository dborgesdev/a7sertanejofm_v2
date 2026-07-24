import { SITE_DATA } from "../../config/siteData";

export function CopyrightBar() {
  return (
    <div className="bg-[#050403] border-t border-[rgba(229,169,60,0.15)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-[#7a7266]">
        <p>© 2026 Sertanejo FM. Todos os direitos reservados.</p>
        <p>
          Desenvolvido com maestria por{" "}
          <a
            href={SITE_DATA.developerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-block text-[#e5a93c] hover:text-[#ffd700] transition-colors after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-px after:w-0 hover:after:w-full after:bg-gold-gradient after:transition-all after:duration-500"
          >
            {SITE_DATA.developerName}
          </a>
        </p>
      </div>
    </div>
  );
}
