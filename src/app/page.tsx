import FaqSection from "@/components/home/FaqSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import HeroSection from "@/components/home/HeroSection";
import PricingSection from "@/components/home/PricingSection";

export default function Home() {
  return (
    <div className="page-shell">
      <HeroSection />
      <FeaturesSection />
      <PricingSection />
      <FaqSection />
    </div>
  );
}
