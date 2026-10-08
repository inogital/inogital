import { DocsPage } from "@/components/common/docs-page"
import { FeatureCard } from "@/components/common/feature-card"
import { trainings } from "@/lib/data/training"

export default function TrainingPage() {
  return (
    <DocsPage
      wide
      title="Training your team can use next week"
      lead="Short, practical sessions for schools, nonprofits, and small teams. Open a course to see how it runs."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {trainings.map((training) => (
          <FeatureCard
            key={training.slug}
            tone={training.tone}
            title={training.title}
            body={training.summary}
            href={`/training/${training.slug}`}
            label="Learn more"
          />
        ))}
      </div>
    </DocsPage>
  )
}
