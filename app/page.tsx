import CTA from "@/components/common/cta";
import HeroSection from "@/components/home/hero-section";
import OurPartners from "@/components/home/our-partners";
import OurServices from "@/components/home/our-services";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection />
      <OurServices />
      <OurPartners/>
      <CTA />
    </main>
  );
}
