const SoftHeroSection = () => {
  return (
    <section className="relative flex items-center justify-center h-[60vh] ">
      {/* <div className="absolute inset-0 bg-blue-700 text-white py-8 opacity-25"></div> */}
      <div className="absolute top-0 -z-10  w-full bg-white">
        <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-rose-400 opacity-50 blur-[80px]"></div>
      </div>
      <div className="w-full mx-auto  text-center relative z-5">
        <h1 className="mb-8 text-4xl font-extrabold leading-none tracking-normal  md:text-6xl md:tracking-tight">
          Transform your creative visions into stunning software and web
          solutions.
        </h1>
        <p className="px-0 mb-8 text-lg  md:text-xl lg:px-24">
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
