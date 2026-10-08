import { TalkToUs } from "@/components/common/talk-to-us"

export default function ClosingBand() {
  return (
    <section>
      <div className="mx-auto max-w-3xl px-6 py-20 text-center lg:py-28">
        <h2 className="text-3xl font-semibold tracking-tight text-zinc-950 md:text-5xl">
          Let&apos;s embrace innovation, enhance efficiency, and drive success
          together
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-zinc-600">
          inOgital offers a comprehensive suite of services designed to empower
          educational institutions, NPOs, and SMEs with cutting-edge technology
          solutions. Contact us today and let&apos;s transform your
          organization&apos;s tech landscape!
        </p>
        <div className="mt-8 flex justify-center">
          <TalkToUs variant="default" />
        </div>
      </div>
    </section>
  )
}
