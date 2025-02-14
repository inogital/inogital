import type { IconType } from "react-icons"

interface IconProps {
  IconComponent: IconType
  textColor: string
  className?: string
}

export const Icon = ({ IconComponent, textColor, className }: IconProps) => (
  <IconComponent className={`text-${textColor} ${className || ""}`} />
)

