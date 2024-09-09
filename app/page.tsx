"use client";

import { Modal } from "@/components/Modal";
import { SwitchButton } from "@/components/SwitchButton";
import { TaskColumn } from "@/components/TaskColumn";
import {
  CreateTaskInput,
  CreateTaskMutation,
  CreateTaskMutationVariables,
  GetTasksQuery,
  GetTasksQueryVariables,
  Status,
  UpdateTaskInput,
} from "@/graphql/__generated__/graphql";
import { CREATE_TASK_MUTATION } from "@/graphql/mutations";
import { GET_TASKS_QUERY } from "@/graphql/queries";
import useDebounce from "@/hooks/useDebounce";
import { useSearch } from "@/providers/search.provider";
import { useMutation, useQuery } from "@apollo/client";

export default function Home() {
  const { search } = useSearch();
  const debouncedSearch = useDebounce(search, 500);

  const { data, loading, refetch } = useQuery<
    GetTasksQuery,
    GetTasksQueryVariables
  >(GET_TASKS_QUERY, {
    variables: {
      input: search
        ? {
            name: debouncedSearch,
            // assigneeId: search,
            // dueDate: search,
            // ownerId: search,
          }
        : {},
    },
  });

  const tasks = data?.tasks ?? [];

  //const [createTask, { loading: loaadingMutation, error: errorMutation }]
  const [createTask] = useMutation<
    CreateTaskMutation,
    CreateTaskMutationVariables
  >(CREATE_TASK_MUTATION);

  const handleCreateTask = async (input: CreateTaskInput | UpdateTaskInput) => {
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
