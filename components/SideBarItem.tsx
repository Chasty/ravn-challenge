import { Icon, IconName } from "./Icon";

export const SideBarItem = ({
  icon,
  title,
  variant,
}: {
  icon: IconName;
  title: string;
  variant: "normal" | "hover" | "selected";
}) => {
  const isSelected = variant === "selected";

  const selectedBorderStyles = isSelected
    ? `border-r-4 border-primary-4 bg-gradient-to-r from-transparent to-[rgba(210,77,77,0.1)]`
    : "";

  const selectedIcon = isSelected ? `border-primary-4` : "";
  const selectedTitle = isSelected ? `text-primary-4` : "";

  return (
    <div
      className={`flex w-[232px] gap-4 py-3 hover:bg-transparent group pl-4  ${selectedBorderStyles}`}
    >
      <div
        className={`w-[24px] h-[24px] flex items-center justify-center  group-hover:border-primary-4 ${selectedIcon}`}
      >
        <div
          className={
            isSelected
              ? `text-primary-4`
              : `text-neutral-2 group-hover:text-primary-4`
          }
        >
          <Icon name={icon} />
        </div>
      </div>
      <span
        className={`font-sans text-body-m-bold text-neutral-2 group-hover:text-primary-4 ${selectedTitle}`}
      >
        {title}
      </span>
    </div>
  );
};
