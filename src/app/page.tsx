import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import DocumentationSection from "@/components/DocumentationSection";
import FeaturedWorkSection from "@/components/FeaturedWorkSection";
import CompetenciesSection from "@/components/CompetenciesSection";
import AchievementsOrgSection from "@/components/AchievementsOrgSection";
import ContactFooter from "@/components/ContactFooter";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0b0d0c] text-white">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <DocumentationSection />
        <FeaturedWorkSection />
        <CompetenciesSection />
        <AchievementsOrgSection />
      </main>
      <ContactFooter />
    </div>
  );
}
