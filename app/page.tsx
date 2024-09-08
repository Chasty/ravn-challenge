"use client";

import { Modal } from "@/components/Modal";
import { SwitchButton } from "@/components/SwitchButton";
import { Task } from "@/components/TaskCard";
import { TaskColumn } from "@/components/TaskColumn";
import { TASKS } from "@/mock/data";
import { useState } from "react";

import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import GET_TASKS from "../graphql/queries/getTasks.graphql";
import { GetTasksQuery, Status } from "@/graphql/__generated__/graphql";

const GET_TASKS_QUERY = gql(GET_TASKS); // Parse with graphql-tag

export default function Home() {
  const { data, loading, error } = useQuery<GetTasksQuery>(GET_TASKS_QUERY);
  const tasks = data?.tasks ?? [];

  console.log({ data, loading, error });

  const tasksByStatus = (status: Status) => {
    return tasks.filter((task) => task.status === status);
  };

  return (
    <div className="flex flex-col flex-1">
      <div className="flex justify-between">
        <SwitchButton value="on" onClickOption={() => undefined} />
        <Modal />
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
