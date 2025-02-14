import React from "react";
import { TrainingData } from "@/lib/data/dummy-data";
import TrainingHoverCard from "./training-hover-card";
import CTA from "@/components/common/call-to-action";

const TrainingPage = () => {
  return (
    <>
      <section className="relative flex items-center justify-center h-[40vh] ">
        {/* <div className="absolute inset-0 bg-blue-700 text-white py-8 opacity-25"></div> */}
        <div className="absolute top-0 -z-10  w-full bg-white">
          <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-rose-800 opacity-50 blur-[80px]"></div>
        </div>
        <div className="w-full mx-auto  text-center relative z-5">
          <h1 className="mb-8 text-4xl font-extrabold leading-none tracking-normal  md:text-6xl md:tracking-tight">
            Training solutions that suit your Org needs.
          </h1>
          <p className="px-0 mb-8 text-lg  md:text-xl lg:px-24">
            Browse a list of training opportunities below and let us know the
            one you need
          </p>
        </div>
      </section>

      <div className="py-8 lg:py-16 mx-auto max-w-(--breakpoint-xl) px-4">
        <div className=" grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  ">
          {TrainingData.map((training) => (
            <TrainingHoverCard key={training.id} training={training} />
          ))}
        </div>
      </div>
      <CTA />
    </>
  );
};

export default TrainingPage;
