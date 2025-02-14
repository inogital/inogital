import type { IconType } from "react-icons"

interface IconProps {
  IconComponent: IconType
  textColor: string
}

export const Icon = ({ IconComponent, textColor }: IconProps) => (
  <IconComponent className={`text-${textColor}} w-12 h-12`} />
)

