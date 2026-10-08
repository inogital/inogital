import { notFound } from "next/navigation"

import { DocsPage, DocsSection } from "@/components/common/docs-page"
import { Badge } from "@/components/ui/badge"
import { getTraining, trainings } from "@/lib/data/training"

export function generateStaticParams() {
  return trainings.map((training) => ({ slug: training.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const training = getTraining(slug)
  return { title: training?.title ?? "Training" }
}

export default async function TrainingDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const training = getTraining(slug)

  if (!training) {
    notFound()
  }

  return (
    <DocsPage title={training.title} lead={training.subtitle}>
      <p className="text-base leading-relaxed text-zinc-700">{training.summary}</p>
      <div className="flex flex-wrap items-center gap-2">
        <Badge variant="secondary">{training.duration}</Badge>
        {training.audience.map((item) => (
          <Badge key={item} variant="outline">
            {item}
          </Badge>
        ))}
      </div>
      {training.sections.map((section) => (
        <DocsSection key={section.title} title={section.title}>
          <p>{section.body}</p>
          {section.points ? (
            <ul className="list-disc space-y-2 pl-5">
              {section.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          ) : null}
        </DocsSection>
      ))}
    </DocsPage>
  )
}
