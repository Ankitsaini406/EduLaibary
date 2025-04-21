import { AboutUs, Features, PriceSection } from "@/components/HomeComponent";
import HeroSection from "@/lib/Hero";

export default function Home() {
  return (
    <div className="py-16">
      <HeroSection />
      <AboutUs />
      <Features />
      <PriceSection />
    </div>
  );
}
