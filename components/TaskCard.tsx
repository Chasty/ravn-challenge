import { Icon } from "./Icon";
import { Tag } from "./Tag";

export interface Task {
  title: string;
  points: number;
  date: string;
  dateType: "TODAY" | "YESTERDAY" | string;
  platforms: string[];
  avatarUrl: string;
}

export const TaskCard = (props: Task) => {
  return (
    <div className="flex flex-col p-4 rounded-lg gap-4 bg-neutral-4">
      <div className="flex h-fit items-center">
        <p className="flex-1 font-sans text-body-l-bold text-neutral-1">
          Twitter
        </p>
        <Icon name="dots" />
      </div>
      <div className="flex h-fit items-center">
        <p className="flex-1 font-sans text-body-m-bold text-neutral-1">
          3 Pts
        </p>
        <Tag type="general" style="solid" icon="clock" text="TODAY" />
      </div>
      <div className="flex h-fit gap-2">
        <Tag type="green" style="solid" text="IOS APP" />
        <Tag type="yellow" style="solid" text="LABEL" />
      </div>

      <div className="flex h-fit items-center">
        <div className="flex flex-1">
          <div className="w-8 h-8 rounded-full bg-white" />
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
