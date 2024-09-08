"use client";

import { Button } from "@/components/Button";
import { SwitchButton } from "@/components/SwitchButton";
import { Task } from "@/components/TaskCard";
import { TaskColumn } from "@/components/TaskColumn";
import { useState } from "react";

export default function Home() {
  const [tasks] = useState<{
    working: Task[];
    inProgress: Task[];
    completed: Task[];
  }>({
    working: [
      {
        title: "Slack",
        points: 4,
        date: "",
        dateType: "TODAY",
        platforms: ["IOS APP", "ANDROID"],
        avatarUrl: "/placeholder.svg?height=24&width=24",
      },
      {
        title: "Google",
        points: 4,
        date: "6 JULY, 2020",
        dateType: "6 JULY, 2020",
        platforms: ["IOS APP", "ANDROID"],
        avatarUrl: "/placeholder.svg?height=24&width=24",
      },
    ],
    inProgress: [
      {
        title: "Twitter",
        points: 1,
        date: "",
        dateType: "YESTERDAY",
        platforms: ["IOS APP", "ANDROID"],
        avatarUrl: "/placeholder.svg?height=24&width=24",
      },
      {
        title: "Maxxis Tyres",
        points: 4,
        date: "6 JULY, 2020",
        dateType: "6 JULY, 2020",
        platforms: ["IOS APP", "ANDROID"],
        avatarUrl: "/placeholder.svg?height=24&width=24",
      },
      {
        title: "Samsung",
        points: 4,
        date: "6 JULY, 2020",
        dateType: "6 JULY, 2020",
        platforms: ["IOS APP", "ANDROID"],
        avatarUrl: "/placeholder.svg?height=24&width=24",
      },
      {
        title: "Samsung2",
        points: 4,
        date: "6 JULY, 2020",
        dateType: "6 JULY, 2020",
        platforms: ["IOS APP", "ANDROID"],
        avatarUrl: "/placeholder.svg?height=24&width=24",
      },
      {
        title: "Samsung2",
        points: 4,
        date: "6 JULY, 2020",
        dateType: "6 JULY, 2020",
        platforms: ["IOS APP", "ANDROID"],
        avatarUrl: "/placeholder.svg?height=24&width=24",
      },
    ],
    completed: [
      {
        title: "Tesla",
        points: 4,
        date: "",
        dateType: "YESTERDAY",
        platforms: ["IOS APP", "ANDROID"],
        avatarUrl: "/placeholder.svg?height=24&width=24",
      },
      {
        title: "Slack",
        points: 4,
        date: "",
        dateType: "TODAY",
        platforms: ["IOS APP", "ANDROID"],
        avatarUrl: "/placeholder.svg?height=24&width=24",
      },
    ],
  });

  return (
    <div className="flex flex-col flex-1">
      <div className="flex justify-between">
        <SwitchButton value="on" onClickOption={() => undefined} />
        <Button type="primary" icon="add" />
      </div>
      <div className="flex flex-1 gap-8 mt-6">
        <TaskColumn title="Working" tasks={tasks.working} />
        <TaskColumn title="In Progress" tasks={tasks.inProgress} />
        <TaskColumn title="Completed" tasks={tasks.completed} />
      </div>
    </div>
  );
}
