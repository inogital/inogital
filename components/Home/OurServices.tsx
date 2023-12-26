import Link from "next/link";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Badge } from "@/components/ui/badge";
import { Icon } from "../common/IconComponent";
import { IconType } from "react-icons";
import { solutions } from "@/components/common/data";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Container from "../common/Container";

type ServiceCardprops = {
  solutionName: string;
  bgColor: string;
  textColor: string;
  longDesc: string
  linkText: string;
  linkUrl: string;
  icon: IconType;
};

const OurServicesCard = ({
  solutionName,
  bgColor,
  textColor,
  longDesc,
  linkText,
  linkUrl,
  icon,
}: ServiceCardprops) => (
  <Card className={` border-${bgColor} bg-slate-900 rounded-3xl`}>
     <CardHeader>
        <CardTitle>
        <Badge >{solutionName}</Badge>
        </CardTitle>
        
      </CardHeader>
    <CardContent> 
    
    <div className="flex justify-center">
      <Icon IconComponent={icon}  textColor={textColor} />
    </div>

    <p className="text-lg font-normal line-clamp-6 text-slate-400">{longDesc}</p>
    <Link
      href={linkUrl}
      title={linkText}
      className={` justify-center  inline-flex items-center text-slate-400 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center`}
      role="button"
    >
      {linkText}
      <HiArrowNarrowRight />
    </Link>
  
  </CardContent>
  </Card>
);

const OurServices = () => (
  <Container >
    <div className="max-w-2xl mx-auto text-center mt-12">
      <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl ">
        Our Solutions
      </h2>
      <p className="mt-4 text-base font-normal text-gray-500 sm:text-xl ">
        Equipped with expertise and dedication to facilitate the expansion of
        our client&apos;s businesses!
      </p>
    </div>
    <div className="container">

  
    <div className="grid grid-cols-1  text-center gap-10 py-12 sm:grid-cols-2 md:grid-cols-3  ">
      {solutions.map((sol) => (
        <OurServicesCard
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
  </Container>
);

export default OurServices;
