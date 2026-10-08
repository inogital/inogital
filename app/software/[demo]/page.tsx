import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import { DocsPage } from "@/components/common/docs-page"
import YoutubeVid from "@/components/common/youtube-vid"
import { ProjectsDemos } from "@/lib/data/dummy-data"

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>

export default async function DemoPage({
  searchParams,
}: {
  searchParams: SearchParams
}) {
  const resolvedSearchParams = await searchParams
  const id = resolvedSearchParams.id
  const demo = ProjectsDemos.find((item) => item.id === id)

  if (!demo) {
    return (
      <DocsPage title="Demo" lead="This demo could not be found.">
        <Link href="/software" className="text-sm text-zinc-950 underline-offset-4 hover:underline">
          Back to software
        </Link>
      </DocsPage>
    )
  }

  const siteUrl = demo.url.trim()

  return (
    <DocsPage title={demo.title.trim()} lead={demo.description}>
      <Badge variant="secondary">{demo.category.trim()}</Badge>
      {siteUrl ? (
        <p>
          <a
            href={siteUrl}
            target="_blank"
            rel="noreferrer"
            className="text-zinc-950 underline-offset-4 hover:underline"
          >
            Visit demo site: {siteUrl}
          </a>
        </p>
      ) : null}
      <YoutubeVid videoId={demo.video.trim()} />
    </DocsPage>
  )
}
