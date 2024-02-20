import HeroSection from "@/components/Home/HeroSection";
import OurPartners from "@/components/Home/OurPartners";
import OurServices from "@/components/Home/OurServices";
import CTA from "@/components/common/CTA";

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
