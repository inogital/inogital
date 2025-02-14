import CTA from "@/components/common/cta";
import HeroSection from "@/components/home/hero-section";
import OurPartners from "@/components/home/our-partners";
import OurServices from "@/components/home/our-services";

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <OurServices />
      <OurPartners/>
      <CTA />
    </main>
  );
}
