import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-zinc-200 bg-white">
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 right-0 hidden h-[420px] w-[420px] translate-x-1/4 rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.18),transparent_68%)] lg:block"
      />
      <div className="relative mx-auto max-w-6xl px-6 py-24 lg:py-32">
        <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-zinc-950 md:text-6xl lg:text-7xl">
          Keep your attention on what matters
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-600">
          Focus on your business goals, and let us take care of your tech
          requirements with cutting-edge solutions.
        </p>
        <div className="mt-8">
          <Button asChild>
            <a href="#solutions">
              Explore solutions
              <ArrowRight />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
