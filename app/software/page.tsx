import { Bot, Rocket, Route, Sparkles } from "lucide-react"

import { DocsPage } from "@/components/common/docs-page"
import { FeatureCard } from "@/components/common/feature-card"

export default function SoftwareDevPage() {
  return (
    <DocsPage
      wide
      title="We don't write the code anymore. AI does."
      lead="We take your idea and turn it into a fully fledged MVP you can put in front of real users."
    >
      <div className="grid gap-4 md:grid-cols-2">
        <FeatureCard
          tone="blue"
          icon={Sparkles}
          title="Your idea, shaped"
          body="We start with what you want people to do, who it is for, and what the first version must include. The brief is small enough to build and clear enough to test."
        />
        <FeatureCard
          tone="purple"
          icon={Bot}
          title="AI does the building"
          body="The draft product is produced with AI. We stay on the product: the flows, the wording, and the decisions that make the MVP something a person can actually use."
        />
        <FeatureCard
          tone="green"
          icon={Rocket}
          title="A fully fledged MVP"
          body="You leave with a working product, not a slide. It is ready for the first users, with the core path in place and the extras left for later."
        />
        <FeatureCard
          tone="orange"
          icon={Route}
          title="After the first users"
          body="Once people are using it, we help you see what to keep, what to change, and what the next release should be."
        />
      </div>
    </DocsPage>
  )
}
