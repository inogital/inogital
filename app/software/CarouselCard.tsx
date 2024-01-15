import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ProjectsDemosTypes } from "@/types";
import Image from "next/image";
import Link from "next/link";

type CarouselCardProps = {
  pro: ProjectsDemosTypes
}

const CarouselCard = ({pro}: CarouselCardProps) => {
  return (
    <Link className="flex flex-col  rounded-md  overflow-hidden " href={pro.url}>
      {/* <div className=" rounded-md  overflow-hidden "> */}
        <Image
          src={pro.img}
          alt={""}
          width={200}
          height={200}
          className={cn(
            " w-auto object-cover transition-all hover:scale-105 aspect-square   "
          )}
        />
      {/* </div> */}
      <div className="flex items-center justify-between mt-4">
        <p className="font-semibold text-center"> {pro.project}</p>
        <Badge variant='outline'>{pro.catergory}</Badge>
      </div>
    </Link>
  );
};

export default CarouselCard;
