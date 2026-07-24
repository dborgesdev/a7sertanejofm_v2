import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "../components/sections/HeroSection";
import { PlayerSection } from "../components/sections/PlayerSection";
import { AudioExperienceSection } from "../components/sections/AudioExperienceSection";
import { LiveRadioSection } from "../components/sections/LiveRadioSection";
import { MomentsGridSection } from "../components/sections/MomentsGridSection";
import { AppEcosystemSection } from "../components/sections/AppEcosystemSection";
import { InstagramSection } from "../components/sections/InstagramSection";
import { ConversionBannerSection } from "../components/sections/ConversionBannerSection";
import { FooterSection } from "../components/sections/FooterSection";
import { CopyrightBar } from "../components/sections/CopyrightBar";
import { StickyAudioPlayer } from "../components/ui/StickyAudioPlayer";
import { Navbar } from "@/components/sections/Navbar";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Sertanejo FM | A Mais Gostosa de Ouvir - Rádio Sertaneja 24h" },
      {
        name: "description",
        content:
          "Ouça a Sertanejo FM ao vivo 24h. Modão, sertanejo raiz e os maiores hits universitários. A rádio sertaneja mais gostosa de ouvir — do Brasil para o mundo.",
      },
      {
        name: "keywords",
        content:
          "rádio sertaneja, sertanejo fm ao vivo, modão de viola, sertanejo universitário, ouvir rádio online, sertanejo 24 horas",
      },

      /* Open Graph */
      { property: "og:title", content: "Sertanejo FM — A Mais Gostosa de Ouvir" },
      {
        property: "og:description",
        content:
          "Rádio sertaneja online 24h com transmissão contínua sem interrupções. Modão raiz e grandes lançamentos.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://sertanejofm.com.br/" },
      { property: "og:image", content: "/sertanejo-fm-logo.webp" },
      { property: "og:image:alt", content: "Logotipo Sertanejo FM" },

      /* Twitter Cards */
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Sertanejo FM | A Mais Gostosa de Ouvir" },
      {
        name: "twitter:description",
        content:
          "Ouça a Sertanejo FM ao vivo 24h. A frequência que conecta tradição e os maiores sucessos.",
      },
      { name: "twitter:image", content: "/sertanejo-fm-logo.webp" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "RadioStation",
              "@id": "https://sertanejofm.com.br/#station",
              name: "Sertanejo FM",
              url: "https://sertanejofm.com.br",
              logo: "https://sertanejofm.com.br/sertanejo-fm-logo.webp",
              image: "https://sertanejofm.com.br/sertanejo-fm-logo.webp",
              description: "Rádio Sertaneja 24 Horas On-line do Brasil para o Mundo.",
              genre: ["Sertanejo", "Modão", "Sertanejo Universitário"],
              broadcaster: {
                "@type": "Organization",
                name: "Sertanejo FM",
              },
              sameAs: [],
            },
            {
              "@type": "WebSite",
              "@id": "https://sertanejofm.com.br/#website",
              url: "https://sertanejofm.com.br",
              name: "Sertanejo FM",
              description: "A Rádio Sertaneja 24 Horas On-line",
              publisher: {
                "@id": "https://sertanejofm.com.br/#station",
              },
              copyrightHolder: {
                "@type": "Organization",
                name: "Sertanejo FM",
              },
              creator: {
                "@type": "Organization",
                name: "Smart Local",
                url: "https://smartlocal.com.br",
              },
            },
          ],
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <div className="bg-coffee-dark text-cream">
      <Navbar />
      <main>
        <HeroSection />
        <PlayerSection />
        <AudioExperienceSection />
        <LiveRadioSection />
        <MomentsGridSection />
        <AppEcosystemSection />
        <InstagramSection />
        <ConversionBannerSection />
      </main>
      <FooterSection />
      <CopyrightBar />
    </div>
  );
}
