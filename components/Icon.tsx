"use client";

import Dashboard from "../assets/icons/Dashboard.svg";
import Hamburguer from "../assets/icons/Hamburguer.svg";
import Calendar from "../assets/icons/Calendar.svg";
import Settings from "../assets/icons/Settings.svg";
import Clock from "../assets/icons/Clock.svg";
import Project from "../assets/icons/Project.svg";
import Report from "../assets/icons/Report.svg";
import Search from "../assets/icons/Search.svg";
import Bell from "../assets/icons/Bell.svg";
import Dots from "../assets/icons/Dots.svg";
import Timer from "../assets/icons/Timer.svg";
import Clip from "../assets/icons/Clip.svg";
import TaskLines from "../assets/icons/TaskLines.svg";
import Comment from "../assets/icons/Comment.svg";
import Add from "../assets/icons/Add.svg";
import Date from "../assets/icons/Date.svg";
import Label from "../assets/icons/Label.svg";
import Points from "../assets/icons/Points.svg";
import User from "../assets/icons/User.svg";
import Check from "../assets/icons/Check.svg";
import UnCheck from "../assets/icons/UnCheck.svg";
import Pen from "../assets/icons/Pen.svg";
import Trash from "../assets/icons/Trash.svg";

const iconMapping = {
  dashboard: <Dashboard />,
  hamburguer: <Hamburguer />,
  calendar: <Calendar />,
  settings: <Settings />,
  clock: <Clock />,
  project: <Project />,
  report: <Report />,
  bell: <Bell />,
  search: <Search />,
  dots: <Dots />,
  timer: <Timer />,
  clip: <Clip />,
  taskline: <TaskLines />,
  comment: <Comment />,
  add: <Add />,
  date: <Date />,
  label: <Label />,
  points: <Points />,
  user: <User />,
  check: <Check />,
  uncheck: <UnCheck />,
  pen: <Pen />,
  trash: <Trash />,
};

// <Hamburguer width="18" height="18" />
export type IconName = keyof typeof iconMapping;

export const Icon = ({ name }: { name: IconName }) => {
  return iconMapping[name];
};
