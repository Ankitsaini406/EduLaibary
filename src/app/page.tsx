import { AboutUs, Features, PriceSection } from "@/components/HomeComponent";

export default function Home() {
  return (
    <div className="py-16">
      <AboutUs />
      <Features />
      <PriceSection />
    </div>
  );
}
