import type { Task } from "@entities/task";
import type { Filter } from "@features/taskList";
import { useCallback, useMemo, useState } from "react";

const initialTasks: Task[] = [
  { id: "1", title: "Send pr", completed: true },
  { id: "2", title: "Watch inst reels", completed: true },
  { id: "3", title: "Sleep", completed: false },
  { id: "4", title: "Learn new language", completed: false }
];

export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [filter, setFilter] = useState<Filter>("all");

  const removeTask = useCallback((id: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  }, []);

  const filteredTasks = useMemo(
    () =>
      tasks.filter((task) => {
        if (filter === "completed") return task.completed;
        if (filter === "incomplete") return !task.completed;
        return task;
      }),
    [filter, tasks]
  );

  return {
    filteredTasks,
    tasks,
    removeTask,
    filter,
    setFilter
  };
}
