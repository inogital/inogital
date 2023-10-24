import HeroSection from "@/components/Home/HeroSection";
import OurServices from "@/components/Home/OurServices";
import CTA from "@/components/common/CTA";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";

export default function Home() {
  return (
    <main className="">
      <Header />
      <HeroSection/>
      <OurServices/>
      <CTA/>
      <Footer/>
    </main>
  );
}
