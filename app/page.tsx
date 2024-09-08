"use client";

import { Modal } from "@/components/Modal";
import { SwitchButton } from "@/components/SwitchButton";
import { Task } from "@/components/TaskCard";
import { TaskColumn } from "@/components/TaskColumn";
import { TASKS } from "@/mock/data";
import { useState } from "react";

export default function Home() {
  const [tasks] = useState<{
    working: Task[];
    inProgress: Task[];
    completed: Task[];
  }>(TASKS);

  return (
    <div className="flex flex-col flex-1">
      <div className="flex justify-between">
        <SwitchButton value="on" onClickOption={() => undefined} />
        <Modal />
      </div>
      <div className="flex flex-1 gap-8 mt-6">
        <TaskColumn title="Working" tasks={tasks.working} />
        <TaskColumn title="In Progress" tasks={tasks.inProgress} />
        <TaskColumn title="Completed" tasks={tasks.completed} />
      </div>
    </div>
  );
}
