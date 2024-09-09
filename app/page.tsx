"use client";

import { Modal } from "@/components/Modal";
import { SwitchButton } from "@/components/SwitchButton";
import { TaskColumn } from "@/components/TaskColumn";
import {
  CreateTaskInput,
  CreateTaskMutation,
  CreateTaskMutationVariables,
  GetTasksQuery,
  PointEstimate,
  Status,
  TaskTag,
  UpdateTaskInput,
} from "@/graphql/__generated__/graphql";
import { useMutation, useQuery } from "@apollo/client";

import gql from "graphql-tag";
import GET_TASKS from "../graphql/queries/getTasks.graphql";
import CREATE_TASK from "../graphql/mutations/createTask.graphql";

const GET_TASKS_QUERY = gql(GET_TASKS); // Parse with graphql-tag
const CREATE_TASK_MUTATION = gql(CREATE_TASK); // Parse with graphql-tag

export default function Home() {
  const { data, loading, error, refetch } =
    useQuery<GetTasksQuery>(GET_TASKS_QUERY);
  const tasks = data?.tasks ?? [];

  const [createTask, { loading: loaadingMutation, error: errorMutation }] =
    useMutation<CreateTaskMutation, CreateTaskMutationVariables>(
      CREATE_TASK_MUTATION
    );

  console.log({ data, loading, error });

  const handleCreateTask = async (input: CreateTaskInput | UpdateTaskInput) => {
    //e.preventDefault();
    try {
      const result = await createTask({
        variables: {
          input: input as CreateTaskInput,
        },
      });

      refetch();
      console.log(result);
    } catch (err) {
      console.error("Error creating task:", err);
    }
  };

  const tasksByStatus = (status: Status) => {
    return tasks.filter((task) => task.status === status);
  };

  return (
    <div className="flex flex-col flex-1">
      <div className="flex justify-between">
        <SwitchButton value="on" onClickOption={() => undefined} />
        <Modal onSubmit={handleCreateTask} hasTrigger />
      </div>
      <div className="flex flex-1 gap-8 mt-6">
        <TaskColumn
          loading={loading}
          title="Backlog"
          tasks={tasksByStatus(Status.Backlog)}
        />
        <TaskColumn
          loading={loading}
          title="Cancelled"
          tasks={tasksByStatus(Status.Cancelled)}
        />
        <TaskColumn
          loading={loading}
          title="Done"
          tasks={tasksByStatus(Status.Done)}
        />
        <TaskColumn
          loading={loading}
          title="In Progress"
          tasks={tasksByStatus(Status.InProgress)}
        />
        <TaskColumn
          loading={loading}
          title="Todo"
          tasks={tasksByStatus(Status.Todo)}
        />
      </div>
    </div>
  );
}
