import RequestForm from "./request-form";

const CTA = () => {
  return (
    <div className="container py-8 sm:py-16">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ">
        Let&apos;s embrace innovation, enhance efficiency, and drive success
        together
      </h2>
      <p className="mb-8 font-light text-gray-500 sm:text-xl ">
        inOgital offers a comprehensive suite of services designed to empower
        educational institutions, NPOs, and SMEs with cutting-edge technology
        solutions. Contact us today and let&apos;s transform your
        organization&apos;s tech landscape!
      </p>
      <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
        <RequestForm />
      </div>
    </div>
  );
};

export default CTA;
