import Link from "next/link";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Badge } from "@/components/ui/badge";
import type { IconType } from "react-icons";
import { solutions } from "@/components/common/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "../common/icon-component";

type ServiceCardProps = {
  solutionName: string;
  bgColor: string;
  textColor: string;
  longDesc: string;
  linkText: string;
  linkUrl: string;
  icon: IconType;
};

const OurSolutionsCard = ({
  solutionName,
  bgColor,
  textColor,
  longDesc,
  linkText,
  linkUrl,
  icon,
}: ServiceCardProps) => {
  return (
    <Card
      className={`border-${bgColor}  rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden`}
    >
      <CardHeader className="pb-4">
        <CardTitle>
          <Badge
            variant="secondary"
            className="text-sm font-semibold px-3 py-1"
          >
            {solutionName}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center space-y-4">
        <div className={`p-4 rounded-full bg-${bgColor} bg-opacity-10`}>
          <Icon IconComponent={icon} textColor={textColor} />
        </div>
        <p className="text-base font-normal line-clamp-4 text-slate-600 text-center">
          {longDesc}
        </p>
        <Link
          href={linkUrl}
          title={linkText}
          className={`mt-4 inline-flex items-center justify-center text-${textColor} hover:text-${bgColor} focus:ring-4 focus:ring-${bgColor} focus:ring-opacity-50 font-medium rounded-lg text-sm px-5 py-2.5 transition-colors duration-300 ease-in-out`}
          role="button"
        >
          {linkText}
          <HiArrowNarrowRight className="ml-2" />
        </Link>
      </CardContent>
    </Card>
  );
};

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
