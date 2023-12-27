import Image from "next/image";
import React from "react";

const GoogleServicesPage = () => {
  return (
    <section className="">
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-5xl font-bold leadi sm:text-6xl">
            Google Services
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12">
            inOgital assists educational institutions, NPOs, and SMEs in
            seamlessly integrating and deploying Google Workspace (formerly G
            Suite) solutions. This includes setting up collaborative tools such
            as Gmail, Google Drive, Google Docs, Sheets, and more, fostering
            enhanced communication and collaboration within organizations.
          </p>
          
        </div>
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <Image
            src="/img/googleb.png"
            width={522}
            height={350}
            alt=""
            className="object-contain shadow-md  rounded-lg h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
          />
        </div>
      </div>
    </section>
  );
};

export default GoogleServicesPage;
