"use client";
import Link from "next/link";
import { SideBarItem } from "./SideBarItem";
import logoMark from "../assets/LogoMark.png";
import Image from "next/image";
import { IconName } from "./Icon";
import { usePathname } from "next/navigation";

const items: Array<{ name: string; icon: IconName; path: string }> = [
  {
    name: "DASHBOARD",
    icon: "dashboard",
    path: "/",
  },
  {
    name: "PROJECTS",
    icon: "project",
    path: "/projects",
  },
  {
    name: "MY TASK",
    icon: "hamburguer",
    path: "/my-task",
  },
  {
    name: "CALENDAR",
    icon: "calendar",
    path: "/calendar",
  },
  {
    name: "TIME MANAGE",
    icon: "clock",
    path: "/time-manage",
  },
  {
    name: "REPORTS",
    icon: "report",
    path: "/reports",
  },
  {
    name: "SETTINGS",
    icon: "settings",
    path: "/settings",
  },
];

export const SideBar = () => {
  const fullPathname = usePathname();
  const pathname = fullPathname.split("?")[0];

  return (
    <div className="flex w-60 flex-col items-center bg-neutral-4 rounded-3xl">
      <Image className="w-[40px] h-[40px] mt-4" src={logoMark} alt="logo" />
      <div className="mt-8">
        {items.map((item, idx) => (
          <Link href={item.path} key={`${item.name}-${idx}`}>
            <SideBarItem
              variant={pathname === item.path ? "selected" : "normal"}
              title={item.name}
              icon={item.icon}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};
