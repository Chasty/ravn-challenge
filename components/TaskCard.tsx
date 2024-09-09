import {
  CreateTaskInput,
  PointEstimate,
  Task,
  TaskTag,
  UpdateTaskInput,
  UpdateTaskMutation,
  UpdateTaskMutationVariables,
} from "@/graphql/__generated__/graphql";
import { Icon } from "./Icon";
import { Tag, TypeTag } from "./Tag";
import Image from "next/image";
import placeholder from "../assets/placeholder.png";
import { differenceInDays, format, isToday, isYesterday } from "date-fns";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";
import { DefaultFormValues, Modal } from "./Modal";
import { useState } from "react";
import { ASSIGNESS, LABELS, POINTS } from "@/models";

import gql from "graphql-tag";
import UPDATE_TASK from "../graphql/mutations/updateTask.graphql";
import { useMutation } from "@apollo/client";
const UPDATE_TASK_MUTATION = gql(UPDATE_TASK); // Parse with graphql-tag

export type TaskTagValues = (typeof TaskTag)[keyof typeof TaskTag];
export type PointEstimateValues =
  (typeof PointEstimate)[keyof typeof PointEstimate];

const tagMapping: Record<TaskTagValues, TypeTag> = {
  ANDROID: "yellow",
  IOS: "green",
  NODE_JS: "general",
  RAILS: "red",
  REACT: "blue",
};

export const pointsMapping: Record<PointEstimateValues, string> = {
  ZERO: "0 Points",
  ONE: "1 Point",
  TWO: "2 Points",
  FOUR: "4 Points",
  EIGHT: "8 Points",
};

const timeIndicator = (dueDate: Date): { type: TypeTag; text: string } => {
  const currentDate = new Date();

  const isDueToday = isToday(dueDate);
  const isDueYesterday = isYesterday(dueDate);
  const diffInDays = differenceInDays(dueDate, currentDate);

  const getType = () => {
    if (dueDate >= currentDate) {
      if (isDueToday) {
        return "general";
      }

      if (diffInDays <= 2) {
        return "yellow";
      }

      return "general";
    }

    return "red";
  };

  const getText = () => {
    if (dueDate >= currentDate) {
      if (isDueToday) {
        return "TODAY";
      }

      return format(dueDate, "dd MMM, yyyy");
    }

    if (isDueYesterday) {
      return "YESTERDAY";
    }

    return format(dueDate, "dd MMM, yyyy");
  };

  return {
    type: getType(),
    text: getText().toUpperCase(),
  };
};

export const TaskCard = (props: Task) => {
  const { name, pointEstimate, tags, dueDate } = props;

  const [updateTask, { loading, error }] = useMutation<
    UpdateTaskMutation,
    UpdateTaskMutationVariables
  >(UPDATE_TASK_MUTATION);

  const { text, type } = timeIndicator(new Date(dueDate));
  const [openModal, setOpenModal] = useState(false);
  const [defaultValues, setDefaultValues] = useState<DefaultFormValues>();

  const handleUpdateTask = async (input: CreateTaskInput | UpdateTaskInput) => {
    //e.preventDefault();
    try {
      const result = await updateTask({
        variables: {
          input: input as UpdateTaskInput,
        },
      });

      //trigger refetch on page.tsx
      console.log(result);
    } catch (err) {
      console.error("Error creating task:", err);
    }
  };

  const onEdit = () => {
    console.log(props);
    const values: DefaultFormValues = {
      selectedAssignee: ASSIGNESS.find((a) => a.id === props.assignee?.id),
      selectedEstimate: POINTS.find((p) => p.value === props.pointEstimate),
      taskTitle: props.name,
      defaultTags: LABELS.map((l) => ({
        ...l,
        isChecked: props.tags.includes(l.value),
      })),
      selectedDueDate: new Date(props.dueDate),
    };
    console.log(values);
    setDefaultValues(values);
    setOpenModal(true);
  };

  const onDelete = () => {
    //setOpenModal(true);
  };

  return (
    <div className="flex flex-col p-4 rounded-lg gap-4 bg-neutral-4">
      <Modal
        onSubmit={(input) =>
          //TODO: when finishing editing the edit botton is not longer opening
          handleUpdateTask({ ...input, id: props.id, status: props.status })
        }
        openModal={openModal}
        onOpenChange={(open) => setOpenModal(open)}
        defaultValues={defaultValues}
      />
      <div className="flex h-fit items-center">
        <p className="flex-1 font-sans text-body-l-bold text-neutral-1">
          {name}
        </p>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="ghost" className="px-0 hover:bg-transparent">
              <Icon name="dots" />
            </Button>
          </PopoverTrigger>

          <PopoverContent
            align="end"
            className="w-auto bg-neutral-3 flex flex-col gap-4"
          >
            <Button
              variant="ghost"
              className="flex justify-start text-neutral-1"
              onClick={onEdit}
            >
              <Icon name="pen" />
              <span className="font-sans ml-4 text-body-m">Edit</span>
            </Button>

            <Button
              variant="ghost"
              className="flex justify-start text-neutral-1"
            >
              <Icon name="trash" />
              <span className="font-sans ml-4 text-body-m">Delete</span>
            </Button>
          </PopoverContent>
        </Popover>
      </div>
      <div className="flex h-fit items-center">
        <p className="flex-1 font-sans text-body-m-bold text-neutral-1">
          {pointsMapping[pointEstimate]}
        </p>
        <Tag type={type} style="solid" icon="clock" text={text} />
      </div>
      <div className="flex h-fit gap-2 overflow-hidden overflow-x-auto">
        {tags.map((tag, idx) => (
          <Tag
            key={`${tag}-${idx}`}
            style="solid"
            text={tag}
            type={tagMapping[tag]}
          />
        ))}
      </div>

      <div className="flex h-fit items-center">
        <div className="flex flex-1">
          <div className="w-8 h-8 rounded-full bg-white">
            <Image
              src={placeholder.src}
              className="rounded-full"
              alt="no"
              width={"32"}
              height={"32"}
            />
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <Icon name="clip" />

          <div className="flex gap-1 items-center">
            <span className="flex-1 font-sans text-body-m text-neutral-1">
              5
            </span>
            <Icon name="taskline" />
          </div>

          <div className="flex gap-1 items-center">
            <span className="flex-1 font-sans text-body-m text-neutral-1">
              3
            </span>
            <Icon name="comment" />
          </div>
        </div>
      </div>

      {/* <div></div> */}
    </div>
  );
};
