import { Button } from "@/components/ui/button";

const SoftHeroSection = () => {
  return (
    <section className="relative flex items-center justify-center min-h-[60vh] py-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-rose-400 opacity-50 blur-[80px]"></div>
        <div className="absolute top-auto bottom-0 left-0 h-[500px] w-[500px] translate-x-[10%] translate-y-[30%] rounded-full bg-blue-400 opacity-50 blur-[80px]"></div>
      </div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="mb-6 text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl max-w-4xl mx-auto">
          Transform your creative visions into stunning software and web
          solutions
        </h1>
        <p className="mb-8 text-lg text-gray-600 md:text-xl max-w-3xl mx-auto">
          Our mission is to transform your creative visions into stunning,
          functional realities, bringing innovation and excellence to the
          forefront of your digital endeavors. Let us empower your ideas and
          turn them into impactful products that resonate with your audience.
        </p>
      </div>
    </section>
  );
};

export default SoftHeroSection;
