import Link from "next/link"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ProjectsDemos } from "@/lib/data/dummy-data"

export function ProjectAndDemos() {
  return (
    <section>
      <h2 className="text-2xl font-semibold tracking-tight text-white">
        Projects &amp; Demos
      </h2>
      <div className="mt-8 space-y-12">
        {ProjectsDemos.map((project) => (
          <div
            key={project.id}
            className="grid items-center gap-6 border-t border-white/10 pt-12 lg:grid-cols-2"
          >
            <div className="overflow-hidden rounded-2xl border border-white/10">
              <Image
                src={project.img}
                width={1280}
                height={768}
                alt={project.title}
                className="h-auto w-full object-cover"
              />
            </div>
            <div className="flex flex-col items-start gap-3">
              <Badge variant="secondary">{project.category.trim()}</Badge>
              <h3 className="text-2xl font-semibold text-white">{project.title.trim()}</h3>
              <p className="text-zinc-400">{project.description}</p>
              <Button asChild variant="outline">
                <Link href={`/software/${project.slug.trim()}?id=${project.id}`}>
                  View Demo
                </Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
