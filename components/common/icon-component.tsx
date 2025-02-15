import type { IconType } from "react-icons";
import { cn } from "@/lib/utils"; 

interface IconProps {
  IconComponent: IconType;
  textColor: string;
  className?: string;
}

export const Icon = ({ IconComponent, textColor, className }: IconProps) => (
  <IconComponent className={cn(`${textColor}`, className)} />
);

