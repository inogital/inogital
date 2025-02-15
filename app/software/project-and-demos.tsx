import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ProjectsDemos } from "../../lib/data/dummy-data"

export function ProjectAndDemos() {
  return (
    <section className="py-12 lg:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl mb-12 text-center">
          Projects & Demos
        </h2>
        <div className="space-y-24">
          {ProjectsDemos?.map((project) => (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center" key={project.title}>
              <div className="overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
                <Image
                  src={project.img || "/placeholder.svg"}
                  width={1280}
                  height={768}
                  alt={project.title}
                  className="w-full h-auto object-cover transition-all duration-300 hover:scale-105"
                />
              </div>
              <div className="flex flex-col space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">{project.title}</h3>
                <p className="text-gray-600 text-lg">{project.description}</p>
                <p className="text-gray-700">
                  Category: <span className="font-semibold">{project.category}</span>
                </p>
                <Link href={`/software/${project.slug}?id=${project.id}`}>
                  <Button variant="outline" className="mt-4 transition-all duration-300 hover:bg-gray-100">
                    View Demo
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

