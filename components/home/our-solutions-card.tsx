import Link from "next/link";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Badge } from "@/components/ui/badge";
import type { IconType } from "react-icons";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "../common/icon-component";
import { cn } from "@/lib/utils"; // Ensure correct import path

type ServiceCardProps = {
  solutionName: string;
  borderColor: string
  bgColor: string;
  textColor: string;
  longDesc: string;
  linkText: string;
  linkUrl: string;
  icon: IconType;
};



export const OurSolutionsCard = ({
    solutionName,
    borderColor,
    bgColor,
    textColor,
    longDesc,
    linkText,
    linkUrl,
    icon,
  }: ServiceCardProps) => {
    return (
      <Card
        className={cn(
          `rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden`,
          `${borderColor}` 
        )}
      >
        <CardHeader className="pb-4">
          <CardTitle>
            <Badge
              variant="secondary"
              className={cn("text-sm font-semibold px-3 py-1", `${textColor}`)}
            >
              {solutionName}
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center space-y-4">
          <div className={cn("p-4 rounded-full bg-opacity-10", `${bgColor}`)}>
            <Icon IconComponent={icon} textColor={textColor} className="w-12 h-12" />
          </div>
          <p className="text-base font-normal line-clamp-4 text-slate-600 text-center">
            {longDesc}
          </p>
          <Link
            href={linkUrl}
            title={linkText}
            className={cn(
              "mt-4 inline-flex items-center justify-center font-medium rounded-lg text-sm px-5 py-2.5 transition-colors duration-300 ease-in-out",
              `${textColor}`,
            )}
            role="button"
          >
            {linkText}
            <HiArrowNarrowRight className="ml-2" />
          </Link>
        </CardContent>
      </Card>
    );
  };