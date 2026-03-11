import { type Task, useGetTasksQuery } from "@entities/task";
import type { Filter } from "@features/taskList";
import { useCallback, useEffect, useMemo, useState } from "react";

export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<Filter>("all");

  const { data = [], isLoading, error } = useGetTasksQuery();

  const removeTask = useCallback((id: number) => {
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

  useEffect(() => {
    if (data && data.length > 0) {
      setTasks(data);
    }
  }, [data]);

  return {
    error,
    isLoading,
    filteredTasks,
    tasks,
    removeTask,
    filter,
    setFilter
  };
}
