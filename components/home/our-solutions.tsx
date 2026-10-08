import { Code2, GraduationCap, Network, Sparkles, Users } from "lucide-react"

import { FeatureCard, type FeatureTone } from "@/components/common/feature-card"
import { solutions } from "@/lib/data/solutions-data"

const tones: FeatureTone[] = ["blue", "green", "purple", "orange", "indigo"]
const icons = [Code2, Sparkles, GraduationCap, Network, Users]

export default function OurSolutions() {
  return (
    <section id="solutions" className="border-b border-zinc-200">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:py-28">
        <h2 className="text-3xl font-semibold tracking-tight text-zinc-950 md:text-4xl">
          Our Solutions
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-zinc-600">
          Equipped with expertise and dedication to facilitate the expansion of
          our client&apos;s businesses!
        </p>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {solutions.map((sol, index) => (
            <FeatureCard
              key={sol.id}
              tone={tones[index] ?? "blue"}
              icon={icons[index]}
              title={sol.name}
              body={sol.longDesc}
              href={sol.href}
              label="View more"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
