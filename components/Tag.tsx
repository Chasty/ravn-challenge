"use client";

import { Icon, IconName } from "./Icon";

export type TypeTag = "general" | "green" | "blue" | "yellow" | "red";

type TagProps = {
  icon?: IconName;
  text?: string;
  style: "solid" | "outline";
  type: TypeTag;
  className?: string;
};

export const Tag = ({ icon, text, style, type, className }: TagProps) => {
  const iconLabelColorType = {
    general: `text-neutral-1`,
    green: "text-secondary-4",
    blue: "text-blue",
    yellow: "text-tertiary-4",
    red: "text-primary-4",
  };

  const bgContainerColorType = {
    general: `bg-[#94979A1A]`,
    green: "bg-[#70B2521A]",
    blue: "bg-[#2F61BF1A]",
    yellow: "bg-[#E5B4541A]",
    red: "bg-[#DA584B1A]",
  };

  const borderContainerColorType = {
    general: `border border-neutral-1`,
    green: "border border-secondary-4",
    blue: "border border-blue",
    yellow: "border border-tertiary-4",
    red: "border border-primary-4",
  };

  const iconColor = iconLabelColorType[type];
  const bgContainerColor =
    style === "outline"
      ? borderContainerColorType[type]
      : bgContainerColorType[type];

  return (
    <div
      className={`py-1 px-4 bg-p items-center justify-center rounded-md text-neutral-1 flex gap-3 ${bgContainerColor} ${className}`}
    >
      {icon ? (
        <div className={`${iconColor}`}>
          <Icon name={icon} />{" "}
        </div>
      ) : null}

      {text && <p className={`${iconColor} text-body-m-bold`}>{text}</p>}
    </div>
  );
};
