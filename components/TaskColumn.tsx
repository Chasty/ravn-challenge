import { GetTasksQuery } from "@/graphql/__generated__/graphql";
import { TaskCard } from "./TaskCard";
import { EmptyTaskCard } from "./EmptyTaskCard";
import { Skeleton } from "./ui/skeleton";

export type Task = GetTasksQuery["tasks"][0];

interface TaskColumnProps {
  title: string;
  loading: boolean;
  tasks: Task[];
}

export const TaskColumn = ({ title, tasks, loading }: TaskColumnProps) => (
  <div className="flex-1 min-w-0">
    <h2 className="text-white font-semibold mb-4">
      {title} ({tasks.length.toString().padStart(2, "0")})
    </h2>
    <div className="flex flex-col gap-8">
      {loading &&
        Array.from({ length: 8 })
          .fill(0)
          .map((r, k) => (
            <Skeleton
              key={`${r}-skeleton-${k}`}
              className="h-[208px] w-full rounded-xl bg-neutral-4"
            />
          ))}

      {tasks.length === 0 && !loading ? (
        <EmptyTaskCard />
      ) : (
        tasks.map((task, index) => (
          <TaskCard key={`${title}-${index}`} {...task} />
        ))
      )}
    </div>
  </div>
);
