import { type Task, TaskCard } from "@entities/task";
import { Box } from "@mantine/core";
import { RemoveButton } from "@shared/ui";
import { memo, useCallback } from "react";

type Props = {
  task: Task;
  onRemove: (id: number) => void;
};

export const TaskListItem = memo(function TaskListItem({ task, onRemove }: Props) {
  const handleRemove = useCallback(() => {
    onRemove(task.id);
  }, [onRemove, task.id]);

  return (
    <Box pos="relative">
      <TaskCard task={task} />
      <RemoveButton onRemove={handleRemove} />
    </Box>
  );
});
