import Image from "next/image";

const OurPartners = () => {
  return (
    <div className="py-8 lg:py-16 mx-auto max-w-(--breakpoint-xl) px-4">
      <h2 className="mb-8 lg:mb-16 text-3xl font-extrabold tracking-tight leading-tight text-center text-gray-900 ">
        You are in good company
      </h2>
      <div className="grid grid-cols-2 gap-8 sm:gap-12 md:grid-cols-3 bg-slate-100 p-4">
        <Image
          src="/img/partner/group4.png"
          width={200}
          height={200}
          alt="google"
        />
        <Image
          src="/img/partner/group5.png"
          width={200}
          height={200}
          alt="google"
        />
        <Image
          src="/img/partner/group6.png"
          width={200}
          height={200}
          alt="google"
        />
      </div>
    </div>
  );
};

export default OurPartners;
