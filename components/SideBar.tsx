import { SideBarItem } from "./SideBarItem";

import logoMark from "../assets/LogoMark.png";
import Image from "next/image";
import { IconName } from "./Icon";

const items: Array<{ name: string; icon: IconName }> = [
  {
    name: "DASHBOARD",
    icon: "dashboard",
  },
  {
    name: "PROJECTS",
    icon: "project",
  },
  {
    name: "MY TASK",
    icon: "hamburguer",
  },
  {
    name: "CALENDAR",
    icon: "calendar",
  },
  {
    name: "TIME MANAGE",
    icon: "clock",
  },
  {
    name: "REPORTS",
    icon: "report",
  },
  {
    name: "SETTINGS",
    icon: "settings",
  },
];

export const SideBar = () => {
  return (
    <div className="flex w-64 flex-col items-center bg-neutral-4 rounded-3xl">
      <Image className="w-[40px] h-[40px] mt-4" src={logoMark} alt="logo" />
      <div className="mt-8">
        {items.map((item, idx) => (
          <SideBarItem
            variant={idx === 0 ? "selected" : "normal"}
            key={item.name}
            title={item.name}
            icon={item.icon}
          />
        ))}
      </div>
    </div>
  );
};
