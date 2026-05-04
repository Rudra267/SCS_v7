import SiteShell from "@/components/layout/SiteShell";
import HeroSection from "@/components/home/HeroSection";
import ProgramsSection from "@/components/home/ProgramsSection";
import AboutSection from "@/components/home/AboutSection";
import StatsSection from "@/components/home/StatsSection";
import AchievementsSection from "@/components/home/AchievementsSection";
import TopRankersSection from "@/components/home/TopRankersSection";
import NewsSection from "@/components/home/NewsSection";
import AdmissionCTA from "@/components/home/AdmissionCTA";
import HomePopup from "@/components/home/HomePopup";
import { getAchievements } from "@/lib/achievements";

export const revalidate = 3600;

export default async function HomePage() {
  const achievements = await getAchievements({
    limit: 6,
    pagesPerCategory: 1,
    timeoutMs: 1200,
  });

  return (
    <SiteShell>
      <HomePopup />
      <main className="home-page">
        <HeroSection />
        <ProgramsSection />
        <StatsSection />
        <AboutSection />
        <TopRankersSection />
        <AchievementsSection achievements={achievements} variant="home" />
        <NewsSection />
        <AdmissionCTA />
      </main>
    </SiteShell>
  );
}
