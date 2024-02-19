import Image from "next/image";
import { ProjectsDemos } from "../../lib/data/dummy-data";
import Container from "@/components/common/Container";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function ProjectAndDemos() {
  const appUrl = process.env.NEXT_PUBLIC_APP_URL as string

  return (
    <section className="mb-12 lg:my-32">
      <div className="my-8 text-center">
        <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl ">
          Projects & Demos
        </h2>
      </div>
      <Container>
      {ProjectsDemos?.map((project) => (
        <section
          className="grid grid-cols-1 md:grid-cols-2   gap-4 my-24"
          key={project.title}
        >
          <div className=" overflow-hidden">
            <Image
              src={project.img}
              width={1280}
              height={768}
              alt="project"
              className=" w-full h-full rounded-md  object-contain transition-all hover:scale-105  "
            />
          </div>
          <div className="flex flex-col ">
            <h2 className="mb-4 text-xl tracking-tight font-extrabold text-slate-800 ">
              {project.title}
            </h2>
            <p className="text-gray-500">{project.description}</p>
            <p className="my-4">
              {" "}
              Category:{" "}
              <span className=" text-gray-900 font-semibold">
                {" "}
                {project.category}
              </span>{" "}
            </p>
           
           
              <Link
                href={`/software/${project.slug}?id=${project.id}`}
              >
                <Button variant='outline'>View Demo</Button>
              </Link>
           
          </div>
        </section>
      ))}
    </Container>
    </section>
  );
}
