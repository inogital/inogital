import { IconType } from "react-icons";


type IconProps = {
    IconComponent: IconType;
    bgColor?: string;
    textColor: string;
  };
  
  export function Icon({ IconComponent, bgColor, textColor }: IconProps) {
    return (
      <div className={`p-3 ${bgColor} ${textColor} rounded-xl`}>
        <IconComponent size={28} />
      </div>
    );
  }