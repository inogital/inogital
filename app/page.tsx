
import CTA from "@/components/common/call-to-action";
import HeroSection from "@/components/home/hero-section";
import OurPartners from "@/components/home/our-partners";
import OurSolutions from "@/components/home/our-solutions";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection />
      <OurSolutions/>
      <OurPartners/>
      <CTA />
    </main>
  );
}
