"use client";

import { useState } from "react";
import Image from "next/image";
import type { TrainingType } from "@/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { IoCheckmarkOutline } from "react-icons/io5";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

type TrainingCardProps = {
  training: TrainingType;
};

const TrainingCard = ({ training }: TrainingCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const DetailedView = () => (
    <div className="flex flex-col">
      <p className="text-lg font-bold mb-2">{training.title}</p>
      <p className="text-sm text-emerald-600 font-semibold mb-4">
        {training.duration} total hrs
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {training.for.map((item, index) => (
          <Badge key={index} variant="secondary">
            {item}
          </Badge>
        ))}
      </div>
      <div className="space-y-2 mb-6">
        {training.todo.map((todo, index) => (
          <p key={index} className="flex items-center text-sm">
            <IoCheckmarkOutline className="mr-2 text-emerald-500" />
            <span>{todo}</span>
          </p>
        ))}
      </div>
    </div>
  );

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-4">
        <div className="relative w-full h-48 mb-4">
          <Image
            src={training.img || "/placeholder.svg"}
            alt={training.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="rounded-md object-cover"
          />
        </div>
        <h3 className="font-bold text-lg mb-2 line-clamp-1">
          {training.title}
        </h3>
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">
          {training.description}
        </p>

        {/* Mobile: Dialog */}
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button className="w-full md:hidden">View Details</Button>
          </DialogTrigger>
          <DialogContent>
            <DetailedView />
          </DialogContent>
        </Dialog>

        {/* Desktop: HoverCard */}
        <div className="hidden md:block">
          <HoverCard>
            <HoverCardTrigger asChild>
              <Button className="w-full">View Details</Button>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <DetailedView />
            </HoverCardContent>
          </HoverCard>
        </div>
      </div>
    </div>
  );
};

export default TrainingCard;
