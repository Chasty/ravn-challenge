import { TypeTag } from "@/components/Tag";
import { clsx, type ClassValue } from "clsx";
import { differenceInDays, format, isToday, isYesterday } from "date-fns";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const timeIndicator = (
  dueDate: Date
): { type: TypeTag; text: string } => {
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

    return format(dueDate, "dd MMM, yyyy");
  };

  return {
    type: getType(),
    text: getText().toUpperCase(),
  };
};
