
import { solutions } from "@/components/common/data";
import { OurSolutionsCard } from "./our-solutions-card";



const OurSolutions = () => (
  <section className="py-16 lg:py-32 bg-gradient-to-b from-white to-slate-50">
    <div className="container mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-5xl mb-4">
          Our Solutions
        </h2>
        <p className="text-xl font-normal text-gray-600">
          Equipped with expertise and dedication to facilitate the expansion of
          our client&apos;s businesses!
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
        {solutions.map((sol) => (
          <OurSolutionsCard
            key={sol.id}
            icon={sol.icon}
            solutionName={sol.name}
            borderColor={sol.borderColor}
            bgColor={sol.bgColor}
            textColor={sol.textColor}
            longDesc={sol.longDesc}
            linkText="View more"
            linkUrl={sol.href}
          />
        ))}
      </div>
    </div>
  </section>
);

export default OurSolutions;
