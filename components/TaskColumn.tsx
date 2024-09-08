import { TaskCard } from "./TaskCard";

interface Task {
  title: string;
  points: number;
  date: string;
  dateType: "TODAY" | "YESTERDAY" | string;
  platforms: string[];
  avatarUrl: string;
}

interface TaskColumnProps {
  title: string;
  tasks: Task[];
}

export const TaskColumn = ({ title, tasks }: TaskColumnProps) => (
  <div className="flex-1 min-w-0">
    <h2 className="text-white font-semibold mb-4">
      {title} ({tasks.length.toString().padStart(2, "0")})
    </h2>
    <div className="flex flex-col gap-8">
      {tasks.map((task, index) => (
        <TaskCard key={`${title}-${index}`} {...task} />
      ))}
    </div>
  </div>
);
