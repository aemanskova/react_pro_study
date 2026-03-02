import type { Filter } from "@features/taskList";

export const TASK_FILTER_OPTIONS: { label: string; value: Filter }[] = [
  { label: "All", value: "all" },
  { label: "Completed", value: "completed" },
  { label: "Incomplete", value: "incomplete" }
];
