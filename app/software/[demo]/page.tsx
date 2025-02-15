import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { ProjectsDemos } from "@/lib/data/dummy-data"
import YoutubeVid from "@/components/common/youtube-vid"

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>

export default async function DemoPage({
  searchParams,
}: {
  searchParams: SearchParams
}) {
  const resolvedSearchParams = await searchParams
  const id = resolvedSearchParams.id

  function filterDemosById(id: string) {
    return ProjectsDemos.filter((demo) => demo.id === id)
  }

  const filteredDemos = filterDemosById(id as string)

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {filteredDemos.map((demo) => (
        <div key={demo.id} className="space-y-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">{demo.title}</h1>
            <Badge variant="secondary" className="text-sm md:text-base">
              {demo.category}
            </Badge>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6 space-y-4">
            <p className="text-gray-700 text-lg">{demo.description}</p>
            <Link
              href={demo.url}
              target="_blank"
              className="inline-block text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-200"
            >
              Visit demo site: {demo.url}
            </Link>
          </div>

          <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
            <YoutubeVid videoId={demo.video} />
          </div>
        </div>
      ))}
    </section>
  )
}

