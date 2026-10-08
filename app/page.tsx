import ClosingBand from "@/components/home/closing-band"
import HeroSection from "@/components/home/hero-section"
import OurPartners from "@/components/home/our-partners"
import OurSolutions from "@/components/home/our-solutions"

export default function Home() {
  return (
    <main>
      <HeroSection />
      <OurSolutions />
      <OurPartners />
      <ClosingBand />
    </main>
  )
}
