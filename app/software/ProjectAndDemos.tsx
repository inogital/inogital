import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CarouselCard from "./CarouselCard";
import { ProjectsDemos } from "../data/dummy-data";

export function ProjectAndDemos() {
  return (
    <section className="my-12 lg:my-32">
      <div className="my-8 text-center">
        <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl ">
          Projects & Demos
        </h2>
      </div>
      <div className="flex justify-center items-center my-12">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full max-w-[1280px]"
        >
          <CarouselContent className="-ml-1">
            {ProjectsDemos.map((pro, index) => (
              <CarouselItem
                key={index}
                className="pl-1 md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-1">
                  <CarouselCard pro={pro} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
