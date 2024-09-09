import { DefaultFormValues } from "@/components/Modal";
import { Assignee, LABELS, Point, TagLabel } from "@/models";
import { ChangeEvent, useCallback, useEffect, useState } from "react";

export type ModalConfig = {
  openModal?: boolean;
  hasTrigger?: boolean;
  onOpenChange?: (open: boolean) => void;
  defaultValues?: DefaultFormValues;
};

export const useModalForm = ({
  openModal,
  defaultValues,
  onOpenChange,
}: ModalConfig) => {
  const [taskTitle, setTaskTitle] = useState("");
  const [isAssigneeOpen, setIsAssigneeOpen] = useState(false);

  const [selectedAssignee, setSelectedAssignee] = useState<Assignee | null>(
    null
  );

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isEstimeOpen, setIsEstimeOpen] = useState(false);
  const [selectedEstimate, setSelectedEstimate] = useState<Point | null>(null);

  const [isDateOpen, setIsDateOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);

  const [tags, setTags] = useState<TagLabel[]>(LABELS);
  const [isTagsOpen, setIsTagsOpen] = useState(false);

  const selectedTags = tags.filter((t) => t.isChecked);

  const handleAssigneeSelect = useCallback((assignee: Assignee) => {
    setSelectedAssignee(assignee);
    setIsAssigneeOpen(false);
  }, []);

  const handleEstimateSelect = useCallback((estimate: Point) => {
    setSelectedEstimate(estimate);
    setIsEstimeOpen(false);
  }, []);

  const handleDateSelect = useCallback((date: Date | undefined) => {
    setSelectedDate(date);
    setIsDateOpen(false);
  }, []);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTaskTitle(e.target.value);
  };

  useEffect(() => {
    setIsModalOpen(Boolean(openModal));
  }, [openModal]);

  useEffect(() => {
    if (defaultValues?.taskTitle) {
      setTaskTitle(defaultValues.taskTitle);
    }
    if (defaultValues?.selectedAssignee) {
      setSelectedAssignee(defaultValues.selectedAssignee);
    }
    if (defaultValues?.selectedEstimate) {
      setSelectedEstimate(defaultValues.selectedEstimate);
    }
    if (defaultValues?.defaultTags) {
      setTags(defaultValues.defaultTags);
    }
    if (defaultValues?.selectedDueDate) {
      setSelectedDate(defaultValues.selectedDueDate);
    }
  }, [defaultValues]);

  const clearAll = (open: boolean) => {
    setSelectedAssignee(null);
    setSelectedEstimate(null);
    setSelectedDate(undefined);
    setTags([...LABELS].map((m) => ({ ...m, isChecked: false })));
    setIsModalOpen(open);
    setTaskTitle("");
    onOpenChange?.(open);
  };

  const handleLabelSelect = useCallback(
    (index: number) => {
      const prevData = [...tags];

      prevData[index].isChecked = !prevData[index].isChecked;

      setTags(prevData);
      setTimeout(() => {
        setIsTagsOpen(false);
      }, 100);
    },
    [tags]
  );

  const isAllValid =
    taskTitle.length > 0 &&
    selectedAssignee &&
    selectedEstimate &&
    selectedDate &&
    selectedTags.length > 0;

  return {
    isModalOpen,
    clearAll,
    taskTitle,
    onChange,
    isEstimeOpen,
    setIsEstimeOpen,
    selectedEstimate,
    handleEstimateSelect,
    isAssigneeOpen,
    setIsAssigneeOpen,
    selectedAssignee,
    handleAssigneeSelect,
    isTagsOpen,
    setIsTagsOpen,
    tags,
    handleLabelSelect,
    selectedTags,
    isDateOpen,
    setIsDateOpen,
    selectedDate,
    handleDateSelect,
    isAllValid,
    setIsModalOpen,
  };
};
