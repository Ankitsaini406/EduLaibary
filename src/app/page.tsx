import { AboutUs, AppScreenshots, ContactUs, Features, PriceSection } from "@/components/HomeComponent";
import HeroSection from "@/components/Hero";

export default function Home() {
  return (
    <div className="py-16">
      <HeroSection />
      <AboutUs />
      <Features />
      <AppScreenshots />
      <PriceSection />
      <ContactUs />
    </div>
  );
}
