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
import {
  CreateTaskInput,
  Status,
  UpdateTaskInput,
} from "@/graphql/__generated__/graphql";
import { format } from "date-fns";
import { Assignee, ASSIGNESS, Point, POINTS, TagLabel } from "@/models";
import { Avatar } from "./Avatar";
import { useModalForm } from "@/hooks/useModalForm";

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
  const {
    isModalOpen,
    clearAll,
    taskTitle,
    onChange,
    isEstimeOpen,
    setIsEstimeOpen,
    selectedEstimate,
    handleEstimateSelect,
    isAssigneeOpen,
    setIsAssigneeOpen,
    selectedAssignee,
    handleAssigneeSelect,
    isTagsOpen,
    setIsTagsOpen,
    tags,
    handleLabelSelect,
    selectedTags,
    isDateOpen,
    setIsDateOpen,
    selectedDate,
    handleDateSelect,
    isAllValid,
    setIsModalOpen,
  } = useModalForm({ onOpenChange, openModal, defaultValues });

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
              if (isAllValid && selectedAssignee && selectedEstimate) {
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
