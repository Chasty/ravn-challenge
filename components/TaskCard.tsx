import {
  DeleteTaskInput,
  DeleteTaskMutation,
  DeleteTaskMutationVariables,
  PointEstimate,
  TaskTag,
  UpdateTaskInput,
  UpdateTaskMutation,
  UpdateTaskMutationVariables,
} from "@/graphql/__generated__/graphql";
import { Icon } from "./Icon";
import { Tag, TypeTag } from "./Tag";
import Image from "next/image";
import placeholder from "../assets/placeholder.png";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";
import { DefaultFormValues, Modal } from "./Modal";
import { useState } from "react";
import { ASSIGNESS, LABELS, POINTS } from "@/models";
import { useMutation } from "@apollo/client";
import { timeIndicator } from "@/lib/utils";
import { Task } from "./TaskColumn";
import {
  DELETE_TASK_MUTATION,
  UPDATE_TASK_MUTATION,
} from "@/graphql/mutations";
import { Alert } from "./Alert";

export type TaskTagValues = (typeof TaskTag)[keyof typeof TaskTag];
export type PointEstimateValues =
  (typeof PointEstimate)[keyof typeof PointEstimate];

const tagTypeMapping: Record<TaskTagValues, TypeTag> = {
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

export const TaskCard = (props: Task) => {
  const { name, pointEstimate, tags, dueDate } = props;

  const [updateTask] = useMutation<
    UpdateTaskMutation,
    UpdateTaskMutationVariables
  >(UPDATE_TASK_MUTATION);

  const [deleteTask] = useMutation<
    DeleteTaskMutation,
    DeleteTaskMutationVariables
  >(DELETE_TASK_MUTATION, { refetchQueries: ["GetTasks"] });

  const { text, type } = timeIndicator(new Date(dueDate));
  const [openModal, setOpenModal] = useState(false);
  const [defaultValues, setDefaultValues] = useState<DefaultFormValues>();
  const [showAlert, setShowAlert] = useState(false);

  const handleUpdateTask = async (input: UpdateTaskInput) => {
    try {
      const result = await updateTask({
        variables: {
          input,
        },
      });

      //trigger refetch on page.tsx
      console.log(result);
    } catch (err) {
      console.error("Error creating task:", err);
    }
  };

  const handleDeleteTask = async (input: DeleteTaskInput) => {
    try {
      const result = await deleteTask({
        variables: {
          input: input,
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
    setShowAlert(true);
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
      <Alert
        open={showAlert}
        onOpenChange={(open) => setShowAlert(open)}
        onCofirm={() => {
          handleDeleteTask({ id: props.id });
          setShowAlert(false);
        }}
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
              onClick={onDelete}
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
            type={tagTypeMapping[tag]}
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
