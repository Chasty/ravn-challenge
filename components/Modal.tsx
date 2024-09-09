"use client";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogOverlay,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Tag } from "./Tag";
import { Button as DSButton } from "./Button";
import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Icon } from "./Icon";
import { Calendar } from "./ui/calendar";
import { ChangeEvent, useCallback, useEffect, useState } from "react";
import {
  CreateTaskInput,
  Status,
  UpdateTaskInput,
} from "@/graphql/__generated__/graphql";
import { format } from "date-fns";
import { Assignee, ASSIGNESS, LABELS, Point, POINTS, TagLabel } from "@/models";
import { Avatar } from "./Avatar";

export type DefaultFormValues = {
  taskTitle?: string;
  selectedAssignee?: Assignee;
  selectedEstimate?: Point;
  defaultTags?: TagLabel[];
  selectedDueDate?: Date;
};

export type ModalProps = {
  onSubmit: (input: CreateTaskInput | UpdateTaskInput) => void;
  openModal?: boolean;
  hasTrigger?: boolean;
  onOpenChange?: (open: boolean) => void;
  defaultValues?: DefaultFormValues;
};

export function Modal({
  openModal,
  hasTrigger,
  defaultValues,
  onSubmit,
  onOpenChange,
}: ModalProps) {
  const [taskTitle, setTaskTitle] = useState("");
  const [isAssigneeOpen, setIsAssigneeOpen] = useState(false);

  const [selectedAssignee, setSelectedAssignee] = useState<Assignee | null>(
    null
  );

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isEstimeOpen, setIsEstimeOpen] = useState(false);
  const [selectedEstimate, setSelectedEstimate] = useState<Point | null>(null);

  const [isDateOpen, setIsDateOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);

  const [tags, setTags] = useState<TagLabel[]>(LABELS);
  const [isTagsOpen, setIsTagsOpen] = useState(false);

  const selectedTags = tags.filter((t) => t.isChecked);

  const handleAssigneeSelect = useCallback((assignee: Assignee) => {
    setSelectedAssignee(assignee);
    setIsAssigneeOpen(false);
  }, []);

  const handleEstimateSelect = useCallback((estimate: Point) => {
    setSelectedEstimate(estimate);
    setIsEstimeOpen(false);
  }, []);

  const handleDateSelect = useCallback((date: Date | undefined) => {
    setSelectedDate(date);
    setIsDateOpen(false);
  }, []);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTaskTitle(e.target.value);
  };

  const handleLabelSelect = useCallback(
    (index: number) => {
      const prevData = [...tags];

      prevData[index].isChecked = !prevData[index].isChecked;

      setTags(prevData);
      setTimeout(() => {
        setIsTagsOpen(false);
      }, 100);
    },
    [tags]
  );

  useEffect(() => {
    setIsModalOpen(Boolean(openModal));
  }, [openModal]);

  useEffect(() => {
    if (defaultValues?.taskTitle) {
      setTaskTitle(defaultValues.taskTitle);
    }
    if (defaultValues?.selectedAssignee) {
      setSelectedAssignee(defaultValues.selectedAssignee);
    }
    if (defaultValues?.selectedEstimate) {
      setSelectedEstimate(defaultValues.selectedEstimate);
    }
    if (defaultValues?.defaultTags) {
      setTags(defaultValues.defaultTags);
    }
    if (defaultValues?.selectedDueDate) {
      setSelectedDate(defaultValues.selectedDueDate);
    }
  }, [defaultValues]);

  const clearAll = (open: boolean) => {
    setSelectedAssignee(null);
    setSelectedEstimate(null);
    setSelectedDate(undefined);
    setTags([...LABELS].map((m) => ({ ...m, isChecked: false })));
    setIsModalOpen(open);
    setTaskTitle("");
    onOpenChange?.(open);
  };

  const isAllValid =
    taskTitle.length > 0 &&
    selectedAssignee &&
    selectedEstimate &&
    selectedDate &&
    selectedTags.length > 0;

  return (
    <Dialog open={isModalOpen} onOpenChange={clearAll}>
      {hasTrigger && (
        <DialogTrigger asChild>
          <DSButton typeStyle="primary" icon="add" iconClassName="px-1" />
        </DialogTrigger>
      )}
      <DialogOverlay className="bg-[#00000090]" /> {/* Add this line */}
      <DialogContent className="sm:max-w-[700px] bg-neutral-3">
        <Input
          value={taskTitle}
          className="border-0 font-sans !text-body-xl-bold text-neutral-2 focus:border-neutral-2"
          placeholder="Task Title"
          onChange={onChange}
        />

        <div className="grid grid-cols-4 gap-4 py-4">
          <Popover open={isEstimeOpen} onOpenChange={setIsEstimeOpen}>
            <PopoverTrigger asChild>
              <Button variant="ghost">
                <Tag
                  icon="points"
                  style="solid"
                  type="general"
                  text={selectedEstimate ? selectedEstimate.points : "Estimate"}
                />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-40 bg-neutral-4">
              <div className="space-y-2">
                {POINTS.map((point) => (
                  <Button
                    key={`point-${point.id}`}
                    variant="ghost"
                    className="w-full justify-start text-neutral-1"
                    onClick={() => {
                      handleEstimateSelect(point);
                    }}
                  >
                    <Icon name="points" />
                    <span className="ml-4">{point.points}</span>
                  </Button>
                ))}
              </div>
            </PopoverContent>
          </Popover>

          <Popover open={isAssigneeOpen} onOpenChange={setIsAssigneeOpen}>
            <PopoverTrigger asChild>
              <Button variant="ghost">
                <Tag
                  avatar={!!selectedAssignee}
                  icon={selectedAssignee ? undefined : "user"}
                  style="solid"
                  type="general"
                  text={
                    selectedAssignee ? selectedAssignee.fullName : "Assignee"
                  }
                  className="px-8"
                />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-60 bg-neutral-4">
              <div className="space-y-2">
                {ASSIGNESS.map((assignee) => (
                  <Button
                    key={assignee.id}
                    variant="ghost"
                    className="w-full justify-start text-neutral-1"
                    onClick={() => {
                      handleAssigneeSelect(assignee);
                    }}
                  >
                    <Avatar className="h-5 w-6 mr-2" />
                    {assignee.fullName}
                  </Button>
                ))}
              </div>
            </PopoverContent>
          </Popover>

          <Popover open={isTagsOpen} onOpenChange={setIsTagsOpen}>
            <PopoverTrigger asChild>
              <Button variant="ghost">
                <Tag icon="label" style="solid" type="general" text="Label" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-60 bg-neutral-4">
              <div className="space-y-2">
                {tags.map((tag, idx) => (
                  <Button
                    key={`tag-${tag.id}`}
                    variant="ghost"
                    className="w-full justify-start text-neutral-1 hover:bg-transparent hover:text-white cursor-pointer"
                    onClick={() => {
                      //setSelectedAssignee(assignee)
                      handleLabelSelect(idx);
                    }}
                  >
                    <Icon name={tag.isChecked ? "check" : "uncheck"} />
                    <span className="ml-4">{tag.label}</span>
                  </Button>
                ))}
              </div>
            </PopoverContent>
          </Popover>

          <Popover open={isDateOpen} onOpenChange={setIsDateOpen}>
            <PopoverTrigger asChild>
              <Button variant="ghost">
                <Tag
                  icon="date"
                  style="solid"
                  type="general"
                  text={
                    selectedDate
                      ? format(selectedDate, "MMM d, yyyy")
                      : "Due date"
                  }
                />
              </Button>
            </PopoverTrigger>

            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={handleDateSelect}
                initialFocus
                className="bg-neutral-4 text-neutral-1"
              />
            </PopoverContent>
          </Popover>
        </div>

        <div className="grid grid-cols-4 gap-4 py-4">
          <div className="col-start-3 flex flex-col gap-2">
            {selectedTags.length > 0 ? (
              <>
                <span className="font-sans text-body-m-bold text-neutral-2 text-center">
                  Selected Tags
                </span>

                {selectedTags.map((tag, idx) => (
                  <Tag
                    key={`check-${idx}`}
                    style="solid"
                    type="general"
                    text={tag.label}
                  />
                ))}
              </>
            ) : null}
          </div>
        </div>

        <DialogFooter className="sm:justify-end gap-4">
          <DialogClose asChild>
            <DSButton state="default" typeStyle="secondary" text="Cancel" />
          </DialogClose>

          <DSButton
            state={isAllValid ? "default" : "disable"}
            typeStyle="primary"
            text={!openModal ? "Create" : "Update"}
            onPress={() => {
              if (isAllValid) {
                setIsModalOpen(false);
                const inputToSubmit: CreateTaskInput = {
                  assigneeId: selectedAssignee.id,
                  dueDate: selectedDate,
                  name: taskTitle,
                  pointEstimate: selectedEstimate.value,
                  tags: selectedTags.map((tag) => tag.value),
                  status: Status.Backlog,
                };

                if (!openModal) {
                  // should create here
                  onSubmit(inputToSubmit);
                } else {
                  // should edit here
                  onSubmit(inputToSubmit);
                }
              }
            }}
          />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
