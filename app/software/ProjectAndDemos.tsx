import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CarouselCard from "./CarouselCard";

export function ProjectAndDemos() {
  return (
    <section className="my-12">
      <div className="my-8">
        <h2 className="text-xl text-center font-extrabold leading-tight  lg:text-2xl">
         Projects & Demos
        </h2>
      </div>
      <div className="flex justify-center items-center my-12">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full max-w-lg"
        >
          <CarouselContent className="-ml-1">
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem
                key={index}
                className="pl-1 md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-1">
                  <CarouselCard/>
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
