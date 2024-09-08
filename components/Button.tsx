"use client";

import { Icon, IconName } from "./Icon";

type ButtonProps = {
  onPress?: () => void;
  icon?: IconName;
  text?: string;
  type: "primary" | "secondary";
  state?: "default" | "hover" | "selected" | "disable";
};

export const Button = ({
  onPress,
  icon,
  text,
  state = "default",
  type,
}: ButtonProps) => {
  const typeStyles = {
    primary: `bg-primary-4`,
    secondary: ``,
  };

  const statePrimaryStyles = {
    default: `bg-primary-4 hover:bg-primary-2`,
    hover: "bg-primary-2",
    selected: "bg-primary-3",
    disable: "bg-primary-2",
  };

  const stateSecondaryStyles = {
    default: `bg-transparent hover:bg-neutral-2`,
    hover: "bg-neutral-2",
    selected: "bg-neutral-3",
    disable: "bg-transparent",
  };

  const iconBorderStyles = {
    default: ``,
    hover: "",
    selected: "border border-primary-4 !bg-transparent",
    disable: "",
  };

  const stateStyle =
    type === "primary"
      ? statePrimaryStyles[state]
      : stateSecondaryStyles[state];

  const iconBorderStyle = iconBorderStyles[state];

  return (
    <button
      className={`p-2 bg-p w-fit rounded-lg flex gap-3 ${stateStyle} ${
        icon && iconBorderStyle
      }`}
      onClick={onPress}
    >
      {text && text}
      {icon ? (
        <div className={`${state === "selected" ? "text-primary-4" : ""}`}>
          <Icon name={icon} />{" "}
        </div>
      ) : null}
    </button>
  );
};
