
import { TrainingType } from "@/types";
import Image from "next/image";
import { ScrollArea } from "@/components/ui/scroll-area"

type TrainingCardProps = {
  training: TrainingType;
};

const TrainingCard = ({ training }: TrainingCardProps) => {
  return (
    <div className=" p-3  ">
      <div className=" rounded-md  overflow-hidden ">
        <Image
          src={training.img}
          alt={training.title}
          width={300}
          height={200}
          className=" w-full h-full object-contain transition-all hover:scale-105 "
        />
      </div>
      <ScrollArea className="h-24 ">
      <div className="flex flex-col items-start justify-start text-slate-600">
        <p className="  tracking-tight font-extrabold ">
          {training.title}
        </p>
        <p className=" text-sm">{training.description}</p>
      </div>
      </ScrollArea>
    </div>
  );
};

export default TrainingCard;
