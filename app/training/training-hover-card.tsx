import { TrainingType } from "@/types";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Badge } from "@/components/ui/badge";
import { IoCheckmarkOutline } from "react-icons/io5";
import { Button } from "@/components/ui/button";
import TrainingCard from "./training-card";

type TrainingHoverCardProps = {
  training: TrainingType;
};

const TrainingHoverCard = ({ training }: TrainingHoverCardProps) => {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <TrainingCard training={training} />
      </HoverCardTrigger>
      <HoverCardContent className="w-80 ">
        <div className="flex flex-col">
          <p className=" text-md tracking-tight font-extrabold ">
            {training.title}
          </p>
          <p className=" text-sm text-emerald-600 tracking-tight font-semibold">
            {training.duration} total hrs
          </p>
          <div className="flex items-center space-x-2 py-4">
            {training.for.map((i, j) => (
              <Badge variant="secondary" key={j}>
                {i}{" "}
              </Badge>
            ))}
          </div>
          <div className="flex flex-col pb-4">
            {training.todo.map((todo, j) => (
              <p key={j} className="flex items-center space-x-2 text-sm" ><IoCheckmarkOutline /> <span>{todo} </span>  </p>
            ))}
          </div>
        </div>
        <Button>Request this Training</Button>
      </HoverCardContent>
    </HoverCard>
  );
};

export default TrainingHoverCard;
