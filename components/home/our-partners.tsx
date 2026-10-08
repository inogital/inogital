import Image from "next/image"

const partners = [
  { src: "/img/partner/group4.png", alt: "Partner 1" },
  { src: "/img/partner/group5.png", alt: "Partner 2" },
  { src: "/img/partner/group6.png", alt: "Partner 3" },
]

export default function OurPartners() {
  return (
    <section className="border-b border-zinc-200 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:py-28">
        <h2 className="text-center text-3xl font-semibold tracking-tight text-zinc-950 md:text-4xl">
          You&apos;re in Good Company
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-zinc-600">
          We have partnered with industry leaders who trust us to deliver
          innovative solutions and drive your success.
        </p>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {partners.map((partner) => (
            <div
              key={partner.src}
              className="flex items-center justify-center rounded-2xl border border-zinc-200 bg-zinc-50 p-8"
            >
              <div className="relative h-28 w-full">
                <Image
                  src={partner.src}
                  alt={partner.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
