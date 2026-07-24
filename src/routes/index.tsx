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

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      {
        title:
          "Sertanejo FM | A Rádio Sertaneja 24 Horas On-line do Brasil para o Mundo",
      },
      {
        name: "description",
        content:
          "Ouça a Sertanejo FM ao vivo 24h. Modão, sertanejo raiz e os maiores hits universitários. A mais gostosa de ouvir — do Brasil para o mundo.",
      },
      {
        property: "og:title",
        content: "Sertanejo FM — A mais gostosa de ouvir",
      },
      {
        property: "og:description",
        content:
          "Rádio sertaneja online 24h com transmissão contínua, curadoria humana e alta fidelidade.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function Index() {
  return (
    <main className="bg-[#090705] text-[#f5f2eb]">
      <HeroSection />
      <PlayerSection />
      <AudioExperienceSection />
      <LiveRadioSection />
      <MomentsGridSection />
      <AppEcosystemSection />
      <InstagramSection />
      <ConversionBannerSection />
      <FooterSection />
      <CopyrightBar />
      <StickyAudioPlayer />
    </main>
  );
}
