"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tag } from "./Tag";
import { Button as DSButton } from "./Button";
import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Icon } from "./Icon";
import { Calendar } from "./ui/calendar";
import { useState } from "react";

type Assignee = {
  id: string;
  name: string;
  image: string;
};

type Point = {
  id: string;
  points: string;
  image: string;
};

const points: Point[] = [
  {
    id: "1",
    points: "0 points",
    image: "/placeholder.svg?height=32&width=32",
  },
  {
    id: "2",
    points: "1 points",
    image: "/placeholder.svg?height=32&width=32",
  },
  {
    id: "3",
    points: "2 points",
    image: "/placeholder.svg?height=32&width=32",
  },
  {
    id: "4",
    points: "4 points",
    image: "/placeholder.svg?height=32&width=32",
  },
  {
    id: "5",
    points: "8 points",
    image: "/placeholder.svg?height=32&width=32",
  },
];

const assignees: Assignee[] = [
  {
    id: "1",
    name: "Jerome Bell",
    image: "/placeholder.svg?height=32&width=32",
  },
  { id: "2", name: "Robert Fox", image: "/placeholder.svg?height=32&width=32" },
  {
    id: "3",
    name: "Marvin McKinney",
    image: "/placeholder.svg?height=32&width=32",
  },
  {
    id: "4",
    name: "Jone Cooper",
    image: "/placeholder.svg?height=32&width=32",
  },
  {
    id: "5",
    name: "Ralph Edwards",
    image: "/placeholder.svg?height=32&width=32",
  },
];

export function Modal() {
  const [date, setDate] = useState<Date>();

  return (
    <Dialog>
      <DialogTrigger asChild>
        {/* <Button variant="outline">Edit Profile</Button> */}
        <DSButton typeStyle="primary" icon="add" />
      </DialogTrigger>
      <DialogOverlay className="bg-[#00000090]" /> {/* Add this line */}
      <DialogContent className="sm:max-w-[660px] bg-neutral-3">
        <Input
          value=""
          className="border-0 font-sans !text-body-xl-bold text-neutral-2"
          placeholder="Task Title"
        />
        <div className="grid grid-cols-4 gap-4 py-4">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="ghost">
                <Tag
                  icon="points"
                  style="solid"
                  type="general"
                  text="Estimate"
                />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-40 bg-neutral-4">
              <div className="space-y-2">
                {points.map((point) => (
                  <Button
                    key={`point-${point.id}`}
                    variant="ghost"
                    className="w-full justify-start text-neutral-1"
                    onClick={() => {
                      //setSelectedAssignee(assignee)
                    }}
                  >
                    <div className="h-6 w-6 mr-2 rounded-full bg-primary-3"></div>
                    {point.points}
                  </Button>
                ))}
              </div>
            </PopoverContent>
          </Popover>

          <Popover>
            <PopoverTrigger asChild>
              <Button variant="ghost">
                <Tag icon="user" style="solid" type="general" text="Asignee" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-60 bg-neutral-4">
              <div className="space-y-2">
                {assignees.map((assignee) => (
                  <Button
                    key={assignee.id}
                    variant="ghost"
                    className="w-full justify-start text-neutral-1"
                    onClick={() => {
                      //setSelectedAssignee(assignee)
                    }}
                  >
                    <div className="h-6 w-6 mr-2 rounded-full bg-primary-3"></div>
                    {assignee.name}
                  </Button>
                ))}
              </div>
            </PopoverContent>
          </Popover>

          <Popover>
            <PopoverTrigger asChild>
              <Button variant="ghost">
                <Tag icon="label" style="solid" type="general" text="Label" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-60">
              <div className="space-y-2">
                {assignees.map((assignee) => (
                  <Button
                    key={assignee.id}
                    variant="ghost"
                    className="w-full justify-start"
                    onClick={() => {
                      //setSelectedAssignee(assignee)
                    }}
                  >
                    <div className="h-6 w-6 mr-2 bg-primary-3"></div>
                    {assignee.name}
                  </Button>
                ))}
              </div>
            </PopoverContent>
          </Popover>

          <Popover>
            <PopoverTrigger asChild>
              <Button variant="ghost">
                <Tag icon="date" style="solid" type="general" text="Due Date" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
        <DialogFooter className="sm:justify-end gap-4">
          <DSButton state="default" typeStyle="secondary" text="Cancel" />
          <DSButton state="disable" typeStyle="primary" text="Create" />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
