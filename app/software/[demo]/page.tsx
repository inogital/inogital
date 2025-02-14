import YoutubeVid from "@/components/common/youtube-vid";
import { Badge } from "@/components/ui/badge";
import { ProjectsDemos } from "@/lib/data/dummy-data";
import Link from "next/link";



type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export default async function demoPage({

  searchParams,
}: {
 
  searchParams: SearchParams
}) {
  const resolvedSearchParams = await searchParams; 
  const id = resolvedSearchParams.id; 

  function filterDemosById(id: string) {
    return ProjectsDemos.filter((demo) => demo.id === id);
  }

  const filteredDemos = filterDemosById(id as string);

  return (
    <section className="my-12">
      {filteredDemos.map((demo) => (
        <div key={demo.id}>
          <div className="text-center py-12 ">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold  ">
              {demo.title}
            </h2>
          </div>

          <div className="flex flex-col p-4 space-y-4 text-slate-600">
            <p className=" font-semibold"> {demo.description}</p>
            <p className=" font-semibold">
              {" "}
              <Link
                href={demo.url}
                target="_blank"
                className="text-blue-800 font-semibold"
              >
                {" "}
                Visit site: {demo.url}{" "}
              </Link>{" "}
            </p>
          </div>
          <Badge className="my-5" variant="secondary">
            {demo.category}{" "}
          </Badge>
          <YoutubeVid videoId={demo.video} />
        </div>
      ))}
    </section>
  );
}
