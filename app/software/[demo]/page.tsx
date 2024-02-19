import Container from "@/components/common/Container";
import YoutubeVid from "@/components/common/YoutubeVid";
import { Badge } from "@/components/ui/badge";
import { ProjectsDemos } from "@/lib/data/dummy-data";
import Link from "next/link";

export default async function demoPage({
  params,
  searchParams,
}: {
  params: { demo: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const id = searchParams.id;

  function filterDemosById(id: string) {
    return ProjectsDemos.filter((demo) => demo.id === id);
  }

  const filteredDemos = filterDemosById(id as string);

  return (
    <section className="my-12">
      <Container>
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
                <Link href={demo.url} target="_blank">
                  {" "}
                 Visit site:  {demo.url}{" "}
                </Link>{" "}
              </p>
            </div>
            <Badge className="my-5" variant="secondary">
              {demo.category}{" "}
            </Badge>
            <YoutubeVid videoId={demo.video} />
          </div>
        ))}
      </Container>
    </section>
  );
}
