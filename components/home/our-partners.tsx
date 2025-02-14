import Image from "next/image"

const partners = [
  { src: "/img/partner/group4.png", alt: "Partner 1" },
  { src: "/img/partner/group5.png", alt: "Partner 2" },
  { src: "/img/partner/group6.png", alt: "Partner 3" },
  // Add more partners here if needed
]

const OurPartners = () => {
  return (
    <section className="py-16 lg:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.5))] -z-10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="mb-12 lg:mb-16 text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight text-center text-gray-900">
          You&apos;re in <span className="text-blue-600">Good Company</span>
        </h2>
        <p className="max-w-2xl mx-auto text-center text-gray-600 mb-12">
          We have partnered with industry leaders who trust us to deliver innovative solutions and drive your success.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-center"
            >
              <div className="relative w-full h-40 transform hover:scale-105 transition-transform duration-300">
                <Image
                  src={partner.src || "/placeholder.svg"}
                  alt={partner.alt}
                  layout="fill"
                  objectFit="contain"
                  className="filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  )
}

export default OurPartners

