import { PointEstimate, Task, TaskTag } from "@/graphql/__generated__/graphql";
import { Icon } from "./Icon";
import { Tag, TypeTag } from "./Tag";
import Image from "next/image";
import placeholder from "../assets/placeholder.png";
import { differenceInDays, format, isToday, isYesterday } from "date-fns";

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

const pointsMapping: Record<PointEstimateValues, string> = {
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

    return format(dueDate, "dd MMMM, yyyy");
  };

  return {
    type: getType(),
    text: getText().toUpperCase(),
  };
};

export const TaskCard = (props: Task) => {
  const { name, pointEstimate, tags, dueDate } = props;
  const { text, type } = timeIndicator(new Date(dueDate));
  return (
    <div className="flex flex-col p-4 rounded-lg gap-4 bg-neutral-4">
      <div className="flex h-fit items-center">
        <p className="flex-1 font-sans text-body-l-bold text-neutral-1">
          {name}
        </p>
        <Icon name="dots" />
      </div>
      <div className="flex h-fit items-center">
        <p className="flex-1 font-sans text-body-m-bold text-neutral-1">
          {pointsMapping[pointEstimate]}
        </p>
        <Tag type={type} style="solid" icon="clock" text={text} />
      </div>
      <div className="flex h-fit gap-2">
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
